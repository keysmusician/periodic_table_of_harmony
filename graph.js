'use strict';

/* eslint-disable camelcase */

/*
Note: Do not change proper function expressions to arrow function
expressions if the 'this' keyword is used. 'this' is undefined in arrow
function expressions. No errors will be thrown, but the graph will not
display correctly.
*/

// GLOBAL PARAMETERS

/* global d3, alert */

// Array of interval_cycle objects used to create nodes with donut/pie charts.
import { dataset } from './data.js';

const harmonious_dataset = dataset.filter(node => !node.contiguousSemitones);

const Tau = 2 * Math.PI;

const note_names = ['A', 'A♯ / B♭', 'B', 'C', 'C♯ / D♭', 'D', 'D♯ / E♭', 'E', 'F', 'F♯ / G♭', 'G', 'G♯ / A♭'];

let note_value = 0;

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

const donut_outer_radius = 50;

const donut_inner_radius = 12;

const note_inner_radius = donut_outer_radius;

const note_outer_radius = 2 * donut_outer_radius;

const donut_rotation = Tau * (180 / 360);

const node_label_offset = 10;

// I think these should be called arc labels?
const donut_label_offset = 0;

const donut_label_radius = (donut_outer_radius + donut_inner_radius) / 2 + donut_label_offset;

const arc_label_font_height = 15;

const note_name_radius = 1.5 * donut_outer_radius;

const io_label_offset = node_label_offset + 12;

// const node_diameter = donut_outer_radius * 2;

// const node_margin_factor = 0.1;

// const node_margin = donut_outer_radius * node_margin_factor;

// Initializes a D3 function which creates pie charts using svg arcs. pie().value(1) sets all arcs the same number of radians.
const unit_pie = d3.pie()
  .value(1)
  .startAngle(donut_rotation)
  .endAngle(Tau + donut_rotation);

// Creates an arc shaped svg path. d3.pie uses these to draw the donut charts.
const donut_arc = d3.arc()
  .innerRadius(donut_inner_radius)
  .outerRadius(donut_outer_radius);

// Note name
const note_arc = d3.arc()
  .innerRadius(note_inner_radius)
  .outerRadius(note_outer_radius);

// A separate arc used to position the labels relative to the arcs in the donut chart.
const donut_label_pos_arc = d3.arc()
  .innerRadius(donut_label_radius)
  .outerRadius(donut_label_radius);

const note_name_pos_arc = d3.arc()
  .innerRadius(note_name_radius)
  .outerRadius(note_name_radius);

// Not drawing related

let g_selection = d3.selectAll('.selected'); // Global selection of user selected nodes & their links (empty on page load)

let hide_inactive_links = false;

// GLOBAL FUNCTIONS

// Returns a 2D array of node positions of the form: node_positions[ node_index ][ x_or_y_value_index ] where x_or_y_value_index 0=x, 1=y.
function get_node_positions (nodes) {
  // Unordered list of the ring sizes in the dataset, used to determine how many times each size appears;
  const row_sizes = [];
  nodes.forEach(
    node => row_sizes.push(node.intervals.length)
  );

  // Filters the above to get just one of each of the different rings' sizes
  const sorted_row_sizes = [...new Set(row_sizes)].sort(
    function compareNumbers (a, b) {
      return b - a; // Determines the vertical order of the rows; Reverse a and b to flip the diagram.
    }
  );

  // Returns an array of evenly spaced positions; Used to calculate row and column positions for nodes.
  function compute_divisions (div_count, length_to_divide, offset) {
    div_count += 1; // 1 is added for proper spacing---the first "division" is the edge of the diagram, so an additional division must always be added.

    const div_width = length_to_divide / (div_count);

    const div_positions = [];

    const div_1_offset = offset;

    let div = 0;

    while (div < div_count) {
      div_positions.push(div * div_width - div_1_offset);
      ++div;
    }

    div_positions.shift(); // Removing row 0 because it is always the edge of the graph, and no nodes will be drawn there.

    return div_positions;
  }

  const row_positions = compute_divisions(sorted_row_sizes.length, diagram_height, -diagram_y_origin);

  const columns_per_row = []; // An ordered array of the number nodes in each row; The index corresponds to each row with 0 = the top row. Counts how many times a certain row length, determined by interval_cycle.intervals.length, appears in the dataset (via row_sizes, which did some of the work already).
  sorted_row_sizes.forEach(filtered_row_size => {
    const node_count_in_row = row_sizes.filter(row_size => row_size === filtered_row_size).length; // Not the most efficient way to determine this value
    columns_per_row.push(node_count_in_row);
  });

  const column_positions = columns_per_row.map(n => compute_divisions(n, diagram_width, -diagram_x_origin));

  const node_positions = [];

  nodes.forEach(node => {
    const row_group = sorted_row_sizes.findIndex(
      row_size => row_size === node.intervals.length);

    const x = column_positions[row_group][0]; // Places the node at the first available column in the proper row, then .shift() deletes the used position.
    column_positions[row_group].shift();

    const y = row_positions[row_group];

    node_positions.push({ coordinates: [x, y], id: node.id });
  });

  return node_positions;
}

