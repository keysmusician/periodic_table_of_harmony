"use strict";
// Array of Harmony_set objects used to create nodes with donut charts.
var dataset = [
    {
        id: 'HS7-1',
        name: "Major Scale (and modes)",
        intervals: [2, 2, 2, 1, 2, 2, 1],
        root: 4,
        parents: [],
        children: ['HS6-1', 'HS6-2', 'HS6-3', 'HS6-4', 'HS6-5', 'HS6-6']
    },
    {
        id: 'HS6-1',
        name: "",
        intervals: [2, 1, 2, 2, 2, 3],
        root: 0,
        parents: [],
        children: ['HS5-1', 'HS5-2', 'HS5-3', 'HS5-4', 'HS5-5', 'HS5-6' ]
    },
    {
        id: 'HS6-2',
        name: "",
        intervals: [1, 2, 2, 2, 1, 4],
        root: 0,
        parents: ['7-1'],
        children: ['HS5-1','HS5-7','HS5-8','HS5-9','HS5-10','HS5-11']
    },
    {
        id: 'HS6-3',
        name: "",
        intervals: [2, 2, 2, 1, 2, 3],
        root: 0,
        parents: ['7-1'],
        children: ['HS5-2','HS5-3','HS5-7','HS5-12','HS5-13','HS5-14']
    },
    {
        id: 'HS6-4',
        name: "",
        intervals: [2, 2, 1, 2, 2, 3],
        root: 0,
        parents: ['7-1'],
        children: ['HS5-3','HS5-6','HS5-8','HS5-11','HS5-12']
    },
    {
        id: 'HS6-5',
        name: "",
        intervals: [2, 1, 2, 2, 1, 4],
        root: 4,
        parents: ['7-1'],
        children: ['HS5-4','HS5-6','HS5-8','HS5-9','HS5-13','HS5-15']
    },
    {
        id: 'HS6-6',
        name: "",
        intervals: [1, 2, 2, 1, 2, 4],
        root: 0,
        parents: ['7-1'],
        children: ['HS5-5','HS5-10','HS5-11','HS5-12','HS5-14','HS5-15']
    },
    {
        id: 'HS5-1',
        name: "",
        intervals: [1, 2, 2, 2, 5],
        root: 0,
        parents: [],
        children: ['HS4-1','HS4-2','HS4-3','HS4-4','HS4-5']
    },
    {
        id: 'HS5-2',
        name: "",
        intervals: [3, 2, 2, 2, 3],
        root: 0,
        parents: [],
        children: ['HS4-1','HS4-2','HS4-6','HS4-7','HS4-8']
    },
    {
        id: 'HS5-3',
        name: "Pentatonic",
        intervals: [2, 3, 2, 2, 3],
        root: 0,
        parents: [],
        children: ['HS4-2','HS4-6','HS4-9','HS4-10']
    },
    {
        id: 'HS5-4',
        name: "",
        intervals: [2, 1, 4, 2, 3],
        root: 0,
        parents: [],
        children: ['HS4-3','HS4-7','HS4-9','HS4-11','HS4-12']
    },
        {
        id: 'HS5-5',
        name: "",
        intervals: [2, 1, 2, 4, 3],
        root: 0,
        parents: [],
        children: ['HS4-4','HS4-8','HS4-10','HS4-11','HS4-13']
    },
    {
        id: 'HS5-6',
        name: "",
        intervals: [2, 1, 2, 2, 5],
        root: 0,
        parents: [],
        children: ['HS4-2','HS4-5','HS4-9','HS4-12','HS4-13']
    },
    {
        id: 'HS5-7',
        name: "",
        intervals: [2, 2, 2, 1, 5],
        root: 0,
        parents: [],
        children: ['HS4-1','HS4-6','HS4-14','HS4-15','HS4-16']
    },
    {
        id: 'HS5-8',
        name: "",
        intervals: [2, 2, 1, 4, 3],
        root: 0,
        parents: [],
        children: ['HS4-2','HS4-10','HS4-12','HS4-14','HS4-17']
    },
        {
        id: 'HS5-9',
        name: "",
        intervals: [1, 4, 2, 1, 4],
        root: 0,
        parents: [],
        children: ['HS4-3','HS4-12','HS4-15','HS4-17','HS4-18']
    },
    {
        id: 'HS5-10',
        name: "",
        intervals: [1, 2, 4, 1, 4],
        root: 0,
        parents: [],
        children: ['HS4-4','HS4-16','HS4-17','HS4-18','HS4-19']
    },
    {
        id: 'HS5-11',
        name: "",
        intervals: [4, 1, 2, 2, 3],
        root: 0,
        parents: [],
        children: ['HS4-4','HS4-5','HS4-10','HS4-17','HS4-19']
    },
    {
        id: 'HS5-12',
        name: "",
        intervals: [2, 2, 1, 2, 5],
        root: 0,
        parents: [],
        children: ['HS4-6','HS4-9','HS4-13','HS4-14','HS4-19']
    },
    {
        id: 'HS5-13',
        name: "",
        intervals: [4, 2, 1, 2, 3],
        root: 0,
        parents: [],
        children: ['HS4-7','HS4-10','HS4-13','HS4-15','HS4-20']
    },
    {
        id: 'HS5-14',
        name: "",
        intervals: [2, 4, 1, 2, 3],
        root: 0,
        parents: [],
        children: ['HS4-8','HS4-9','HS4-16','HS4-19','HS4-20']
    },
    {
        id: 'HS5-15',
        name: "",
        intervals: [1, 2, 2, 1, 6],
        root: 0,
        parents: [],
        children: ['HS4-5','HS4-11','HS4-14','HS4-18','HS4-20']
    },
    {
        id: 'HS4-1',
        name: "",
        intervals: [2, 2, 2, 6],
        root: 0,
        parents: [],
        children: ['HS3-1','HS3-2','HS3-3']
    },
    {
        id: 'HS4-2',
        name: "",
        intervals: [3, 2, 2, 5],
        root: 0,
        parents: [],
        children: ['HS3-1','HS3-4','HS3-5','HS3-6']
    },
    {
        id: 'HS4-3',
        name: "",
        intervals: [1, 4, 2, 5],
        root: 0,
        parents: [],
        children: ['HS3-2','HS3-4','HS3-7','HS3-8']
    },
    {
        id: 'HS4-4',
        name: "",
        intervals: [1, 2, 4, 5],
        root: 0,
        parents: [],
        children: ['HS3-3','HS3-5','HS3-7','HS3-9']
    },
    {
        id: 'HS4-5',
        name: "",
        intervals: [1, 2, 2, 7],
        root: 0,
        parents: [],
        children: ['HS3-1','HS3-6','HS3-8','HS3-9']
    },
    {
        id: 'HS4-6',
        name: "Major (add 9)",
        intervals: [5, 2, 2, 3],
        root: 0,
        parents: [],
        children: ['HS3-1','HS3-4','HS3-10','HS3-11']
    },
    {
        id: 'HS4-7',
        name: "Half-diminished",
        intervals: [3, 4, 2, 3],
        root: 0,
        parents: [],
        children: ['HS3-2','HS3-5','HS3-10','HS3-12']
    },
    {
        id: 'HS4-8',
        name: "Dominant 7",
        intervals: [3, 2, 4, 3],
        root: 0,
        parents: [],
        children: ['HS3-3','HS3-6','HS3-11','HS3-12']
    },
    {
        id: 'HS4-9',
        name: "",
        intervals: [2, 3, 2, 5],
        root: 0,
        parents: [],
        children: ['HS3-4','HS3-6','HS3-10']
    },
    {
        id: 'HS4-10',
        name: "Minor 7 / Major 6",
        intervals: [2, 3, 4, 3],
        root: 0,
        parents: [],
        children: ['HS3-5','HS3-6','HS3-10','HS3-11']
    },
    {
        id: 'HS4-11',
        name: "",
        intervals: [2, 1, 6, 3],
        root: 0,
        parents: [],
        children: ['HS3-6','HS3-7','HS3-12','HS3-13']
    },
    {
        id: 'HS4-12',
        name: "",
        intervals: [2, 1, 4, 5],
        root: 0,
        parents: [],
        children: ['HS3-4','HS3-5','HS3-8','HS3-13']
    },
    {
        id: 'HS4-13',
        name: "",
        intervals: [2, 1, 2, 7],
        root: 0,
        parents: [],
        children: ['HS3-6','HS3-9','HS3-10','HS3-13']
    },
    {
        id: 'HS4-14',
        name: "",
        intervals: [2, 2, 1, 7],
        root: 0,
        parents: [],
        children: ['HS3-1','HS3-10','HS3-13','HS3-14']
    },
    {
        id: 'HS4-15',
        name: "",
        intervals: [4, 2, 1, 5],
        root: 0,
        parents: [],
        children: ['HS3-2','HS3-11','HS3-13','HS3-15']
    },
    {
        id: 'HS4-16',
        name: "",
        intervals: [2, 4, 1, 5],
        root: 0,
        parents: [],
        children: ['HS3-3','HS3-4','HS3-14','HS3-15']
    },
    {
        id: 'HS4-17',
        name: "Major 7",
        intervals: [3, 4, 1, 4],
        root: 0,
        parents: [],
        children: ['HS3-5','HS3-8','HS3-11','HS3-14']
    },
    {
        id: 'HS4-18',
        name: "",
        intervals: [1, 6, 1, 4],
        root: 0,
        parents: [],
        children: ['HS3-7','HS3-8','HS3-14','HS3-15']
    },
    {
        id: 'HS4-19',
        name: "",
        intervals: [4, 1, 2, 5],
        root: 0,
        parents: [],
        children: ['HS3-4','HS3-9','HS3-11','HS3-14']
    },
    {
        id: 'HS4-20',
        name: "",
        intervals: [6, 1, 2, 3],
        root: 0,
        parents: [],
        children: ['HS3-9','HS3-10','HS3-12','HS3-15']
    },
    {
        id: 'HS3-1',
        name: "",
        intervals: [2, 2, 8],
        root: 0,
        parents: [],
        children: ['HS2-2','HS2-4']
    },
    {
        id: 'HS3-2',
        name: "",
        intervals: [4, 2, 6],
        root: 0,
        parents: [],
        children: ['HS2-2','HS2-4','HS2-6']
    },
    {
        id: 'HS3-3',
        name: "",
        intervals: [2, 4, 6],
        root: 0,
        parents: [],
        children: ['HS2-2','HS2-4','HS2-6']
    },
    {
        id: 'HS3-4',
        name: "Sus 2 / Sus 4 / Quartal",
        intervals: [2, 5, 5],
        root: 0,
        parents: [],
        children: ['HS2-2','HS2-5']
    },
    {
        id: 'HS3-5',
        name: "Minor Triad",
        intervals: [3, 4, 5],
        root: 0,
        parents: [],
        children: ['HS2-3','HS2-4','HS2-5']
    },
    {
        id: 'HS3-6',
        name: "",
        intervals: [2, 7, 3],
        root: 0,
        parents: [],
        children: ['HS2-2','HS2-3','HS2-5']
    },
    {
        id: 'HS3-7',
        name: "",
        intervals: [1, 6, 5],
        root: 0,
        parents: [],
        children: ['HS2-1','HS2-5','HS2-6']
    },
    {
        id: 'HS3-8',
        name: "",
        intervals: [1, 4, 7],
        root: 0,
        parents: [],
        children: ['HS2-1','HS2-4','HS2-5']
    },
    {
        id: 'HS3-9',
        name: "",
        intervals: [1, 2, 9],
        root: 0,
        parents: [],
        children: ['HS2-1','HS2-2','HS2-3']
    },
    {
        id: 'HS3-10',
        name: "",
        intervals: [2, 3, 7],
        root: 0,
        parents: [],
        children: ['HS2-2','HS2-3','HS2-5']
    },
    {
        id: 'HS3-11',
        name: "Major Triad",
        intervals: [5, 4, 3],
        root: 0,
        parents: [],
        children: ['HS2-3','HS2-4','HS2-5']
    },
    {
        id: 'HS3-12',
        name: "Diminished Triad",
        intervals: [3, 6, 3],
        root: 0,
        parents: [],
        children: ['HS2-3','HS2-6']
    },
    {
        id: 'HS3-13',
        name: "",
        intervals: [2, 1, 9],
        root: 0,
        parents: [],
        children: ['HS2-1','HS2-2','HS2-3']
    },
    {
        id: 'HS3-14',
        name: "",
        intervals: [4, 1, 7],
        root: 0,
        parents: [],
        children: ['HS2-1','HS2-4','HS2-5']
    },
    {
        id: 'HS3-15',
        name: "",
        intervals: [6, 1, 5],
        root: 0,
        parents: [],
        children: ['HS2-1','HS2-5','HS2-6']
    },
    {
        id: 'HS2-1',
        name: "Minor 2ⁿᵈ / Major 7ᵗʰ",
        intervals: [1, 11],
        root: 0,
        parents: [],
        children: ['HS1-1']
    },
    {
        id: 'HS2-2',
        name: "Major 2ⁿᵈ / Minor 7ᵗʰ",
        intervals: [2, 10],
        root: 0,
        parents: [],
        children: ['HS1-1']
    },
    {
        id: 'HS2-3',
        name: "Minor 3ʳᵈ / Major 6ᵗʰ",
        intervals: [3, 9],
        root: 0,
        parents: [],
        children: ['HS1-1']
    },
    {
        id: 'HS2-4',
        name: "Major 3ʳᵈ / Minor 6ᵗʰ",
        intervals: [4, 8],
        root: 0,
        parents: [],
        children: ['HS1-1']
    },
    {
        id: 'HS2-5',
        name: "Perfect 4ᵗʰ / Perfect 5ᵗʰ",
        intervals: [5, 7],
        root: 0,
        parents: [],
        children: ['HS1-1']
    },
    {
        id: 'HS2-6',
        name: "Tritone",
        intervals: [6, 6],
        root: 0,
        parents: [],
        children: ['HS1-1']
    },
    {
        id: 'HS1-1',
        name: "Single note, Unison, or Octave",
        intervals: [12],
        root: 0,
        parents: [],
        children: []
    }
];
;
// The following parameters determine the size and and center of the diagram:

