# The Periodic Table of Harmony

## About The Periodic Table of Harmony
The Periodic Table of Harmony as a concept is a method of organizing harmony in 2 dimensions where each row contains a set of "scales" (althought the term "scale" has fairly loose definition in music), each of the same size. A scale in this context is a circular collection of intervals. Vertically, each scale is connected to the row above and/or below it via on or more lines. The lines indicate a parent/child relationship between scales. A child scale consists of all the intervals of a parent scale, but with any two adjacent intervals from the parent merged (their values summed). Naturally, a parent scale is diefined in the opposite manner.

 Each harmony is visually represented as a ring due to its periodic nature. Each ring represents a family of "modes" or "inversions" (depending upon your perspective) which are related by their common circular interval sequence. Regrettably, nomenclature in this project is inconsistent; I sometimes refer to each family as a scale, a harmony set (how I usually describe the data in the dataset), a ring (visual representation), or a node (graph terminology).

## About the Website
![image](https://user-images.githubusercontent.com/74752740/130612698-b5a494ec-97c6-4bc2-a466-445bc9205791.png)

The website features an interactive periodic table of harmony. The graph is drawn using the D3 Javascript library. Each node is drawn using D3's pie chart tools.

## Technicalities
 The graph is an undirected unweighted network diagram of the dataset. The dataset is the complete set of all circular permutaions of compositions of 12, which represents all harmony possible in 12-TET.
