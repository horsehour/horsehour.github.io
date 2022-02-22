---
layout: main
section: Album 
title: Altair - US Flight Network 
---

```python
import altair as alt
alt.data_transformers.enable('default', max_rows=None)
alt.renderers.enable('notebook')

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

def rgb2hex(r,g,b):
    hex = "{:02x}{:02x}{:02x}".format(r,g,b)
    return hex
def hex2rgb(hexcode):
    rgb = tuple(map(ord,hexcode[1:].decode('hex')))
    return rgb
def hex2dec(hexcode):
    return int(hexcode, 16)


base='.'
airports = pd.read_csv(base+'airports.csv', usecols=['IATA','City', 'State', 'Longitude', 'Latitude'])
airlines = pd.read_csv(base+'airlines.csv').IATA.values
cost_df = pd.read_csv(base+'cost1.csv')
usairports = pd.read_csv(base+'usairports.csv')

# add lat-lon cooridnations
ind_airports = {v:k for k,v in airports.IATA.to_dict().items()}

srcs =  airports.iloc[[ind_airports[iata] for iata in cost_df.Departure]]
dests =  airports.iloc[[ind_airports[iata] for iata in cost_df.Arrival]]

cost_df['Lat1'] = np.array(srcs.Latitude)
cost_df['Lon1'] = np.array(srcs.Longitude)
cost_df['Lat2'] = np.array(dests.Latitude)
cost_df['Lon2'] = np.array(dests.Longitude)

# compute average cost w.r.t the departure for each airline
mean_cost = pd.DataFrame(cost_df.groupby(['Airline','Departure'])['NoControl', 'LQR', 'Saved', 'Lat1', 'Lon1'].mean()).reset_index()

mean_cost['Color'] = 0
mean_cost['Name'] = ''


colors = [[141,211,199], [255,255,179], [190,186,218], [251,128,114], [128,177,211], [253,180,98], [179,222,105], [252,205,229], [217,217,217],[188,128,189], [204,235,197], [255,237,111], [153, 204, 255]]
names = ['United', 'American', 'US', 'Frontier', 'JetBlue', 'Skywest', 'Alaska', 'Spirit', 'Southwest', 'Delta', 'Atlantic', 'MQ', 'VX']

for airline, name, color in zip(airlines, names, colors):
    mask = mean_cost.Airline == airline
    mean_cost.loc[mask, 'Name'] = name
    mean_cost.loc[mask, 'Color'] = hex2dec(rgb2hex(*color))

color_scale = alt.Scale(
    domain=list(airlines),
    range=['rgb({0},{1},{2})'.format(color[0], color[1], color[2]) for color in colors]
)

entry='NoControl'
points = alt.Chart(mean_cost).mark_circle().encode(
    longitude='Lon1:Q',
    latitude='Lat1:Q',
    size='{}:Q'.format(entry),
    color=alt.Color('Airline:N', scale=color_scale),
    opacity=alt.OpacityValue(1),
    tooltip=['Airline:N', 'Departure:N', '{}:Q'.format(entry)],
)

chart = (background + points)
chart
```
