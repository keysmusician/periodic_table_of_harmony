'use strict';

/* eslint-disable camelcase */

// GLOBAL PARAMETERS

/* global d3, alert */

// Array of rows (nested arrays) of IntervalCycle objects used to create nodes with donut/pie charts.
import { dataset } from './data.js';

// The dataset without cohemitonic nodes
const harmonious_dataset = dataset.map(
  row => row.filter(node => !node.cohemitonic) // Remove cohemitonic nodes
).filter(row => row.length !== 0); // Remove empty rows

const Tau = 2 * Math.PI;

const pitch_classes = [
  'A',
  'A♯ / B♭',
  'B',
  'C',
  'C♯ / D♭',
  'D',
  'D♯ / E♭',
  'E',
  'F',
  'F♯ / G♭',
  'G',
  'G♯ / A♭'
];

// The following parameters determine the size, scale and and center of the diagram:

const diagram_scale_factor = 5;

const diagram_width = 1920 * diagram_scale_factor * 2;

const diagram_height = 1080 * diagram_scale_factor;

const diagram_x_origin = -diagram_width / 2; // Places the horizontal origin in the center of the diagram.

const diagram_y_origin = -diagram_height / 2; // As above for the vertical axis.

// Zoom parameters
// const default_zoom = 0.5;

const max_zoom_out = 0.5;

const max_zoom_in = 30;

const transition_duration = 750; // Time in milliseconds it takes for node & link positions to move to new locations

// A donut chart is used at each node of the network graph to display the intervals in each interval cycle.
// The following variables define the parameters of the donut charts:

const interval_chart_outer_radius = 50;

const interval_chart_inner_radius = 0;

const note_chart_inner_radius = interval_chart_outer_radius;

const note_chart_outer_radius = 2 * interval_chart_outer_radius;

const node_rotation = Tau * (180 / 360);

const node_label_offset = 10;

const interval_label_radius_offset = 0;

const interval_label_radius =
  (interval_chart_outer_radius + interval_chart_inner_radius) / 2 +
  interval_label_radius_offset;

const arc_label_font_height = 15;

const note_name_radius = 1.5 * interval_chart_outer_radius;

const io_label_offset = node_label_offset + 12;

// const node_diameter = interval_chart_outer_radius * 2;

// const node_margin_factor = 0.1;

// const node_margin = interval_chart_outer_radius * node_margin_factor;

// Initializes a D3 function which creates pie charts using svg arcs. pie().value(1) sets all arcs the same number of radians.
const unit_pie = d3.pie()
  .value(1)
  .startAngle(node_rotation)
  .endAngle(Tau + node_rotation);

// Creates an arc shaped svg path. d3.pie uses these to draw the donut charts.
const interval_chart_arc = d3.arc()
  .innerRadius(interval_chart_inner_radius)
  .outerRadius(interval_chart_outer_radius);

// Note name arcs
const pitch_class_chart_arc = d3.arc()
  .innerRadius(note_chart_inner_radius)
  .outerRadius(note_chart_outer_radius);

// A separate arc used to position the labels relative to the arcs in the donut chart.
const interval_label_position_arc = d3.arc()
  .innerRadius(interval_label_radius)
  .outerRadius(interval_label_radius);

const pitch_class_position_arc = d3.arc()
  .innerRadius(note_name_radius)
  .outerRadius(note_name_radius);

// Non-constant globals (encapsulated to prevent accidental setting through name collisions) and error messages
const GLOBALS = {
  HIDE_ALL_LINKS: false, // The state of the "#all-links-btn"
  HIDE_INACTIVE_LINKS: false, // The state of the "#inactive-links-btn"
  ROOT_PITCH_CLASS_i: 0, // Root pitch class index
  SELECTION: d3.selectAll('.selected'), // Global selection of user selected nodes & their links (empty on page load)
  ERROR_MESSAGES: {
    MAKE_SELECTION: 'No nodes are selected. Make a selection first. ' +
      'Click any node to select it.',
    SELECT_SINGULAR_NODE:
      'Please select only one node to use the family tree selector.'
  },
  GENERATIONS: {
    PARENTS: 0,
    CHILDREN: 1,
    IMMEDIATE_FAMILY: 2
  }
};

// GLOBAL FUNCTIONS

/**
 * Returns a mapping of node positions of the form:
 * {
 *    IntervalCycle ID: {
 *      x: (number) horizontal position,
 *      y: (number) vertical position
 *    }
 * }
 *
 * @param { Array } dataset A list of rows of IntervalCycle objects (see data.js). Will throw if there are any empty rows.
 *
 * @param { bool } invert_vertically The vertical orientation of the graph
 * */
