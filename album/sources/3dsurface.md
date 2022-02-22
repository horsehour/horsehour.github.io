---
layout: main
section: Album 
title: TikZ - 3D Surface
---

```latex
\documentclass{standalone}
\usepackage{pgfplots}
\usepackage{tikz}
\usetikzlibrary{arrows,automata,mindmap,shapes,positioning,snakes,calc}
\tikzset{
  tag/.style={
    rectangle,
    draw=black, very thick,
    text width=4em,
    minimum height=2em,
    text centered},
  commit/.style={
    circle,
    draw=black, very thick,
    text width=1em,
    minimum height=1em,
    text centered},
  point/.style={coordinate},
}
\pgfplotsset{compat=1.6} 

\begin{document}
\begin{tikzpicture}
\begin{axis}[
  grid=major,              % draw major gridlines
  major grid style=dotted, % dotted grid lines
  colormap/jet,            % colormap from MATLAB
  samples=50,              % 50 samples in each direction
  view={140}{30},          % configure plot view
  domain=-3:3,             % x varies from -3 to 3
  y domain=-3:3,           % y varies from -3 to 3
  zmin=-10, zmax=10,       % z-axis limits
  xlabel={$x$},            % x-axis label
  xtick={-3,-2,...,3},     % integer-spaced tick marks on the x-axis
  ylabel={$y$},            % y-axis label
  title={$z = y^2 - x^2$},     % plot title
]
\addplot3[mesh] {y^2-x^2}; % make the mesh plot
\end{axis}
\end{tikzpicture}
\end{document}
```
