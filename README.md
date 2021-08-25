# The Periodic Table of Harmony

Twelve-tone harmony visualized

## About The Periodic Table of Harmony
The Periodic Table of Harmony as a concept is a method of organizing harmony in 2 dimensions where each row contains a set of "scales" (althought the term "scale" has fairly loose definition in music), each of the same size. A scale in this context is a circular collection of intervals. Vertically, each scale is connected to the row above and/or below it via on or more lines. A line indicates a parent/child relationship between connected scales. A child scale consists of all the intervals of a parent scale, but with any two adjacent intervals from the parent merged (their values summed). Naturally, a parent scale is diefined in the opposite manner.

 Each harmony is visually represented as a ring due to its periodic nature. Each ring represents a family of "modes" or "inversions" (depending upon your perspective) which are related by their common circular interval sequence. Regrettably, nomenclature in this project is inconsistent; I sometimes refer to each family as a scale, a harmony set (how I usually describe the data in the dataset), a ring (visual representation), or a node (graph terminology).

## About the Website
![image](https://user-images.githubusercontent.com/74752740/130612698-b5a494ec-97c6-4bc2-a466-445bc9205791.png)

The website features an interactive periodic table of harmony. The graph is drawn using the D3 Javascript library. Each graph node is drawn using D3's pie chart tools. The buttons centered above the bottom of the page provide selection and filtering options to help navigate the graph. The transparent nodes are hemitonic scales (scales which contain contiguous half steps).

### Navigation
Click and drag anywhere except on a node to pan around the graph. Scroll to zoom.

### Selection
Click on a node to select/deselect it. Hovering over a node highlights its links. A selected node's links will remain highlighted.

### Sidebar menu
![image](https://user-images.githubusercontent.com/74752740/130615265-f222d749-f30a-488e-b85e-970875aad20a.png)

The sidebar menu can be opened from the icon in the upper left corner. The menu is currently empy and is probably entirely uneccessary.

### Information modal
![image](https://user-images.githubusercontent.com/74752740/130615379-b157bd49-1fa0-4f2b-8261-291ab248feba.png)

The information modal appears upon first landing on the website and can be viewed again at any time by clicking on the info icon (i) in the upper right corner of the graph. The info modal gives a description of the website in hopes that visiters will have an easier time understanding what they're looking at and how to navigate it. 

### Buttons
#### Show/hide nodes
This button is actually the show/hide popup menu. It is used to show/hide a selection, or toggle between showing all nodes and just the ones without contiguous half steps. The latter option can be useful becuase the most musically useful nodes, at least traditionally speaking, are those which harmonize well, which tends to mean that they don't contain contiguous half steps.

![image](https://user-images.githubusercontent.com/74752740/130614468-b6d1ad78-d51d-4027-b045-3dcfa11e41fe.png)

#### Show/hide links
This is another popup menu used to toggle displaying links. Links can either be shut off entirely, or only shown if they're connected to a selected node. This can be useful to more easily see relationships, as it removes a lot of overlapping or irrelevant links.

#### Clear Selection
The center button is in fact a button which clears a slection. It also dynamically displays the current number of selected nodes.

#### Select connected
The select conncted popup menu offers a few options for automatically creating selections of related notes. It can select:
* parents
* children
* immediate family (both parents and children)
* family tree (parents of all parents and children of all children)

It is expected that these selections will be made after selecting a single reference node, but that expectation is not enforced; all selected nodes will repsond to this menu.

#### Root
The root menu is used to select the displayed note names in each node. A root note must be paired with a "starting" interval, which is an arbitrary decision. Once a reference interval is chosen, the rest of the notes can be found. 

## Technicalities
The graph is an undirected unweighted network diagram of the dataset. The dataset is the complete set of all circular permutaions of compositions of 12, which represents all harmony possible in 12-TET.