function get_node_positions (dataset, invert_vertically = false) {
  const node_positions = {};

  dataset.forEach((row, row_index) => {
    const row_position = (row_index + 1) * // 1 is added for proper spacing; The first "division" is the edge of the diagram, so an additional division must always be added.
      (diagram_height / (dataset.length + 1)) +
      diagram_y_origin;

    row.forEach((interval_cycle, column_index) => {
      const column_position = (column_index + 1) *
        (diagram_width / (row.length + 1)) +
        diagram_x_origin;

      node_positions[interval_cycle.id] = {
        x: column_position,
        y: invert_vertically ? -row_position : row_position
      };
    });
  });

  return node_positions;
}

function set_pitch_class_label (pitch_class_label, interval_cumulative_sum) {
  // `cumulative_interval` is the sum of the intervals in a particular node up to this arc
  // Sets the pitch class labels on a given pitch class label element

  const pitch_class_index =
    (GLOBALS.ROOT_PITCH_CLASS_i + interval_cumulative_sum) % 12;

  pitch_class_label.text(pitch_classes[pitch_class_index]);
}

function update_global_selection () {
  GLOBALS.SELECTION = d3.selectAll('.selected'); // Updates the global selection

  const node_count = GLOBALS.SELECTION.select('g')
    .size();

  d3.select('#clear-btn')
    .text(node_count);
}

// Event handlers

function handle_node_mouseover (active) {
  return function (event, d) {
    const node = d3.select(this);

    node.classed('hover', active);

    const links = d3.selectAll('.' + this.id);

    links.classed('hover', active);

    if (GLOBALS.HIDE_INACTIVE_LINKS && !node.classed('selected')) { // Hides links if "hide-inactive-links" button is active
      links.attr('display', active ? 'auto' : 'none');
    }

    const io_label = node.select('.io-label');

    io_label.attr('display', active ? 'auto' : 'none'); // Show io tooltip
  };
}

// Sets a class to a selected node and its links to signal that the node has been selected.
function handle_node_click (d, i) {
  const node = d3.select(this.parentNode);

  const node_id = this.parentNode.id; // Variable used because `this` needs to be invoked outside of the following block

  node.classed('selected', !node.classed('selected')); // Toggle the 'selected' class

  if (node.classed('selected')) {
    d3.selectAll('.' + node_id) // Only links use .id property as a class (.) --- Nodes use .id property as an ID (#)
      .classed('selected', true); // Set all connected links to selected
  } else { // If the node is being un-selected,
    d3.selectAll('.' + node_id)
      .each(function (d) { // Check each connected link
        if (
          d.source !== node_id &&
          !d3.select('#' + d.source).classed('selected')
        ) { // If the link source is not connected to a selected node (besides this one)
          d3.select(this).classed('selected', false);
        } else if (
          d.target !== node_id &&
          !d3.select('#' + d.target).classed('selected')
        ) { // If the link target is not connected to a selected node (besides this one)
          d3.select(this).classed('selected', false);
        }
      }
      );
  }

  update_global_selection();
}

/**
 * Rotates a node when one of its pitch class chart arcs are clicked such that
 * the clicked arc becomes the new root.
 */
function handle_pitch_class_chart_arc_click (event, datum) {
  // const angle = (((datum.startAngle + datum.endAngle) / 2) - Tau / 2) *
  //   360 / Tau; // Convert radians to degrees

  // d3.select(this.parentNode).transition()
  //   .attr('transform', 'translate(0, 0) rotate(' + angle + ')')
  //   .duration(600);

  const root_arc_index = datum.index;

  const arc = d3.select(this);

  if (arc.classed('root')) { return; }

  arc.classed('root', true);

  const pitch_class_arcs = d3.select(this.parentNode);

  d3.select(
    this.parentNode.childNodes[pitch_class_arcs.attr('root-arc-index')]
  ).classed('root', false);

  pitch_class_arcs.attr('root-arc-index', root_arc_index);

  // Redraw pitch class labels
  let interval_cumulative_sum = 0;

  d3.select(this.parentNode.parentNode)
    .select('.pitch-class-labels')
    .selectAll('text')
    .each((arc_datum, pitch_class_label_i, pitch_class_labels) => {
      const pitch_class_label = d3.select(
        pitch_class_labels[
          (pitch_class_label_i + root_arc_index) % pitch_class_labels.length]
      );

      pitch_class_label.classed(
        'root-label', pitch_class_label_i === root_arc_index);

      set_pitch_class_label(pitch_class_label, interval_cumulative_sum);

      interval_cumulative_sum += pitch_class_label.datum().data;
    });
}

