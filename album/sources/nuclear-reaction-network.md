---
layout: main
section: Album 
title: Python/Graphtool - Nuclear Reaction Network 
---

```python
import math
import graph_tool.all as gt
import matplotlib.pyplot as plt

graph = gt.load_graph('nuc.xml.gz')
n = graph.num_vertices()
degs = graph.get_out_degrees(range(n))

norm = plt.Normalize()
cmap = plt.get_cmap('Set2')(norm(range(19)))

vc = graph.new_vp('vector<float>')
szs = graph.new_vp('float')
grp = graph.new_vp('int')
protons = graph.vertex_properties['proton']
for v in range(n):
    k = degs[v]
    vc[v] = cmap[k]
    szs[v] = degs[v]
    grp[v] = protons[v]

categories = {}
modes = graph.edge_properties['mode']
for e in graph.edges():
    mode = modes[e]
    if mode not in categories:
        categories[mode] = len(categories)

ec = graph.new_edge_property('vector<double>')
alpha = 0.3
ncomb = len(categories)
cmap = plt.get_cmap('viridis')(norm(range(ncomb)), alpha=alpha)

for e in graph.edges():
    mode = modes[e]
    ind = categories[mode]
    ec[e] = cmap[ind]

state = gt.minimize_nested_blockmodel_dl(graph, deg_corr=True)
t = gt.get_hierarchy_tree(state)[0]
tpos = gt.radial_tree_layout(t, t.vertex(t.num_vertices() - 1), weighted=True)
cts = gt.get_hierarchy_control_points(graph, t, tpos)
pos = graph.own_property(tpos)

text_rot = graph.new_vertex_property('double')
for v in graph.vertices():
    if pos[v][0] > 0:
        text_rot[v] = math.atan(pos[v][1] / pos[v][0])
    else:
        text_rot[v] = math.pi + math.atan(pos[v][1] / pos[v][0])

gt.graph_draw(graph, pos=pos, vertex_fill_color=vc, vertex_color=vc,
              edge_control_points=cts,
              vertex_size=szs,
              vertex_text=graph.vertex_properties['label'],
              vertex_text_rotation=text_rot,
              vertex_text_position=1,
              vertex_font_size=12,
              edge_color=ec,
              bg_color=[0, 0, 0, 1],
              output_size=[8000, 8000],
              output='nucnet.pdf')

```