var diagram_scale_factor = 2

var diagram_width = 1920 * diagram_scale_factor;

var diagram_height = 1080 * diagram_scale_factor;

var diagram_x_origin = -diagram_width / 2; // Places the origin in the center of the diagram.

var diagram_y_origin = -diagram_height / 2; // As above.


// A donut chart is used at each node of the network graph to display the intervals in each harmony set.
// The following variables define the parameters of the donut charts:

var donut_outer_radius = 75;

var donut_inner_radius = 25;

var node_label_offset = -20;

var donut_label_offset = 0;

var donut_label_radius = (donut_outer_radius + donut_inner_radius) / 2 + donut_label_offset;

var arc_label_font_height = 15;

var io_label_offset = -node_label_offset;

var node_diameter = donut_outer_radius * 2;

var node_margin_factor = .1;

var node_margin = donut_outer_radius * node_margin_factor;

// Functions which return links based on the dataset;

function get_incoming_links(input_Harmony_set) {
    
    var incoming_links = [], parent = 0;
    
    for (parent; parent < input_Harmony_set.parents.length; ++parent )
        {
            var link = { 'source' : input_Harmony_set.parents[parent], 'target' : input_Harmony_set.ID };
            incoming_links.push( link );        
        }
    
    return incoming_links;
} // Unused. Returns an array of all Links to the argument.

