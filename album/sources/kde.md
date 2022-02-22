---
layout: main
section: Album 
title: Matplotlib, Scipy - Gaussian Kernel Density Estimation
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

# gs, sgs are numpy arrays
estimator = gaussian_kde([gs,sgs])
density_values=estimator([gs,sgs])

fig,(ax1,ax2) = plt.subplots(1,2,figsize=(10,3),sharey='all')

min_density,max_density=density_values.min(),density_values.max()
## coloring scheme based on estimated densities
crs = cm.jet((density_values-min_density)/(max_density-min_density))
ax1.scatter(gs,sgs,c=crs,s=1)
ind = np.where(density_values==max_density)[0][0]
ax1.scatter(gs[ind],sgs[ind],marker='x',s=50,c='w')
ax1.set_ylabel('SG')
ax1.text(0.7,0.75,s='  G={0:.3f}\nSG={1:.3f}'.format(gs[ind],sgs[ind]),transform=ax1.transAxes)
    
# compute the density for samples of points
samples=np.array([(x,y) for x in np.linspace(gs.min(),gs.max(),200) for y in np.linspace(sgs.min(),sgs.max(),200)])
dsamples=estimator([samples[:,0],samples[:,1]])
ind = np.where(dsamples==dsamples.max())[0][0]

dmin,dmax=dsamples.min(),dsamples.max()
crs = cm.jet((dsamples-dmin)/(dmax-dmin))

ax2.scatter(samples[:,0],samples[:,1],c=crs,s=1)
ind = np.where(dsamples==dmax)[0][0]
ax2.scatter(samples[ind][0],samples[ind][1],marker='x',s=50,c='w')
ax2.text(0.7,0.75,s='  G={0:.3f}\nSG={1:.3f}'.format(samples[ind][0],samples[ind][1]),c='w',transform=ax2.transAxes)

for ax in [ax1,ax2]:
    ax.set_xlabel('G')
    ax.set_xlim(gs.min(),gs.max())
    ax.set_ylim(sgs.min(),sgs.max())
    
plt.subplots_adjust(wspace=0.02)
plt.savefig('Figs/G_SG_KDE_{}.pdf'.format(size),bbox_inches='tight',pad_inches=0.1,transparent=True)

```
