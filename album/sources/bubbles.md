---
layout: main
section: Album 
title: Matplotlib - Area of Connected Bubbles
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

def generate_sites(shape,nucleation='rand'):
    '''
    Generate nucleation sites of specific size/layout
    
    Parameters:
    -----------
    shape:     shape of the heating nucleation sites, esp. for the regular grid
    nucleation: type of nucleation sites' distribution, regular grid or randomly generated
     
    Returns:
    --------
    size:     number of nucleation sites
    sites:    locations of sites
    '''
    size=shape[0]*shape[1]
    sites = []
    for i in range(size):
        if nucleation=='regular':
            x = (i%shape[1])/(shape[0]-1)
            y = int(i/shape[1])/(shape[0]-1)
        else:
            x,y=np.random.rand(),np.random.rand()
        sites.append((x,y))
    return size,np.array(sites)


def calculate_distances(sites,samples=None):
    '''
    Calculate distance matrices for internal nucleation sites or 
    between the nucleation sites and the external sampled points
    
    Parameters:
    -----------
    sites:     nuleation sites (2d)
    samples:   samples used to estimation of the cluster areas

    Returns:
    --------
    dmat:     distance matrix for all pairs of sites
    sdmat:    distance matrix between samples and nucleation sites for cluster patches' areas estimation
    '''
    size = len(sites)
    # distance matrix for all nucleation sites, samples and nucleation sites
    dmat=np.zeros((size,size))
    for i in range(size):
        x1,y1=sites[i]
        for j in range(size):
            x2,y2=sites[j]
            dmat[i][j] = np.sqrt((x1-x2)**2+(y1-y2)**2)
            dmat[j][i] = dmat[i][j]

    sdmat = None
    if samples is not None:
        nsample=len(samples)
        # distance between samples and nucleation sites
        sdmat=np.zeros((nsample,size))
        for i in range(nsample):
            x1,y1=samples[i]
            for j in range(size):
                x2,y2=sites[j]
                sdmat[i][j]=np.sqrt((x1-x2)**2+(y1-y2)**2)
    return dmat,sdmat

def image_process(size,sites,radii,wh=5):
    fixed={i:0 for i in range(size)}
    clusters=[]
    for i in range(size):
        if fixed[i] or (radii[i] == 0):
            continue

        fixed[i] = 1
        group,siblings=[i],[i]
        while siblings:
            i1=siblings.pop()
            for i2 in range(size):
                if radii[i2] == 0:
                    continue

                if (not fixed[i2]) and radii[i1] + radii[i2] >= dmat[i1][i2]:
                    fixed[i2] = 1
                    group.append(i2)
                    siblings.append(i2)
        clusters.append(group)

    cids=range(len(clusters))
    # produce unique color for each cluster
    r = lambda: random.randint(0,255)
    colors={c:'#{:02x}{:02x}{:02x}'.format(r(),r(),r()) for c in cids}
    if len(set(colors.values()))<len(cids):
        colors={c:'#{:02x}{:02x}{:02x}'.format(r(),r(),r()) for c in cids}

    fig=plt.figure(figsize=(wh,wh))
    ax = plt.gca(aspect='equal')
    ax.axis('off')
    for c,group in enumerate(clusters):
        for i in group:
            site,radius=sites[i],radii[i]
            bubble = patches.Circle((site[0],site[1]),radius,color=colors[c],fill=True,lw=0)
            ax.add_patch(bubble)

    # remove white margins
    fig.subplots_adjust(left=0,right=1,bottom=0,top=1)
    # matplotlib -> Image object
    fig.canvas.draw()
    w,h = fig.canvas.get_width_height()
    buf = np.fromstring (fig.canvas.tostring_argb(),dtype=np.uint8)
    buf.shape=(w,h,4)
    buf = np.roll(buf,3,axis=2)
    im=Image.frombytes('RGBA',(w,h),buf.tostring())

    areas,npx={},0
    for r,g,b,a in im.getdata():
        npx += 1
        hexcode='#{:02x}{:02x}{:02x}'.format(r,g,b)
        if hexcode == '#ffffff':
            continue
        weight = a/255
        if hexcode in areas:
            areas[hexcode] += weight
        else:
            areas[hexcode] = weight
    clus_areas=np.array(sorted(list(areas.values())))/npx
    return clus_areas

size = 145
size,sites = generate_sites(shape=(size,1))
dmat,_ = calculate_distances(sites,samples=None)

radii,occupied=[0]*size,[]
for i in range(size):
    rnd = np.random.rand()
    if rnd > prob:
        continue

    covered = False
    for k in occupied:
        # covered by a bubble growing out of another site
        if radii[k] > dmat[i][k]:
            covered = True
            break

    if covered:
        continue

    # random bubble radius
    radii[i] = 2*meanr*np.sqrt(-np.log(1-np.random.rand())/np.pi)
    occupied.append(i)

clus_areas=image_process(size,sites,radii,wh=5)
```
