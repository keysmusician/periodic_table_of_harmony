# To-do list

Table of Contents
=================

* [To-do list](#to-do-list)
   * [Content &amp; Features](#content--features)
   * [Bugs](#bugs)
   * [UI / UX](#ui--ux)
   * [Business](#business)
   * [Performance / Optimization](#performance--optimization)

## Content & Features
* Make the length of links meaningful and intuitive?
* Select two modes and view the difference between them
* Display last selected node "unwrapped" onto a keyboard layout
* Allow defining a root and displaying scale degrees
* Currently capable of displaying which nodes exist inside other nodes, but it would be nice if it showed WHERE in the parent node did the child node come from, and how many places it fits if more than one
* MIDI integration (allowing previewing of the sound of each mode and the ability to download the midi for that node, showing what chord you are playing)
* Allow node rotation by mouse wheel and dynamically change mode name, keeping starting interval at the top (or some fixed location)
* Row numbers (which can't be scrolled away)
* Advanced info view option: Center popup window with a rotatable node closeup when selected. Can show modes based on rotation, alternative names, etc.
* Search bar and advanced filtering options, search zooms in on matched nodes?
* Zoom "fader" to click and drag zoom level (may help mobile support). Displays current zoom level
* Button to recenter graph. Should highlight when graph is displaced.
* VST integration (for use in a DAW)
* Invert selection
* Select row
* Setting to invert the graph (so unison is on top and chromatic is on the bottom)

## Bugs
* Database: "root" attribute is not set consistently on all nodes, so pitches are not being labeled in such a way that shows the progression of the pitch relationship between nodes. Interval relationships are correct. Consider removing the "root" attribute from the dataset and use it only within the context of drawing the graph. This way, the dataset represents scale types, and the graph can dynamically display modes / chord qualities. Example of the problem: A parent of [A, A#] is [A, B, C], which is intervalically correct, but the spelling is inconsistent because the initial interval changed. It should be spelled [A, A#, G] for pitch consistency (to clearly show the addition of a new pitch). I think I would still want users to be able to rotate a node and chose which initial interval the node uses for spelling.
* Link selection not complete when leaving a custom selection view
* Focused (clicked or tabbed) menus don't close on mouseout
* Changing a selection should reset the "selected"/ "hide unselected node" button
* Combining cohemitonic and custom selections is a bit finicky. |Selection > Cohemitonic > Selection|does nothing in all cases. |Selection which includes cohemitonic nodes > cohemitonic| should remove the cohemitonic nodes from the selection, not draw the entire harmonious dataset.
* ~~Root note highlighting wrong wedge~~

## UI / UX
* ~~Choosing a root should dynamically update the text in the "Root" button to reflect the selected root~~
* Make buttons stay highlighted when active
* Option to switch to an alternate node style with piano key styled pie charts; All charts would have 12 divisions, and color coded to show the intervals
* Center-align popup menus
* Circular/Pie selection menu for choosing root notes
* Accessability: Tab selection and screen reader support of buttons, menu and info icons
* Fix CSS formatting on Firefox and check on other browsers
* Menu with customization options: User color customization including dark mode/light mode selector, Toggle animations
* Transitions and animations: ripple when clicking nodes, node rotation transition, animated filtering transitions, zoom transition, exit selection transition before removing ✅
* Mobile support
* Huge horizontal scroll bar in modal on small screens
* "Show/Hide Note Letters" button
* Show Selected/Displayed/Total counts for the whole chart
* Show number of selected / displayed / total number per row (e.g. Row 7: 1/3/80 or 1 selected / 3 displayed / 80 total)
* Incorporate some indication of symmetry in symmetrical scales
* Chose whether half steps are displayed relative to the root (cumulative) or relative to the adjacent note (which is the current behavior)
* Hide the pitch layer/ring of a node when no root is selected, and make it possible to not select a root

## Business
* Proper branding (trademark, logo, purchase a domain name):
  * Harmony Explorer
  * Harmony Map
  * The Harmony Graph
  * The Map of Harmony
  * Periodic table of Harmony
* Brainstorm business model and pricing
* Public feature request page where users can up-vote/scale of 1 to 10 how much they want a feature and how long they can wait for it, and submit their own requests, report bugs

## Performance / Optimization
* Graph HTML structure is a bit inconsistent in grouping of elements
* I *could* preprocess the dataset by 1) rotating any interval lists such that the root is first and 2) grouping it into sub-arrays by row, both of which would probably save some computing later on, but currently it's fast enough as is
* Parent selection is inefficient
* File organization: separate styles from scripts?
* ~~Family tree selection is slow~~
* ~~Full graph is slow to pan~~ Not sure there's anything that can be done about this...
* ~~Most D3 .each() calls could probably be simplified to enter selection functions or .call() methods~~