function get_outgoing_links(input_Harmony_set) {
    
    var outgoing_links = [], child = 0;
    
    for (child; child < input_Harmony_set.children.length; ++child )
        {
            var link = { 'source' : input_Harmony_set.id, 'target' : input_Harmony_set.children[child] };
            outgoing_links.push( link );        
        }
    
    return outgoing_links;
} // Returns an array of all Links from the argument to other nodes.

function get_links(input_Harmony_set, link_direction ) {
    
    switch(link_direction)
        {
            case 'i':
            case 'in':
            case 'incoming':
                return get_incoming_links(input_Harmony_set);
            case 'o':
            case 'out':
            case 'outgoing':
                return get_outgoing_links(input_Harmony_set);
            default :
                    var incoming_links = get_incoming_links(input_Harmony_set);
                    var outgoing_links = get_outgoing_links(input_Harmony_set);
                    var all_links = incoming_links.concat(outgoing_links);
                    return all_links;
        } 
} // Unused. Returns an array of Links of the caller's choice of incoming, outrgoing, or both (default).

function get_all_links( input_dataset ) // Currently only gets outgoing Links to avoid redundacy.
{
    var all_links = [], Harmony_set_i = 0;
    
    for (Harmony_set_i; Harmony_set_i < input_dataset.length; ++Harmony_set_i )
        {
            var set_links = get_outgoing_links( input_dataset[Harmony_set_i] );
            set_links.forEach( link => all_links.push( link ) );
        }
    
    return all_links;
}

