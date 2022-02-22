---
layout: main
section: Album 
title: Matplotlib - Grid/Feature Map 
---

```python
import sys,os,re,random,pickle
import pandas as pd
import numpy as np
from time import time
from glob import glob
    
import matplotlib
import matplotlib.pyplot as plt
from matplotlib import cm,ticker
from matplotlib.patches import Rectangle

import warnings
warnings.filterwarnings('always')
warnings.filterwarnings('ignore')
%matplotlib inline

plt.rcParams['font.family'] = 'serif'
plt.rcParams['font.serif'] = 'Times'
plt.rcParams['font.weight'] = 'bold'
plt.rcParams['font.size'] = 20

plt.rcParams['text.usetex'] = False
plt.rcParams['text.latex.preamble'] = [r'\usepackage{amsmath}']
plt.rcParams["mathtext.fontset"] = 'cm'
plt.rcParams['axes.labelsize'] = 20
plt.rcParams['axes.labelweight'] = 'bold'
    
plt.rcParams['lines.linewidth'] = 2
plt.rcParams['lines.markeredgewidth'] = 2

plt.rcParams['xtick.direction'] = 'in'
plt.rcParams['xtick.minor.visible'] = True
plt.rcParams['xtick.major.size'] = 8
plt.rcParams['xtick.major.width'] = 1
plt.rcParams['xtick.labelsize'] = 20
plt.rcParams['ytick.direction'] = 'in'
plt.rcParams['ytick.labelsize'] = 20
plt.rcParams['ytick.minor.visible'] = True
plt.rcParams['ytick.major.size'] = 8
plt.rcParams['ytick.major.width'] = 1

plt.rcParams['savefig.dpi'] = 500

rows = 8
cols = 8
EMPTY_CELL = 0
OBSTACLE_CELL = 1
START_CELL = 2
GOAL_CELL = 3
MOVE_CELL = 4

# create discrete colormap
cmap = matplotlib.colors.ListedColormap(['white', 'black', 'green', 'red', 'blue'])
bounds = [EMPTY_CELL, OBSTACLE_CELL, START_CELL, GOAL_CELL, MOVE_CELL ,MOVE_CELL + 1]
norm = matplotlib.colors.BoundaryNorm(bounds, cmap.N)

data = np.zeros(shape=(rows, cols))
data[0][0] = 2
data[6][3] = 4

fig, ax = plt.subplots(figsize=(3,3))
ax.imshow(data, cmap=cmap, norm=norm)
# draw gridlines
ax.grid(which='major',axis='both',linestyle='-',color='k',linewidth=2)
for p in ['top','bottom','left','right']:
    ax.spines[p].set_linewidth(2)
ax.set_xticks(np.arange(0.5, rows, 1));
ax.set_yticks(np.arange(0.5, cols, 1));
plt.tick_params(axis='both', which='both',bottom=False,left=False,labelbottom=False,labelleft=False) 

```