function handle_zoom ({ transform }) {
  svg.attr('transform', transform);
}

// INITIALIZATION

// Creates and SVG element as a canvas for the diagram and sizes it.
d3.select('#diagram')
  .append('svg')
  .attr('id', 'canvas')
  .attr(
    'viewBox',
    diagram_x_origin + ' ' +
    diagram_y_origin + ' ' +
    diagram_width + ' ' +
    diagram_height
  );

const zoom = d3.zoom()
  .scaleExtent([max_zoom_out, max_zoom_in])
  .translateExtent(
    [
      [-diagram_width * 2, -diagram_height * 2],
      [diagram_width * 2, diagram_height * 2]
    ]
  )
  .on('zoom', handle_zoom);

// Navigation listener (for pan and zoom events)
d3.select('#canvas')
  .append('rect')
  .classed('navigation-listener', true)
  .attr('x', -diagram_width / 2)
  .attr('y', -diagram_height * 2)
  .attr('width', diagram_width * 4) // Temporary work-around to get the zoom listener to reach the height and width of the page at any size widow.
  .attr('height', diagram_height * 4)
  .style('opacity', 0.0)
  .call(zoom);

const svg = d3.select('#canvas')
  .append('g')
  .classed('graph', true);

const link_group = svg.append('g')
  .classed('links', true);

const node_group = svg.append('g')
  .classed('nodes', true);

// GRAPH DRAWING

/**
 * Draws the graph.
 *
 * @param { Array } input_dataset A list of IntervalCycle objects (see data.js)
 */