// Array of Link objects for the network diagram which builds dynamically from the dataset upon loading the page. get_all_links() currently only looks at Harmony_set.children; Harmony_set.parents are ignored. This is done deliberately to avoid duplicate links.

var link_data = get_all_links(dataset);

// Retruns an array of evenly spaced positions; Used to calculate row and column positions for nodes.
function compute_divisions( numof_divs, length_to_divide, offset )
{
    numof_divs += 1; // 1 is added for proper spacing---the first "division" is the edge of the diagram, so an additional division must always be added.
    
    var div_width = length_to_divide / (numof_divs);
    
    var div_positions = [];
    
    var div_1_offset = offset;
    
    var div = 0;
    
    while (div < numof_divs){
        div_positions.push(div * div_width - div_1_offset);
        ++div;
    }
    
    div_positions.shift(); // Removing row 0 because it is always the edge of the graph, and no nodes will be drawn there.
    
    return div_positions; 
}

// Returns a 2D array of node positions of the form: node_positions[ node_index ][ x_or_y_value_index ] where x_or_y_value_index 0=x, 1=y.
function get_node_positions(nodes) {
    
    //Unordered list of the ring sizes in the dataset, used to determine how many times each size appears;
    var node_i, row_sizes = [];
    for(node_i = 0; node_i < nodes.length; ++node_i)
        {
            row_sizes.push(nodes[node_i].intervals.length); 
        }

    // Filteres the above to get just one of each of the different rings' sizes
    var sorted_row_sizes = [...new Set(row_sizes)].sort(
        function compareNumbers(a, b) {
            return b - a; // Determines the vertical order of the rows; Reverse a and b to flip the diagram.
        }
    )
    
    var row_positions = compute_divisions(sorted_row_sizes.length, diagram_height, -diagram_y_origin);
    
    var columns_per_row = [];// An ordered array of the number nodes in each row; The index corresponds to each row with 0 = the top row. Counts how many times a certain row length, determined by Harmmony_set.intervals.length, appears in the dataset (via row_sizes, which did some of the work already).
    sorted_row_sizes.forEach(
    
        function (filtered_row_size) {
            columns_per_row.push( row_sizes.filter( row_size => row_size == filtered_row_size ).length );
        }
    )
    
    var column_positions = columns_per_row.map( n => compute_divisions(n, diagram_width, -diagram_x_origin) );
    
    var node_positions = [];
    for(node_i = 0; node_i < nodes.length; ++node_i)
        {
            //The row the current node belongs to
            var row_group = sorted_row_sizes.findIndex(
                row_size => row_size == nodes[node_i].intervals.length)
            
            var x = column_positions[ row_group ][0]; // Places the node at the first available column in the proper row, then .shift() deletes the used position.
            column_positions[ row_group ].shift();
            
            var y = row_positions[ row_group ];
            
            node_positions.push( [x, y] );
        }
    
    return node_positions;
}

