// Functions which return links based on the dataset;

function get_incoming_links(input_Harmony_set) {
    
    let incoming_links = [], parent = 0;
    
    for (parent; parent < input_Harmony_set.parents.length; ++parent )
        {
            let link = { 'source' : input_Harmony_set.parents[parent], 'target' : input_Harmony_set.ID };
            incoming_links.push( link );        
        }
    
    return incoming_links;
} // UNUSED. Returns an array of all Links to the argument.

function get_outgoing_links(input_Harmony_set) {
    
    let outgoing_links = [], child = 0;
    
    for (child; child < input_Harmony_set.children.length; ++child )
        {
            let link = {'source' : input_Harmony_set.id,
                        'target' : input_Harmony_set.children[child]};
            outgoing_links.push( link );        
        }
    
    return outgoing_links;
} // UNUSED. Returns an array of all Links from the argument to other nodes.

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
                    let incoming_links = get_incoming_links(input_Harmony_set);
                    let outgoing_links = get_outgoing_links(input_Harmony_set);
                    let all_links = incoming_links.concat(outgoing_links);
                    return all_links;
        } 
} // UNUSED. Returns an array of Links of the caller's choice of incoming, outrgoing, or both (default).

// Currently only gets outgoing Links to avoid redundacy. OBSOLETE
function get_all_links( input_dataset ){
    let all_links = [], Harmony_set_i = 0;
    
    for (Harmony_set_i; Harmony_set_i < input_dataset.length; ++Harmony_set_i )
        {
            let set_links = get_outgoing_links( input_dataset[Harmony_set_i] );
            set_links.forEach( link => all_links.push( link ) );
            
        }
    
    return all_links;
}


/*
 Looks up and returns a node's transform attribute. Obsolete
function get_node_position(node_id){
    let transform_attr = d3.select('#'+node_id).attr('transform');
    let x_end_i = transform_attr.indexOf(" ", 10);
    let x_attr = transform_attr.slice(10, x_end_i);
    let y_attr = transform_attr.slice( x_end_i+1, transform_attr.indexOf( ")", x_end_i ) )
    
    return [x_attr, y_attr];
}

// Returns an array of '1's (ones) of the provided length. Required for creating a pie chart with equally sized divisions.
function create_wedge_array(n) {
    let unit_array = [];
    for (let i = 0; i < n; i++) {
        unit_array[i] = 1;
    }
    return unit_array;
}
*/