function update_global_selection () {
  g_selection = d3.selectAll('.selected'); // Updates the global selection

  const node_count = g_selection.select('g').size();
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

    if (hide_inactive_links && !node.classed('selected')) { // Hides links if hide inactive links button is active
      links.classed('hidden', !active);
    }

    const io_label = node.select('.io-label');

    io_label.classed('hidden', !active); // Show io tooltip
  };
}

// Sets a class to a selected node and its links to signal that the node has been selected
function handle_node_click (d, i) {
  const node = d3.select(this);

  const node_id = this.id; // variable used because `this` needs to be invoked outside of the following block

  node.classed('selected', !node.classed('selected')); // Toggle the 'selected' class

  if (node.classed('selected')) {
    d3.selectAll('.' + node_id) // Only links use .id property as a class (.) --- Nodes use .id property as an ID (#)
      .classed('selected', true); // Set all connected links to selected
  } else { // If the node is being un-selected,
    d3.selectAll('.' + node_id)
      .each(function (d) { // Check each connected link
        if (d.source !== node_id && !d3.select('#' + d.source).classed('selected')) { // If the link source is not connected to a selected node (besides this one)
          d3.select(this).classed('selected', false);
        } else if (d.target !== node_id && !d3.select('#' + d.target).classed('selected')) { // If the link target is not connected to a selected node (besides this one)
          d3.select(this).classed('selected', false);
        }
      }
      );
  }

  update_global_selection();
}

function handle_zoom ({ transform }) {
  svg.attr('transform', transform);
}

// INITIALIZATION

// Creates and SVG element as a canvas for the diagram and sizes it.
d3.select('#diagram')
  .append('svg')
  .attr('id', 'canvas')
  .attr('viewBox', diagram_x_origin + ' ' + diagram_y_origin + ' ' + diagram_width + ' ' + diagram_height);

const zoom = d3.zoom()
  .scaleExtent([max_zoom_out, max_zoom_in])
  .translateExtent([[-diagram_width * 2, -diagram_height * 2], [diagram_width * 2, diagram_height * 2]])
  .on('zoom', handle_zoom);

// const listenerRect =
d3.select('#canvas')
  .append('rect')
  .attr('class', 'listener-rect')
  .attr('x', -diagram_width / 2)
  .attr('y', -diagram_height * 2)
  .attr('width', diagram_width * 4)
  .attr('height', diagram_height * 4) // Temporary work-around to get the zoom listener to reach the height of the page at any size widow
  .style('opacity', 0.0)
  .call(zoom);

const svg = d3.select('#canvas')
  .append('g')
  .attr('class', 'graph');

const link_group = svg.append('g')
  .attr('class', 'links');

const node_group = svg.append('g')
  .attr('class', 'nodes');

// GRAPH DRAWING