var node_positions = get_node_positions(dataset);


// Returns an array of '1's (ones) of the provided length. Required for creating a pie chart with equally sized divisions.
function create_wedge_array(n) {
    var i, unit_array = [];
    for (i = 0; i < n; i++) {
        unit_array[i] = 1;
    }
    return unit_array;
}

function handle_node_mouseover(active) {
    return function(event, d) {
        var node = d3.select(this);
        if ( !node.classed("node-clicked") ) // If node is not clicked
            {
                node.classed("node-focused", active);
                d3.selectAll('.'+this.id)
                    .filter(
                        function() {
                            return !this.classList.contains('link-clicked')
                        }
                    )
                    .classed("link-focused", active);  
            }
        
        var io_label = node.select(".io-label");
        
        if(active) { 
            io_label.attr("display", "block");//Show io tooltip
            var trans = node.attr("transform");
            var pos_x = trans.slice(11, trans.indexOf(" ") );
            var pos_y = trans.slice(trans.indexOf(" "), trans.indexOf(")"))
            console.log(pos_x, pos_y)
        }
        else{ io_label.attr("display", "none"); }
        };
  }

// Sets a class to a clicked node and its links to signal that the node has been clicked
function handle_node_click(d, i)
{
    d3.select(this) // The node
        .classed("node-clicked", !d3.select(this).classed("node-clicked")); // Toggle the clicked-class
    
    if( d3.select(this).classed("node-clicked") ) // If the node is being clicked, 
       {
               d3.selectAll('.'+this.id)
                   .classed("link-clicked", true); // Set all connected links to clicked 
       }
    else{ // If the node is being un-clicked,
        var this_node_id = this.id;
        d3.selectAll('.'+this_node_id).each( // Chech each connected link
            function (d, i)
            {
                if ( d.source != this_node_id && !d3.select("#"+d.source).classed('node-clicked') ) // If the link source is not connected to a clicked node (besides this one)
                {
                    d3.select(this).classed("link-clicked", false);
                }
                else if( d.target != this_node_id && !d3.select("#"+d.target).classed('node-clicked') ) // If the link target is not connected to a clicked node (besides this one)
                        {
                            d3.select(this).classed("link-clicked", false);
                        }
            }
        );
    }
    

}

