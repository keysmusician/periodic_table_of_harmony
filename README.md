# Periodic Table of Harmony

Twelve-tone harmony visualized

[![image](https://user-images.githubusercontent.com/74752740/130612698-b5a494ec-97c6-4bc2-a466-445bc9205791.png)](https://keysmusician.github.io/Periodic-Table-of-Harmony/)

Check it out here: https://keysmusician.github.io/Periodic-Table-of-Harmony/

Table of Contents
=================

* [Periodic Table of Harmony](#periodic-table-of-harmony)
   * [About The Periodic Table of Harmony](#about-the-periodic-table-of-harmony)
   * [About the Website](#about-the-website)
      * [Navigation](#navigation)
      * [Selection](#selection)
      * [Sidebar menu](#sidebar-menu)
      * [Information modal](#information-modal)
      * [Buttons](#buttons)
         * [Show/hide nodes](#showhide-nodes)
         * [Show/hide links](#showhide-links)
         * [Clear Selection](#clear-selection)
         * [Select connected](#select-connected)
         * [Root](#root)
   * [Technicalities](#technicalities)
   * [Other Thoughts](#other-thoughts)
   * [Links](#links)

## About The Periodic Table of Harmony
The Periodic Table of Harmony as a concept is a method of organizing harmony in 2 dimensions where each row contains a set of scale types of equal cardinality (number of intervals). A scale type is defined as a cycle (circular sequence) of intervals. Vertically on the table, each scale type is connected to the row above and/or below it via on or more lines (links) indicating a parent/child relationship. The angle and length of the links are not significant. A child scale type consists of all the intervals of a parent, but with any two adjacent intervals from the parent merged (their values summed). Conversely, a parent scale type is formed by inserting an interval, splitting two adjacent intervals since the total number of half steps is held constant.

Due to their periodic nature, each scale type is visually represented as a ring. Each rotation of a ring corresponds to a mode of a scale or inversion of a chord (depending upon your perspective).

*Note: Though I've updated some if it, some nomenclature in this project may still be inconsistent; I may use the term scale, scale type, harmony set, ring, or node interchangeably. I have attempted to deconflate the terms and use each one appropriately.*

## About the Website
The website features an interactive periodic table of harmony. The buttons centered above the bottom of the page provide selection and filtering options to help navigate the graph. The transparent nodes represent cohemitonic scale types (those which contain contiguous half steps).

### Navigation
Click and drag anywhere except on a node to pan around the graph. Scroll to zoom.

### Selection
Click on a node to select/deselect it. Hovering over a node highlights its links. A selected node's links will remain highlighted.

### Sidebar menu
![image](https://user-images.githubusercontent.com/74752740/130615265-f222d749-f30a-488e-b85e-970875aad20a.png)

The sidebar menu can be opened from the icon in the upper left corner. The menu is currently empty and is probably entirely unnecessary.

### Information modal
![image](https://user-images.githubusercontent.com/74752740/130615379-b157bd49-1fa0-4f2b-8261-291ab248feba.png)

The information modal appears upon first landing on the website and can be viewed again at any time by clicking on the info icon (i) in the upper right corner of the graph. The info modal gives a description of the website in hopes that visiters will have an easier time understanding what they're looking at and how to navigate it. 

### Buttons
#### Show/hide nodes
This button is actually the show/hide popup menu. It is used to show/hide a selection, or toggle between showing all nodes and just the ones without contiguous half steps. The latter option can be useful because the most musically useful nodes, at least traditionally speaking, are those which harmonize well, which tends to mean that they don't contain contiguous half steps.

![image](https://user-images.githubusercontent.com/74752740/130614468-b6d1ad78-d51d-4027-b045-3dcfa11e41fe.png)

#### Show/hide links
This is another popup menu used to toggle displaying links. Links can either be shut off entirely, or only shown if they're connected to a selected node. This can be useful to more easily see relationships, as it removes a lot of overlapping or irrelevant links.

#### Clear Selection
The center button is in fact a button which clears a selection. It also dynamically displays the current number of selected nodes.

#### Select connected
The select connected popup menu offers a few options for automatically creating selections of related notes. It can select:
* parents
* children
* immediate family (both parents and children)
* family tree (parents of all parents and children of all children)

It is expected that these selections will be made after selecting a single reference node, but that expectation is not enforced; all selected nodes will respond to this menu.

#### Root
The root menu is used to select the displayed note names in each node. A root note must be paired with a "starting" interval, which is an arbitrary decision. Once a reference interval is chosen, the rest of the notes can be found. 

## Technicalities
The dataset is the complete set of all circular permutations of compositions of 12, which represents all harmony possible in 12-TET. The graph is an undirected unweighted network diagram of the dataset. The graph is drawn using the [D3 Javascript library](https://github.com/d3/d3). Each graph node is drawn using D3's pie chart tools. There's a to-do list and other files on the development branch.

### Files
The data used to build the graph lives in `data.js`. All the magic happens in `graph.js`. The other files are fairly self-explanatory.

## Other Thoughts
Since I started this project I have changed the way I think about some musical concepts that I used in this project. I used to refer to the data type abstracting each scale type as a "harmony set" (among other things), but I have since arrived at a more nuanced and rigorous definition of things like chords, scales, modes, etc. What I formerly referred to as "harmony sets" I now call "interval cycles" or "scale types." I also don't describe the Periodic Table of Harmony (PToH) as a visualization of all *chords,* since chords requires a root, a voicing, and an expression in time. While the PToH can certainly be used as effectively an index of all scales and chords in 12-TET, the PToH is more accurately thought of as representing all possible scale types, not chords or chord qualities. I also had made references to "voices" in some documentation on the project. Voices are also features of chords, not scales or scale types, so I've removed those references. 

## Links
The project is hosted on GitHub Pages here: https://keysmusician.github.io/Periodic-Table-of-Harmony/

Here are some links I have used or that may be useful for continuing this project:
* https://www.data-to-viz.com/graph/network.html
* https://bl.ocks.org/Andrew-Reid/a73f9af9ccd9ef901a0c33c624096049
* https://stackoverflow.com/questions/39076826/how-to-rotate-any-shape-continuously-in-d3-js


### Author
I'm a software engineer specializing in machine learning and interested in DSP/audio programming. I'm also a jazz pianist and music producer.

[LinkedIn](https://www.linkedin.com/in/justin-masayda)

[Twitter](https://twitter.com/JustinMasayda)
