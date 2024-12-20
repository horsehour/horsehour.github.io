---
layout: main
section: Album 
title: TikZ - Weighted Directed Graph  
---

```latex
\documentclass{standalone}
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
\pgfplotsset{compat=1.6} 

\begin{document}

\begin{tikzpicture}[>=stealth',shorten >=1pt,node distance=3cm,on grid,initial/.style    ={}]
  \node[state]          (P)                        {$P$};
  \node[state]          (B) [above right =of P]    {$B$};
  \node[state]          (M) [below right =of P]    {$M$};
  \node[state]          (D) [above right =of B]    {$D$};
  \node[state]          (C) [below right =of B]    {$C$};
  \node[state]          (L) [below right =of C]    {$L$};
\tikzset{mystyle/.style={->,double=orange}} 
\tikzset{every node/.style={fill=white}} 
\path (C)     edge [mystyle]    node   {$3$} (B) 
      (D)     edge [mystyle]    node   {$10$} (B) 
      (L)     edge [mystyle]    node   {$10$} (M) 
      (B)     edge [mystyle]    node   {$10$} (P);
\tikzset{mystyle/.style={<->,double=orange}}   
\path (P)     edge [mystyle]   node   {$4$} (M) 
      (C)     edge [mystyle]   node   {$9$} (M) 
      (C)     edge [mystyle]   node   {$4$} (D) 
      (B)     edge [mystyle]   node   {$5$} (M);
\tikzset{mystyle/.style={<->,relative=false,in=0,out=60,double=orange}}
\path (L)     edge [mystyle]   node   {$10$} (D); 
\end{tikzpicture}
\end{document}
```