function draw_graph (input_dataset) {
  // Array of Link objects for the network diagram which builds dynamically from the dataset upon loading the page.

  const link_data = []; // For drawing the links

  input_dataset.forEach((node, index) => { // Find which links should be drawn and construct the link objects by examining each node's children.
    const length = node.intervals.length;

    node.children.forEach(child => {
      for (let node_i = index, end = input_dataset.length; node_i < end; node_i += 1) { // Check to see if the "loose" end (target) of the links will find a node to connect to, and adds them to link data if so. The dataset will be sorted, so it does not have to be searched from the beginning. The search is started from the evaluated node's index.
        // PERFORMANCE: Loop should actually start looking for children from the first node in the next row and stop at the end of that row. That will eliminate the need for the following control flow:

        if (input_dataset[node_i].intervals.length === (length - 1)) { // If we're "in the row" below the examined node
          if (input_dataset[node_i].id === child) { // If the child node exists that the link target can connect to,
            link_data.push({ source: node.id, target: child }); // then create the link object and push to 'link_data'
          }
        } else if (input_dataset[node_i].intervals.length < (length - 1)) { break; } // break loop once passed the row below the current node
      }
    });
  });

  const node_positions = get_node_positions(input_dataset);

  const transition = svg.transition()
    .duration(transition_duration);

  // Creates a group for the node graphic and initializes each node
  node_group.selectAll('.node')
    .data(input_dataset, d => d.id)
    .join(
      // New additions to the dataset are handled here
      enter => enter.append('g')
        .attr('class', 'node')
        .attr('id', d => d.id)
        .classed('contiguous-semitones', d => d.contiguousSemitones)
        .classed('saturated', d => d.saturated)
        .attr('transform', (d, i) => 'translate(' + node_positions[i].coordinates[0] + ' ' + node_positions[i].coordinates[1] + ') rotate(0)') // Sets the [x,y] positions of each node by translation from the origin.
        .on('click', handle_node_click)
        .on('mouseover', handle_node_mouseover(true))
        .on('mouseout', handle_node_mouseover(false))
        .call(enter => {
          enter.append('g') // Draws the donut charts at each node
            .attr('class', 'donut')
            .each(function (d, i) {
              const donut_chart_data = unit_pie(d.intervals);

              d3.select(this)
                .append('g')
                .attr('class', 'donut-arcs')
                .selectAll('.arc')
                .data(donut_chart_data)
                .join('g')
                .attr('class', 'arc')
                .append('path')
                .attr('d', donut_arc);
            })
            .append('g') // Draws labels on arcs of the donut chart NOTE: Not sure if this should be a separate group from the arc group
            .attr('class', 'arc-label')
            .each(function (d) {
              const donut_chart_data = unit_pie(d.intervals);

              d3.select(this)
                .selectAll('text')
                .data(donut_chart_data)
                .join('text')
                .each(function (arc_data, i) {
                  const this_arc = d3.select(this);

                  const arc_center = donut_label_pos_arc.centroid(arc_data);

                  this_arc.attr('x', arc_center[0]).attr('y', arc_center[1] + arc_label_font_height / 2).text(d.intervals[i]); // Sets & positions node label text

                  this_arc.classed('root-label', (d.root === i)); // Sets a class on the text which is labeling the root wedge
                });
            });

          // Labels note names
          enter.append('g')
            .attr('class', 'notes')
            .each(function (d) {
              const rotation_offset = Tau * (1 / d.intervals.length) / 2;

              const rotated_unit_pie = d3.pie()
                .value(1)
                .startAngle(donut_rotation + rotation_offset)
                .endAngle(Tau + donut_rotation + rotation_offset);

              function draw_note_label_arcs (enter_selection) {
                d3.select(enter_selection)
                  .append('g')
                  .attr('class', 'note-arcs')
                  .selectAll('.arc')
                  .data(d => rotated_unit_pie(d.intervals))
                  .join('g')
                  .attr('class', 'arc')
                  .on('click', draw_note_label_arcs)
                  .classed('root', (_arc_data, i) => (i === d.root))
                  .append('path')
                  .attr('d', note_arc);
              }

              // Draws note label arcs
              draw_note_label_arcs(this);

              // Apply note labels
              d3.select(this)
                .append('g')
                .attr('class', 'note-name-label')
                .selectAll('text')
                .data(d => rotated_unit_pie(d.intervals))
                .join('text')
                .each(function (arc_data, i) {
                  const arc_center = note_name_pos_arc.centroid(arc_data);

                  const note_name_index = (note_value +
                    d.intervals
                      .slice(0, i + 1) // Sub-list of intervals up to i
                      .reduce((accumulator, currentValue) => accumulator + currentValue) - // sum of the intervals up to this point
                    d.intervals[0]) % 12;

                  const this_arc = d3.select(this);

                  // Sets a class on the text which is labeling the root wedge
                  this_arc.classed('root-label', (i === d.root));

                  // Sets & positions note label text
                  this_arc.attr('x', arc_center[0])
                    .attr('y', arc_center[1] + arc_label_font_height / 2)
                    .text(note_names[note_name_index]);
                });
            });

          // Draws circles to fill the centers of the nodes. NOTE: May want to move this to inside of the "donut" group.
          enter.append('circle')
            .attr('class', 'donut-hole')
            .attr('r', donut_inner_radius);

          // Draws the node title label
          enter.append('g')
            .attr('class', 'node-label')
            .append('text')
            .text(d => d.name)
            .attr('y', -note_outer_radius - node_label_offset);

          // Draws the node ID label
          enter.append('g')
            .attr('class', 'id-label')
            .append('text')
            .text(d => d.id.slice(2))
            .attr('text-anchor', 'middle')
            .attr('y', 8);

          // Draws the I/O labels (the number of parent and child links)
          enter.append('g')
            .attr('class', 'io-label')
            .classed('hidden', true)
            .append('text')
            .attr('text-anchor', 'middle')
            .text(d => ('Parents: ' + d.parents.length + ' Children: ' + d.children.length))
            .attr('dy', (note_outer_radius + io_label_offset));
        }),

      update => update.call(
        update => update
          .transition(transition)
          .attr('transform', (d, i) => 'translate(' + node_positions[i].coordinates[0] + ' ' + node_positions[i].coordinates[1] + ') rotate(0)') // Data that remained the same after the dataset changed is handled here
      )
    );

  // Looks up a given node ID and returns the node's [x,y] coordinates from node_positions.
  function get_node_position (node_id) {
    return node_positions.find(pos_obj => pos_obj.id === node_id).coordinates;
  }

  // Draws links
  link_group.selectAll('line')
    .data(link_data, d => d.source + ' ' + d.target)
    .join(
      enter => enter.append('line')
        .each(function (d) {
          const link_source_position = get_node_position(d.source);
          const link_target_position = get_node_position(d.target);

          d3.select(this)
            .classed('hidden', hide_inactive_links)
            .classed(d.source, true)
            .classed(d.target, true)
            .attr('x1', link_source_position[0])
            .attr('y1', link_source_position[1])
            .attr('x2', link_target_position[0])
            .attr('y2', link_target_position[1]);

          if (d3.select('#' + d.source).classed('selected') || d3.select('#' + d.target).classed('selected')) { // If entering links are connected to a selected node
            d3.select(this).classed('selected', true);
          }
        })
      ,
      update => update.call(
        update => update.transition(transition)
          .attr('x1', d => get_node_position(d.source)[0])
          .attr('y1', d => get_node_position(d.source)[1])
          .attr('x2', d => get_node_position(d.target)[0])
          .attr('y2', d => get_node_position(d.target)[1])
      )// Sets the endpoints of the links' lines, and adds their sources and targets as classes.
    );
}
draw_graph(dataset);