function draw_graph (input_dataset) {
  // Transitions are not reusable and must be created each time the graph is drawn.
  const transition = svg.transition()
    .duration(transition_duration);

  const node_positions = get_node_positions(input_dataset);

  // Array of Link objects for the network diagram which builds dynamically from the dataset upon loading the page:
  // Link objects are defined as: { source: string'parent node ID', target: string'child node id' }
  const link_data = []; // For drawing the links

  input_dataset.forEach(row => {
    row.forEach(interval_cycle => {
      interval_cycle.children.forEach(child_id => {
        if (node_positions[child_id]) {
          link_data.push({ source: interval_cycle.id, target: child_id });
        }
      });
    });
  });

  // Creates an SVG group for the node graphic and initializes each node.
  node_group.selectAll('.node')
    .data(input_dataset.flat(), interval_cycle => interval_cycle.id)
    .join(
      enter => { // New additions to the dataset are handled here.
        const nodes = enter.append('g')
          .classed('node', true)
          .classed('cohemitonic', interval_cycle => interval_cycle.cohemitonic)
          .classed('saturated', interval_cycle => interval_cycle.saturated)
          .attr('id', interval_cycle => interval_cycle.id)
          .attr('transform', interval_cycle => // Sets the [x,y] positions of each node by translation from the origin.
            'translate(' + node_positions[interval_cycle.id].x + ' ' +
          node_positions[interval_cycle.id].y + ') rotate(0)'
          )
          .on('mouseover', handle_node_mouseover(true))
          .on('mouseout', handle_node_mouseover(false));

        nodes.each(function (interval_cycle) { // Draws each node, which is a group of small charts.
          const node = d3.select(this); // A D3 selection of the HTML SVG group element described above.

          // Rotates the interval cycle so the root comes first.
          interval_cycle.intervals = interval_cycle.intervals
            .slice(interval_cycle.root)
            .concat(interval_cycle.intervals.slice(0, interval_cycle.root));

          const interval_chart_arc_data = unit_pie(interval_cycle.intervals);

          const interval_chart = node.append('g') // Draws the interval charts at each node.
            .classed('interval-chart', true)
            .on('click', handle_node_click);

          interval_chart.append('g') // Draws the arcs for the interval charts.
            .classed('interval-arcs', true)
            .selectAll('path')
            .data(interval_chart_arc_data)
            .join('path')
            .classed('arc', true)
            .attr('d', interval_chart_arc);

          interval_chart.append('g') // Draws labels on arcs of the interval chart.
            .classed('interval-labels', true)
            .selectAll('text')
            .data(interval_chart_arc_data)
            .join('text')
            .each((arc_datum, arc_element_i, arc_element) => {
              const arc = d3.select(arc_element[arc_element_i]);

              const arc_center = interval_label_position_arc
                .centroid(arc_datum);

              arc.attr('x', arc_center[0])
                .attr('y', arc_center[1] + arc_label_font_height / 2)
                .text(interval_cycle.intervals[arc_element_i]); // Sets & positions interval label text.

              arc.classed(
                'root-label', interval_cycle.root === arc_element_i); // Sets a class on the text which is labeling the root arc.
            });

          const rotation_offset = Tau * (
            (1 / interval_cycle.intervals.length) / 2
            // + (interval_cycle.root / interval_cycle.intervals.length)
          );

          const rotated_unit_pie = d3.pie()
            .value(1)
            .startAngle(node_rotation - rotation_offset)
            .endAngle(Tau + node_rotation - rotation_offset);

          const pitch_class_chart_arc_data =
            rotated_unit_pie(interval_cycle.intervals);

          const pitch_class_chart = node.append('g')
            .classed('pitch-class-chart', true);

          // Draws the arcs in which the pitch class labels will reside.
          const default_root_arc_index = 0;
          pitch_class_chart.append('g')
            .classed('pitch-class-arcs', true)
            .attr('root-arc-index', default_root_arc_index)
            .selectAll('.arc')
            .data(pitch_class_chart_arc_data)
            .join('g')
            .classed('arc', true)
            .classed('root', (_, arc_i) => (arc_i === default_root_arc_index)) // The bottom arc (first one drawn) will be the default root.
            .on('click', handle_pitch_class_chart_arc_click)
            .append('path')
            .attr('d', pitch_class_chart_arc);

          const pitch_class_labels_element = pitch_class_chart
            .append('g')
            .classed('pitch-class-labels', true);

          let interval_cumulative_sum = 0;

          pitch_class_labels_element
            .selectAll('text')
            .data(pitch_class_chart_arc_data)
            .join('text')
            .each((arc_datum, pitch_class_label_i, pitch_class_labels) => {
              const pitch_class_label = d3.select(
                pitch_class_labels[pitch_class_label_i]);
              const arc_center = pitch_class_position_arc.centroid(arc_datum);

              // Sets a class on the text element labeling the root arc.
              pitch_class_label.classed(
                'root-label', pitch_class_label_i === interval_cycle.root);

              // Sets & positions pitch class label text.
              pitch_class_label.attr('x', arc_center[0])
                .attr('y', arc_center[1] + arc_label_font_height / 2)
                .call(set_pitch_class_label, interval_cumulative_sum);

              interval_cumulative_sum +=
                interval_cycle.intervals[pitch_class_label_i];
            });
        });

        // Draws circles to fill the centers of the nodes. Unused, might delete.
        // nodes.append('circle')
        //   .classed('node-center', true)
        //   .attr('r', interval_chart_inner_radius);

        // Draws the node title label.
        nodes.append('text')
          .classed('node-label', true)
          .text(d => d.name)
          .attr('y', -note_chart_outer_radius - node_label_offset);

        // Draws the I/O labels (the number of parent and child links).
        nodes.append('text')
          .classed('io-label', true)
          .attr('display', 'none')
          .attr('text-anchor', 'middle')
          .text(d =>
            'Parents: ' + d.parents.length + ' Children: ' +
              d.children.length
          )
          .attr('dy', (note_chart_outer_radius + io_label_offset));
      },
      // Data that remains the same after the dataset changed is handled here.
      update => update.call(
        update => update
          .transition(transition)
          .attr('transform', interval_cycle =>
            'translate(' + node_positions[interval_cycle.id].x + ' ' +
            node_positions[interval_cycle.id].y + ') rotate(0)'
          )
      )
    );

  // Draws links.
  link_group.selectAll('line')
    .data(link_data, link => link.source + ' ' + link.target)
    .join(
      enter => enter.append('line')
        .each(function (link) {
          // Looks up a given node ID and returns the node's (x, y) coordinates from node_positions.
          const link_source_position = node_positions[link.source];
          const link_target_position = node_positions[link.target];

          d3.select(this)
            .classed(link.source, true)
            .classed(link.target, true)
            .attr('display', GLOBALS.HIDE_INACTIVE_LINKS ? 'none' : 'auto')
            .attr('x1', link_source_position.x)
            .attr('y1', link_source_position.y)
            .attr('x2', link_target_position.x)
            .attr('y2', link_target_position.y);

          if (
            d3.select('#' + link.source).classed('selected') ||
            d3.select('#' + link.target).classed('selected')
          ) { // If entering links are connected to a selected node, show them as selected.
            d3.select(this).classed('selected', true);
          }
        })
      ,
      update => update.call(
        update => update.transition(transition)
          .attr('x1', d => node_positions[d.source].x)
          .attr('y1', d => node_positions[d.source].y)
          .attr('x2', d => node_positions[d.target].x)
          .attr('y2', d => node_positions[d.target].y)
      ) // Sets the endpoints of the links' lines, and adds their sources and targets as classes.
    );
}
draw_graph(dataset);

