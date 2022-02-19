---
layout: blog-post
title: "Solution to render math equations in Markdown"
description: ""
category: Programming
tags: [Math, LaTeX, Markdown, MathJax, Pandoc]
---

Step-by-step to render math equations in Markdown from $\rm\TeX$ source.

<!--# Content
* auto-gen TOC:
{:toc}
-->

Procedure
------------
To produce a post with lots of math formulas, I will take three steps:

- Write the post with $\rm\LaTeX$, we have the $\rm \TeX$ sources, and also can get a PDF file.
- Convert $\rm \TeX$ into Markdown with Pandoc:
```bash
pandoc mat.tex -s --mathjax -o mat.md
```
- Add or replace the front matter block (e.g. layout, title, category and tags) for the newly generated Markdown document.
<br/>

Caveats  
------------
The rendering of math equations with MathJax is of high quality. However, $\rm\LaTeX$ contains too many syntax, and it's really hard to translate it into the script supporting both the syntax of Jekyll and MathJax with no mistakes. To be accurate, some mistakes are made by Pandoc. Here, I will list several common problems I encountered and the associated remedies (maybe far from best):

- To render of the *curly brackets*:  <span style="color:darkred">double backslashes before the bracket</span>
- Display math looks a mess: <span style="color:darkred">adding line breakers before & after the formula</span>
- To convert the *algorithmatic* and the *table* environments correctly: <span style="color:darkred">screenshot the algorithms, rebuild the table in Markdown</span>
- Auto-generate references and citations from the provided .bib file: <span style="color:red">pandoc-citeproc library may be helpful, with --bibliogrphy parameter, it always reports exception</span>
