---
layout: main
section: Album 
title: Matplotlib - Early Warning Signal of Traffic Disruption
---

```python
import sys,os,re,random,pickle
import pandas as pd
import numpy as np
from time import time
from glob import glob

import matplotlib
from matplotlib import cm
from scipy.stats import gaussian_kde    
import matplotlib.pyplot as plt
import matplotlib.patches as patches

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

did = dates.index(20161008)

ind1, ind2 = 469, 1199

g = cycle([5,6,7,1,2,3,4])
for i in range(did + 1):
    week = next(g)
disrupt = disrupts[disrupts.did == did].disrupt.values
brk = disrupt[0]

alerts = []
# for sign_name, cutoff_signal in zip(['acf1','std'], [0.8,9]):
for sign_name, cutoff_signal in zip(['acf1','acf1','acf1'], [0.7,0.8,0.9]):
    indices = (ewi_speed.ewi == sign_name) & (ewi_speed.did == did)
    sign = ewi_speed[indices].iloc[:,2:].values[0]

    indices1 = (ewi_speed.ewi == sign_name) & (ewi_speed.did == did)
    sign1 = ewi_speed[indices1].iloc[:,2:].values[0]

    for t in range(sign1.shape[0]):
        if not np.isnan(sign1[t]) and sign1[t] >= cutoff_signal:
            alerts.append(t + cutoff_time)
            break

fig, (ax1, ax2, ax3) = plt.subplots(3, 1, figsize=(15,12), sharex='all')
xs = range(niv)

for ax, name, ys in zip([ax1, ax2, ax3], ['Flow', 'Speed', 'Density'], [fr.iloc[did], sr.iloc[did], dr.iloc[did]]):
    ax.set_ylabel(name)
    ax.scatter(xs[ind1:ind2],ys[ind1:ind2],s=10,c='b')
    f1=ax.vlines([brk], 0, max(ys), color='k',lw=5)
    f2=ax.vlines([alerts[0]], 0, max(ys), color='#fec44f',lw=3)
    f3=ax.vlines([alerts[1]], 0, max(ys), color='r',lw=3)
    
    f2 = ax.vlines([alerts[0]], 0, max(ys), color='g',lw=3)
    f3 = ax.vlines([alerts[1]], 0, max(ys), color='#fec44f',lw=3)
    f4 = ax.vlines([alerts[2]], 0, max(ys), color='r',lw=3)


ax1.set_title(r'{0}/{1}'.format(dates[did], days[week - 1]), fontsize=25)

ticks = [479 + 120 * i for i in range(7)]
ax3.set_xticks(ticks)
ax3.set_xticklabels(np.array(times)[ticks])

ax3.set_xlabel('Time')

ax1.legend([f1, f2, f3, f4], ['Disruption', r'Warning ({0} $\ge$ {1})'.format('ACF1', 0.7), r'Warning ({0} $\ge$ {1})'.format('ACF1', 0.8), r'Warning ({0} $\ge$ {1})'.format('ACF1', 0.9)], loc=0, fontsize=20)
plt.subplots_adjust(wspace=0, hspace=0.01)

```
