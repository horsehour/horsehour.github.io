---
layout: main
section: Album 
title: TikZ - Text Box 
---

```latex
\documentclass{standalone}
\usepackage{pgfplots}
\usepackage{pgfplotstable}
\usepackage{tikz}
\usepackage{amsmath,amssymb}
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

% Define box and box title style
\tikzstyle{mybox} = [draw=red, fill=blue!20, very thick,
    rectangle, rounded corners, inner sep=10pt, inner ysep=20pt]
\tikzstyle{fancytitle} =[fill=red, text=white]
\pgfplotsset{compat=1.6} 

\begin{document}
\begin{tikzpicture}
\node [mybox] (box){
    \begin{minipage}{0.50\textwidth}
        To calculate the horizontal position, the kinematic differential
        equations are needed:
        \begin{align}
            \dot{n} &= u\cos\psi -v\sin\psi \\
            \dot{e} &= u\sin\psi + v\cos\psi
        \end{align}
        For small angles the following approximation can be used:
        \begin{align}
            \dot{n} &= u -v\delta_\psi \\
            \dot{e} &= u\delta_\psi + v 
        \end{align}
    \end{minipage}
};
\node[fancytitle, right=10pt] at (box.north west) {Approximation};
\node[fancytitle, rounded corners] at (box.east) {$\clubsuit$};
\end{tikzpicture}

\tikzstyle{mybox} = [draw=blue, fill=green!20, very thick,
    rectangle, rounded corners, inner sep=10pt, inner ysep=20pt]
\tikzstyle{fancytitle} =[fill=blue, text=white]

\begin{tikzpicture}[transform shape, rotate=10, baseline=-3.5cm]
\node [mybox] (box) {
    \begin{minipage}[t!]{0.5\textwidth}
        Fermat's Last Theorem states that
        \begin{align}
            x^n + y^n = z^n
        \end{align}
        has no non-zero integer solutions for $x$, $y$ and $z$ when $n > 2$.
    \end{minipage}
    };

\node[fancytitle] at (box.north) {Fermat's Last Theorem};
\end{tikzpicture}
\end{document}
```