---
layout: main
section: Album 
title: TikZ - Multilayer 
---

Dependance: [tikz-network](https://ctan.org/pkg/tikz-network?lang=en)


```latex
%\RequirePackage{luatex85}
\documentclass{standalone}

% Used packages
\usepackage{tikz-network}

\begin{document}

% Setting
\SetCoordinates[xAngle = -20]
\SetVertexStyle[MinSize = 4.5mm]
\SetLayerDistance{-5}
\SetPlaneWidth{10}
\SetPlaneHeight{10}
\begin{tikzpicture}[multilayer=3d]

%%
% Layer 2

% Background
\Plane[layer=2,color=orange,opacity=.6,image=./data/bg2.pdf,ImageAndFill,grid=1cm,InBG]

% Text
\Text[x=1.2,y=-.1,layer=2,anchor=north west,style={scale=2.5}]{Layer $\beta$}

% Vertices
\Vertices[color=orange]{./data/vertices.csv}

% Intra-layer edges in layer 2
\Edges[color=black,layer={2,2}]{./data/edges.csv}
\EdgesNotInBG

% Inter-layer edges between layer 1 and 2
\Edges[color=red,layer={1,2},style={dashed}]{./data/edges.csv}

%%
% Layer 1

% Background
\Plane[opacity=.6,image=./data/bg1.pdf,ImageAndFill,grid=1cm]

% Text
\Text[x=1.2,y=-.1,layer=1,anchor=north west,style={scale=2.5}]{Layer $\alpha$}

% Intra-layer edges in layer 1
\Edges[color=black,layer={1,1}]{./data/edges.csv}

% Vertices in layer 1
\Vertices[layer=1]{./data/vertices.csv}


\end{tikzpicture}
\end{document}

```
