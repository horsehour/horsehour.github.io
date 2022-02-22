---
layout: main
section: Album 
title: Matplotlib - Colored Pie 
---

```python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

plt.rcParams['font.family'] = 'serif'
plt.rcParams['font.serif'] = 'Times'
# plt.rcParams['font.weight'] = 'bold'
plt.rcParams['font.weight'] = 'normal'
plt.rcParams['font.size'] = 20

# plt.rcParams['text.usetex'] = False

plt.rcParams['axes.labelsize'] = 20
# plt.rcParams['axes.labelweight'] = 'bold'
plt.rcParams['axes.labelweight'] = 'normal'
    
plt.rcParams['lines.linewidth'] = 2
plt.rcParams['lines.markeredgewidth'] = 2

# plt.rcParams['xtick.top'] = True
plt.rcParams['xtick.direction'] = 'in'
plt.rcParams['xtick.minor.visible'] = True
plt.rcParams['xtick.major.size'] = 8
plt.rcParams['xtick.major.width'] = 1
plt.rcParams['xtick.labelsize'] = 20
# plt.rcParams['ytick.right'] = True
plt.rcParams['ytick.direction'] = 'in'
plt.rcParams['ytick.labelsize'] = 20
plt.rcParams['ytick.minor.visible'] = True
plt.rcParams['ytick.major.size'] = 8
plt.rcParams['ytick.major.width'] = 1

plt.rcParams['savefig.dpi'] = 500

df = pd.read_csv('data.csv')

colors = [[141,211,199], [255,255,179], [190,186,218], [251,128,114], [128,177,211], [253,180,98], [179,222,105], [252,205,229], [217,217,217],[188,128,189], [204,235,197], [255,237,111], [153, 204, 255]]
color_map = dict(zip(airlines, np.array(colors)/256))

entry, focus = 'LQR', 'LAS'
fig, ax = plt.subplots(figsize=(6, 6), subplot_kw=dict(aspect="equal"))
mask = df.Departure == focus
selected = df[mask].sort_values(by=entry).reset_index(drop=True)
data, cs = selected[entry], [list(color_map[a]) + [1] for a in selected.Airline]
wedges, texts, autotexts = ax.pie(data, labels=selected.Airline, colors=cs, autopct=lambda pct: func(pct, data),
                                 pctdistance=0.8, labeldistance=1.1,wedgeprops=dict(width=0.8))
ax.text(-0.15,-0.05,focus, weight='bold')
plt.setp(autotexts, size=15, weight='bold')
plt.savefig(base+'Pie-{0}-{1}.eps'.format(entry, focus), transparent=True)


```