// Buttons

/**
 * Toggles displaying cohemitonic nodes.
 * */
function toggle_cohemitonic () {
  const button = d3.select(this);
  if (button.attr('active') === '1') {
    button.attr('active', 0);

    draw_graph(dataset);
  } else {
    button.attr('active', 1);
    draw_graph(harmonious_dataset);
  }

  update_global_selection();
}

d3.select('#cohemitonic-btn')
  .on('click', toggle_cohemitonic);

/**
 * Toggles displaying unselected nodes.
 * */
function toggle_unselected () {
  const button = d3.select(this);

  if (button.attr('active') === '1') { // When toggling off, return to previous graph display.
    button.attr('active', 0);

    if (d3.select('#cohemitonic-btn').attr('active') === '1') {
      draw_graph(harmonious_dataset);
    } else {
      draw_graph(dataset);
    }
  } else { // When toggling on...
    button.attr('active', 1);

    if (GLOBALS.SELECTION.size()) { // Only draw if there's something in the global selection.
      const selected_dataset = dataset.map(row =>
        row.filter(node => { // New dataset built from user-selected nodes. // PERFORMANCE NOTE: Might be more efficient to build from the global selection.
          // If the node exists, see if it's selected.
          if (!d3.select('#' + node.id).empty()) {
            return d3.select('#' + node.id).classed('selected');
          } else {
            return false;
          }
        })
      ).filter(row => row.length !== 0);

      draw_graph(selected_dataset);
    } else {
      alert(GLOBALS.ERROR_MESSAGES.MAKE_SELECTION);
    }
  }

  update_global_selection();
}

// Toggles displaying selected/unselected nodes.
d3.select('#unselected-btn')
  .on('click', toggle_unselected);

// Highlights link-btn if one of the link buttons has been toggled.
function update_link_btn_state () {
  const sub_button_is_active = GLOBALS.HIDE_ALL_LINKS ||
    GLOBALS.HIDE_INACTIVE_LINKS;

  d3.select('#link-btn')
    .classed('active', sub_button_is_active);
}

d3.select('#inactive-links-btn')
  .on('click', function toggle_inactive_links () { // Toggles displaying inactive links
    GLOBALS.HIDE_INACTIVE_LINKS = !GLOBALS.HIDE_INACTIVE_LINKS;

    d3.select(this)
      .classed('active', GLOBALS.HIDE_INACTIVE_LINKS);

    const unselected_lines = d3.selectAll('line')
      .filter(function () {
        return !this.classList.contains('selected');
      });

    unselected_lines.attr(
      'display', GLOBALS.HIDE_INACTIVE_LINKS ? 'none' : 'auto');

    update_link_btn_state();
  });

d3.select('#all-links-btn')
  .on('click', function toggle_all_links () { // Toggles displaying all links
    GLOBALS.HIDE_ALL_LINKS = !GLOBALS.HIDE_ALL_LINKS;

    const links = d3.select('.links');

    d3.select(this)
      .classed('active', GLOBALS.HIDE_ALL_LINKS);

    links.attr('display', GLOBALS.HIDE_ALL_LINKS ? 'none' : 'auto');

    update_link_btn_state();
  });

/**
 * Selects family of selected nodes by generation.
 *
 * generation: One of the constants in `GLOBALS.GENERATIONS`
 */
function select_family (generation) {
  if (GLOBALS.SELECTION.size() === 0) {
    alert(GLOBALS.ERROR_MESSAGES.MAKE_SELECTION);
  } else {
    function selection_chain (generation) {
      generation.forEach(family_member_ID => {
        d3.select('#' + family_member_ID) // Node
          .classed('selected', true);

        d3.selectAll('.' + family_member_ID) // Links
          .classed('selected', true)
          .attr('display', 'auto');
      });
    }

    const selection_interval_cycles = d3.selectAll('.nodes')
      .selectAll('.selected') // Links can be selected, so this has to come after selecting the nodes class so only selected nodes are included.
      .data(); // Interval cycles from just the selected nodes

    selection_interval_cycles.forEach(interval_cycle => {
      switch (generation) {
        case GLOBALS.GENERATIONS.PARENTS:
          selection_chain(interval_cycle.parents);
          break;
        case GLOBALS.GENERATIONS.CHILDREN:
          selection_chain(interval_cycle.children);
          break;
        case GLOBALS.GENERATIONS.IMMEDIATE_FAMILY:
          selection_chain(interval_cycle.parents);
          selection_chain(interval_cycle.children);
          break;
      }
    });

    update_global_selection();
  }
}

