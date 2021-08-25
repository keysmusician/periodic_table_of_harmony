# To-do list

## Content & Features
* Select two modes and view the difference between them
* Display last selected node "unwrapped" onto a keyboard layout
* Allow defining a root and displaying scale degrees
* Currently capable of displaying which nodes exist inside other nodes, but it would be nice if it showed WHERE in the parent node did the child node come from, and how many places it fits if more than one
* MIDI integration (allowing previewing of the sound of each mode and the ability to download the midi for that node)
* Allow node rotation by mouse wheel and dynamically change mode name, keeping starting interval at the top (or some fixed location)
* Always displayed row numbers ( which can't be scrolled away)
* Advanced info view option: Center popup window with a rotatable node closeup when selected. Can show modes based on rotation, alternative names, etc.
* Search bar and advanced filtering options, search zooms in on matched nodes?
* Zoom "fader" to click and drag zoom level (may help mobile support). Displays current zoom level
* Button to recenter graph. Should highlight when graph is displaced.
* VST integration (for use in a DAW)
* Invert selection
* Select row

## Bugs
* Link selection not complete when leaving a custom selection view
* Focused (clicked or tabbed) menus don't close on mouseout
* Changing a selection should reset the "selected"/ hide unselected node button
* Root note highlighting wrong wedge

## UI / UX
* Choosing a root should dynamically update the text in the "Root" button to reflect the selected root
* Make buttons stay highlighted when active
* Piano key styled pie charts. All charts have 12 divisions, and color coded to show the intervals
* Center-align popup menus
* Circular/Pie selection menu for choosing root notes
* Accessability: Tab selection and screen reader support of buttons, menu and info icons
* Fix CSS formatting on Firefox and check on other browsers
* Menu with customization options: User color customization including dark mode/light mode selector, Toggle animations
* Transitions and animations: ripple when clicking nodes, node rotation transition, animated filtering transitions, zoom transition, exit selection transition before removing ✅
* Mobile support
* Huge horizontal scroll bar in modal on small screens
* Show/Hide Note Letters button
* Show Selected/Displayed/Total counts for the whole chart
* Show number of selected / displayed / total number per row (e.g. Row 7: 1/3/80 or 1 selected / 3 displayed / 80 total)
* Incorporate some indication of symmetry in symmetrical scales
* Chose whether half steps are displayed relative to the root or relative to the nearest note (which is the current behavior)

## Business
* Proper branding (trademark, logo, purchase a domain name):
  * Harmony Explorer
  * Harmony Map
  * The Harmony Graph
  * The Map of Harmony
  * Periodic table of Harmony
* Brainstorm business model and pricing
* Public feature request page where users can upvote/scale of 1 to 10 how much they want a feature and how long they can wait for it, and submit their own requests, report bugs

## Performace / Optimization
* Parent selection is inefficient
* File organizatino: separate styles from scripts
* Graph HTML structure is a bit inconsistent in grouping of elements
* Most D3 .each() calls could probably be simplified to enter selection functions or .call() methods