// Buttons

// Toggles displaying nodes with contiguous half steps
function toggle_contiguous () {
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

d3.select('#contiguous-btn')
  .on('click', toggle_contiguous);

// Toggles displaying unselected nodes
function toggle_unselected () {
  const button = d3.select(this);

  if (button.attr('active') === '1') { // when toggling off, return to previous graph display
    button.attr('active', 0);

    if (d3.select('#contiguous-btn').attr('active') === '1') {
      draw_graph(harmonious_dataset);
    } else {
      draw_graph(dataset);
    }
  } else { // when toggling on
    button.attr('active', 1);

    if (g_selection.size()) { // only draw if there's something in the global selection
      const selected_dataset = dataset.filter(node => { // new dataset built from user-selected nodes // PERFORMANCE NOTE: Might be more efficient to build from the global selection
        // if the node exists, see if it's selected
        if (!d3.select('#' + node.id).empty()) {
          return d3.select('#' + node.id).classed('selected');
        } else {
          return false;
        }
      });

      draw_graph(selected_dataset);
    } else { alert('No nodes are selected -- Make a selection first'); }
  }

  update_global_selection();
}

d3.select('#unselected-btn')
  .on('click', toggle_unselected);

// Highlights link-btn if one of the link buttons has been toggled
function set_link_btn_state () {
  if (
    d3.select('#all-links-btn').classed('active') ||
    d3.select('#inactive-links-btn').classed('active')
  ) {
    d3.select('#link-btn').classed('active', true);
  } else {
    d3.select('#link-btn').classed('active', false);
  }
}

// Toggles displaying inactive links
function toggle_inactive_links () {
  const button = d3.select(this);
  // Get the links
  const links = d3.selectAll('line')
    .filter(function () {
      return !this.classList.contains('selected');
    });

  if (button.classed('active')) {
    button.classed('active', false);

    links.classed('hidden', false);
  } else {
    button.classed('active', true);

    links.classed('hidden', true);
  }

  hide_inactive_links = !hide_inactive_links;
}

d3.select('#inactive-links-btn')
  .on('click', function () {
    toggle_inactive_links.call(this);
    set_link_btn_state.call(this);
  });

// Toggles displaying all links
function toggle_all_links () {
  const button = d3.select(this);
  // Get the links
  const links = d3.select('.links');

  if (button.classed('active')) {
    button.classed('active', false);

    links.classed('hidden', false);
  } else {
    button.classed('active', true);

    links.classed('hidden', true);
  }
}

d3.select('#all-links-btn')
  .on('click', function () {
    toggle_all_links.call(this);
    set_link_btn_state.call(this);
  });

// Selects family of selected nodes by parameter number
function select_family (generation_num) {
  if (g_selection.size() === 0) {
    alert('No nodes are selected -- Make a selection first');
  } else {
    function selection_chain (generation) {
      generation.forEach(family_member => {
        d3.select('#' + family_member) // Node
          .classed('selected', true);
        d3.selectAll('.' + family_member) // Links
          .classed('selected', true)
          .classed('hidden', false);
      });
    }

    const selection_data = d3.selectAll('.nodes').selectAll('.selected').data(); // data from just the selected nodes (not the links)

    selection_data.forEach(node => {
      switch (generation_num) {
        case 0: { selection_chain(node.parents); break; }
        case 1: { selection_chain(node.children); break; }
        case 2: { selection_chain(node.parents); selection_chain(node.children); break; }
      }
    });

    update_global_selection();
  }
}

d3.select('#parents-btn') // Selects all parents of selected nodes
  .on('click', event => select_family(0));

d3.select('#children-btn') // Selects all children of selected nodes
  .on('click', event => select_family(1));

d3.select('#family-btn') // Selects all parents and children of selected nodes
  .on('click', event => select_family(2));

// Selects all parents, parent's parents... & children, children's children... of a given node.
function select_family_tree () {
  // Searches the dataset by element.id to find and select parent nodes
  function select_lineage (nodelist, node) {
    if (node.parents.length > 0) {
      node.parents.forEach(
        parent_id => {
          d3.select('#' + parent_id).classed('selected', true); // Select nodes
          d3.selectAll('.' + parent_id).classed('selected', true); // Select links

          const parent_node = nodelist.find(node => node.id === parent_id);

          select_lineage(nodelist, parent_node);
        }
      );
    }
    return true;
  }
  // Searches the dataset by element.id to find and select child nodes
  function select_descendants (nodelist, node) {
    if (node.children.length > 0) {
      node.children.forEach(
        child_id => {
          d3.select('#' + child_id).classed('selected', true); // Select nodes
          d3.selectAll('.' + child_id).classed('selected', true); // Select links

          const child_node = nodelist.find(node => node.id === child_id);

          select_descendants(nodelist, child_node);
        }
      );
    }
    return true;
  }

  const selection = d3.selectAll('.nodes').selectAll('.selected');

  if (selection.size() === 1) {
    const node = selection.datum();

    select_lineage(dataset, node);

    select_descendants(dataset, node);
  } else { alert('Please select only one (1) node to use the family tree selector'); }

  update_global_selection();
}

d3.select('#tree-btn')
  .on('click', select_family_tree);

function clear_selection () {
  d3.selectAll('.selected').classed('selected', false);

  update_global_selection();

  if (hide_inactive_links) {
    d3.selectAll('line')
      .classed('hidden', true);
  }
}

d3.select('#clear-btn')
  .on('click', clear_selection);

function change_root (root_btn_value) {
  note_value = root_btn_value;

  d3.selectAll('.note-name-label')
    .each(function (d) {
      const rotation_offset = Tau * (1 / d.intervals.length) / 2;

      const rotated_unit_pie = d3.pie()
        .value(1)
        .startAngle(donut_rotation + rotation_offset)
        .endAngle(Tau + donut_rotation + rotation_offset);

      d3.select(this)
        .selectAll('text')
        .data(d => rotated_unit_pie(d.intervals))
        .join('text')
        .each(function (arc_data, i) {
          const this_arc = d3.select(this);

          const arc_center = note_name_pos_arc.centroid(arc_data);

          this_arc.attr('x', arc_center[0]).attr('y', arc_center[1] + arc_label_font_height / 2)
            .text(function () {
              const interval_sum = d.intervals.slice(0, i + 1).reduce((accumulator, currentValue) => accumulator + currentValue); // sum of the intervals up to this point
              const note_name_index = (note_value + interval_sum) % 12;

              return note_names[note_name_index];
            }); // Sets & positions node label text

          this_arc.classed('root-label', (d.root === i)); // Sets a class on the text which is labeling the root wedge
        });
    });
}

d3.selectAll('.note-btn')
  .on('click', function (_event) {
    const n = Number(this.getAttribute('value'));
    change_root(n); d3.select('#root-btn').text(this.innerHTML);
  });