d3.select('#parents-btn') // Selects all parents of selected nodes.
  .on('click', event => select_family(GLOBALS.GENERATIONS.PARENTS));

d3.select('#children-btn') // Selects all children of selected nodes.
  .on('click', event => select_family(GLOBALS.GENERATIONS.CHILDREN));

d3.select('#family-btn') // Selects all parents and children of selected nodes.
  .on('click', event => select_family(GLOBALS.GENERATIONS.IMMEDIATE_FAMILY));

/**
 * Selects all parents, grandparents, etc. and children, grandchildren, etc. of
 * the selected node.
 */
function select_family_tree () {
  /**
   * Selects either descendants or ancestors of an interval cycle.
   *
   * interval_cycle: An interval cycle object (see data.js)
   *
   * generation: Either 'parents' or 'children'. Determines which lineage to
   * select.
   */
  function select_lineage (interval_cycle, generation) {
    let interval_cycles = [interval_cycle];

    while (interval_cycles.length) {
      const generation_IDs = new Set();

      // Add parent/child IDs to a set (different interval cycles could share a parent/child; the set removes duplicates)
      interval_cycles.forEach(interval_cycle => {
        interval_cycle[generation].forEach(generation_ID =>
          generation_IDs.add(generation_ID));

        d3.select('#' + interval_cycle.id)
          .classed('selected', true); // Select nodes

        d3.selectAll('.' + interval_cycle.id)
          .classed('selected', true); // Select links
      });

      // Get the interval cycle attached to each parent/child ID (if it exists in the currently drawn dataset)
      const next_interval_cycles = [];

      generation_IDs.forEach(interval_cycle_ID => {
        const parent_node_selection = d3.select('#' + interval_cycle_ID);

        if (!parent_node_selection.empty()) {
          next_interval_cycles.push(parent_node_selection.datum());
        }
      });

      interval_cycles = next_interval_cycles;
    }

    return true;
  }

  const selection = d3.selectAll('.nodes').selectAll('.selected');

  if (selection.size() === 1) {
    const interval_cycle = selection.datum();

    select_lineage(interval_cycle, 'parents'); // NOTE: The use of string literals here is not ideal, but it allows reuse of code.

    select_lineage(interval_cycle, 'children');
  } else {
    alert(GLOBALS.ERROR_MESSAGES.SELECT_SINGULAR_NODE);
  }

  update_global_selection();
}

d3.select('#tree-btn')
  .on('click', select_family_tree);

function clear_selection () {
  d3.selectAll('.selected')
    .classed('selected', false);

  update_global_selection();

  if (GLOBALS.HIDE_INACTIVE_LINKS) {
    d3.selectAll('line')
      .attr('display', 'none');
  }
}

d3.select('#clear-btn')
  .on('click', clear_selection);

d3.selectAll('.note-btn')
  .on('click', function change_root (_event) {
    GLOBALS.ROOT_PITCH_CLASS_i = Number(this.getAttribute('value'));

    d3.selectAll('.pitch-class-labels')
      .each(function (interval_cycle) {
        const root_arc_index = Number(d3.select(this.parentNode)
          .select('.pitch-class-arcs')
          .attr('root-arc-index'));

        let interval_cumulative_sum = 0;
        d3.select(this.parentNode)
          .select('.pitch-class-labels')
          .selectAll('text')
          .each((arc_datum, pitch_class_label_i, pitch_class_labels) => {
            const pitch_class_label = d3.select(
              pitch_class_labels[
                (pitch_class_label_i + root_arc_index) %
                pitch_class_labels.length
              ]);

            pitch_class_label.classed(
              'root-label', pitch_class_label_i === root_arc_index);

            set_pitch_class_label(pitch_class_label, interval_cumulative_sum);

            interval_cumulative_sum += pitch_class_label.datum().data;
          });
      });

    d3.select('#root-btn')
      .text(this.innerHTML);
  });