function handle_zoom({transform})
{
    svg.attr('transform', transform); 
}

// Creates and SVG element as a canvas for the diagram and sizes it.
d3.select('#diagram')
    .append('svg')
    .attr('id','canvas')
    .attr('viewBox', diagram_x_origin + " " + diagram_y_origin + " " + diagram_width + " " + diagram_height);

var listenerRect = d3.select('#canvas')
    .append('rect')
    .attr('class', 'listener-rect')
    .attr('x', -diagram_width/2)
    .attr('y', -diagram_height*2)
    .attr('width', diagram_width*4)
    .attr('height', diagram_height*4) // Temporary work-around to get the zoom listener to reach the height of the page at any size widow
    .style('opacity', 0.0);

var zoom = d3.zoom().scaleExtent([.3, 10]).on('zoom', handle_zoom);
listenerRect.call(zoom);

var svg = d3.select('#canvas').append('g').attr('class', 'zoom-layer');

// A D3 function which creates pie charts using svg arcs.
var pie = d3.pie();

// Creates an arc shaped svg path. d3.pie uses these to draw the donut charts.
var arc = d3.arc()
    .innerRadius( donut_inner_radius )
    .outerRadius( donut_outer_radius );

// A separate arc used to position the labels reative to the arcs in the donut chart.
var donut_label_pos_arc = d3.arc()
    .innerRadius( donut_label_radius )
    .outerRadius( donut_label_radius );

