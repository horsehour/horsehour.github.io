---
layout: main
section: Album 
title: OSMNX - Albany Driveway 
---

```python
import osmnx as ox

import matplotlib.cm as cm
import matplotlib.colors as colors

G1 = ox.graph_from_place('Albany, New York', network_type='drive')
G1 = ox.project_graph(G1)

# make the edges being nodes
edge_centrality = nx.closeness_centrality(nx.line_graph(G1))
ev = [edge_centrality[edge + (0,)] for edge in G1.edges()]

# color scale converted to list of colors for graph edges
norm = colors.Normalize(vmin=min(ev)*0.8, vmax=max(ev))
cmap = cm.ScalarMappable(norm=norm, cmap=cm.inferno)
ec = [cmap.to_rgba(cl) for cl in ev]

# color the edges in the original graph with closeness centralities in the line graph
fig, ax = ox.plot_graph(G1, bgcolor='k', axis_off=True, node_size=0, node_color='w', node_edgecolor='gray', node_zorder=2,
                        edge_color=ec, edge_linewidth=1.5, edge_alpha=1)

```
