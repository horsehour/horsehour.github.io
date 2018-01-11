---
layout: blog
title: Blog
section: Home
keywords: Machine Learning, Artifical Intelligence, Statistics, Blog, Research
---

I bought [horsehour.com][horsehour]{:target="_blank"} in March 2013, but did not use it until May 2017.
To record my random thoughts on research and programming, I build this Jekyll blog hosted on GitHub.
I prefer to take notes with $\rm \LaTeX $, which has excellent supports for mathematical equations and algorithmatic procedures.
Therefore, the posts are written in a hybrid of Markdown (for text) and $\rm \LaTeX $(for equations) and converted into HTML by
Pandoc. Sometimes, [pdf2htmlEX][pdf2htmlex]{:target="_blank"} is also used to convert PDFs to HTML documents such
that the original structures of PDFs are well kept.

Recent Posts [<a href="arxiv.html">Complete Archive</a>]
------------

{% for post in site.categories.blog limit:5 %}
<div class="section list">
  <h1>{{ post.date | date_to_string }}</h1>
  <p class="line">
  <a class="title" href="{{ post.url }}">{{ post.title }}</a>
  <a class="comments" href="{{ post.url }}#disqus_thread">View Comments</a>
  </p>
  <p class="excerpt">{{ post.excerpt }}</p>
</div>
{% endfor %}

Licence
-------
All content within this site is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/3.0/">
Creative Commons Attribution-Noncommercial-Share Alike 3.0 Unported License</a>, unless otherwise specified.

[horsehour]: http://www.horsehour.com/
[pdf2htmlex]: https://github.com/coolwanglu/pdf2htmlEX