// Initializes links. Link group element are drawn before the node group element to place them behind the nodes.
var link = svg.append('g')
    .attr('class', 'links')
    .selectAll("line")
    .data(link_data)
    .enter()
    .append("line");

// Creates a group for the node graphic
 var node = svg
    .append('g')
    .attr('class', 'nodes')
    .selectAll(".node")
    .data(dataset)
    .enter()
    .append("g")
    .attr("class", "node")
    .attr('id', function (d) {return d.id} )
    .on('click', handle_node_click)
    .on("mouseover", handle_node_mouseover(true))
    .on("mouseout", handle_node_mouseover(false));


// Sets the [x,y] positions of each node by translation from the origin.
node.each(
    function (d, i) {
        d3.select(this)
            .attr('transform', 'translate(' + node_positions[i][0] + " " + node_positions[i][1] + ") rotate(0)");
    }
)

// Draws the donut chart
node.append('g')
    .attr('class', 'donut')
    .each(
        function (d, i)
        {
            var donut_chart_data = pie(create_wedge_array(d.intervals.length));
            
            d3.select(this)
            .append('g')
            .attr('class', 'donut-arcs')
            .selectAll(".arc")
            .data(donut_chart_data)
            .enter()
            .append('g')
            .attr('class', 'arc')
            .append('path')
            .attr("d", arc);
        }
    );

// Fills the centers of the nodes
node.append('circle')
    .attr('class', 'donut-hole')
    .attr('r', donut_inner_radius);

// Labels the arcs of the donut chart
node.select('.donut')
    .append('g')
    .attr('class', 'arc-label')
    .each(
        function (d)
        {
            var donut_chart_data = pie(create_wedge_array(d.intervals.length));
            
            d3.select(this)
                .selectAll('text')
                .data(donut_chart_data)
                .enter()
                .append('text')
                .each(
                    function (donut_data, i)
                    {
                        var arc_center = donut_label_pos_arc.centroid(donut_data);
                        d3.select(this).attr('x', arc_center[0]).attr('y', arc_center[1]+arc_label_font_height/2).text(d.intervals[i]);
                    }
                );
        }
    );

// Draws the node title label
node.append('g')
    .attr('class', 'node-label')
    .append('text')
    .text( function(d) {return d.name;} )
    .attr('y', -donut_outer_radius + node_label_offset);

// Draws the node ID label
node.append('g')
    .attr('class', 'id-label')
    .append('text')
    .text( function(d) {return d.id.slice(2);} )
    .attr('text-anchor', 'middle')
    .attr('y', 8);

// Labels the number of parent and child links
node.append("g")
    .attr("class", "io-label")
    .attr("display", "none")
    .append('text')
    .attr("text-anchor", "middle")
    .text(
        function (d) {
            return "Parents: " + d.parents.length + " Children: " + d.children.length;
        }
    )
    .attr("dy", (donut_outer_radius + io_label_offset));

// Looks up and returns a node's transform attribute
function get_node_position (node_id)
{
    var transform_attr = d3.select('#'+node_id).attr('transform');
    var x_end_i = transform_attr.indexOf(" ", 10);
    var x_attr = transform_attr.slice(10, x_end_i);
    var y_attr = transform_attr.slice( x_end_i+1, transform_attr.indexOf( ")", x_end_i ) )
    
    return [x_attr, y_attr];
}

// Sets the endpoints of the links' lines, and adds thier sources and targets as classes.
link.each(
    function (d) {
        d3.select(this)
            .classed(d.source, true)
            .classed(d.target, true)
            .attr('x1', get_node_position(d.source)[0] )
            .attr('y1', get_node_position(d.source)[1] )
            .attr('x2', get_node_position(d.target)[0] )
            .attr('y2', get_node_position(d.target)[1] );
    }
);