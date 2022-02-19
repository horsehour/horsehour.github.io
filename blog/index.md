---
layout: main 
title: Blog
section: Home
keywords: Machine Learning, Artifical Intelligence, Statistics, Blog, Research
---

The site horsehour.com  was registered on GoDaddy in March 2013, 
but went online until May 2017.
To record some of my random thoughts on research and programming,
this Jekyll-powered, Github page hosted blog was setup.
I prefer taking notes with $\rm \LaTeX$,
because of its excellent rendering quality of complex mathematical equations. 
Therefore, the posts are written in a hybrid of Markdown (for text) and $\rm \LaTeX$ (for equations) and 
converted to HTML using Pandoc. 
Sometimes, [pdf2htmlEX][pdf2htmlex]{:target="_blank"} is also used to convert PDFs to 
HTML documents with the original layouts of the PDF docuemnts well-preserved.

Recent Posts [<a href="arxiv.html">Complete List</a>]
------------

{% for post in site.categories.blog limit:5 %}
<div class="section list">
  <h1>{{ post.date | date_to_string }}</h1>
  <p class="line">
  <a class="title" href="{{ post.url }}">{{ post.title }}</a>
<!-- 
<a class="comments" href="{{ post.url }}#disqus_thread">View Comments</a>
-->
  </p>
  <p class="excerpt">{{ post.excerpt }}</p>
</div>
{% endfor %}


[horsehour]: http://www.horsehour.com/
[pdf2htmlex]: https://github.com/coolwanglu/pdf2htmlEX
