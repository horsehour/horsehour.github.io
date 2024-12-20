---
layout: main
section: Album 
title: TikZ - MLP (Multi-Layer Perceptron)
---

```latex
\documentclass{article}
\usepackage{mathpazo,amsfonts,nicefrac}
\usepackage{amsmath,amssymb}

\usepackage{graphicx}

\usepackage{pgfplots}
\usepackage{pgfplotstable}
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

\begin{tikzpicture}[
    /pgfplots/scale only axis,
    /pgfplots/width=10cm,
    /pgfplots/height=10cm
]

\pgfplotstableread[x index={0}, x index={1}, col sep = comma]{data/perceptron.csv}\data
% The scatterplot
\begin{axis}[
    name=main axis % Name the axis, so we can position the histograms relative to this axis
]
\addplot [
		scatter/classes={
           -1={mark=square*,blue!50},
           1={mark=*,purple!50}
        }, scatter,only marks,scatter src=explicit symbolic, mark size=1.5 
		] table[meta index = {2}]{\data};
\addplot[blue, very thick, domain=-5:5, samples=100]{1/3 - (2/3)*x};
\addplot[green, very thick, domain=-5:5, samples=100]{15/46.50631517916918 - (30.792046539485455/46.50631517916918)*x};

\end{axis}
\end{tikzpicture}
\end{document}
```
