---
layout: main
title: CHUNHENG JIANG
section: Home
---

<!--
<img class='inset right' src='/images/seal.png' title='Chunheng Jiang' width='50px' />
-->

I'm Chunheng Jiang (蔣春恒), a Ph.D student in Computer Science in Rensselaer Polytechnic Institute (RPI), Troy, New York. I am interested in (1) developing simple but efficient algorithms to solve data related problems, esp. ranking problems, and (2) complex network theories in transportation and biomedical systems. I have compiled a little book named <i>[Searching and Ranking](/blog/book){:target="_blank"}</i>, which covers many important algorithms (some may contain detailed mathematical derivations) in Information Retrieval, Machine Learning (e.g. ensemble learning, learning to rank), Mathematical Optimization, Social Choice, Decision Making and so on. If you can read Chinese, you may find it interesting and very useful. Please drop me an [email](mailto:{{ site.gmail }}) or give your comments on the [blog posts](/blog).

<div class="section" markdown="1">
Blog
=====
A technical [blog](/blog) on data science, including machine learning (e.g. deep learning and reinforcement learning), information retrieval, artificial intelligence, some maths and stats. You can find my latest posts:
{% for post in site.categories.blog limit:5 %}
<ul class="compact recent">
<li>
	<a href="{{ post.url }}" title="{{ post.excerpt }}">{{ post.title }}</a>
	<span class="date">{{ post.date | date_to_string }}</span> 
</li>
</ul>
{% endfor %}
</div>

<div class="section" markdown="1">
Search
==============================================
<form name="search">
    <select name="engine" style="background-color: #F5F5F5;"></select>
    <input type="text" name="query" onkeypress="return checkKey()"/>
    <input type="button" value="Go" onClick="return startSearch()"/>
</form>
</div>

<div class="section" markdown="1">
Hobbies
==============================================
- Sports: Mountain Biking, Pingpong
- Music & Movies: The Matrix, Mountain Patrol, Maksim's Exodus, The Phantom of the Opera, Seven Samurai, Nausicaa of the Valley of the Wind
</div>

<div class="section" markdown="1">
Reading
==============================================
<div id="wfaee986d526659387425ea3c62ae4bd1"></div><script type="text/javascript" charset="UTF-8" src="https://www.librarything.com/widget_get.php?userid=horsehour&theID=wfaee986d526659387425ea3c62ae4bd1"></script><noscript><a href="http://www.librarything.com/profile/horsehour">My Library</a> at <a href="http://www.librarything.com">LibraryThing</a></noscript>
</div>

