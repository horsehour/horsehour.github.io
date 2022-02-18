---
layout: main
title: CHUNHENG JIANG
section: Home
---

<!--
<img class='inset right' src='/images/seal.png' title='Chunheng Jiang' width='50px' />
-->

I'm Chunheng Jiang (蒋春恒), a computer science PhD candidate of
Rensselaer Polytechnic Institute (RPI) in Troy NY. 
I am now working on inference from incomplete networks 
using sampling and optimization techniques.

I am motivated to develop simple yet effective algorithms for many real problems.
I have taken a collection of notes and compiled them into a book named 
<i>[Searching and Ranking][searchrank]{:target="_blank"}</i>
based on my learning experience on 
Artificial General Intelligence (AGI).
It covers some classical algorithms (detailed mathematical derivations may be included as well) 
in information retrieval, machine learning, 
mathematical optimization, statistics and decision making. 
Please [let me know](mailto:{{ site.gmail }}) if you find it useful. 

<div class="section" markdown="1">
Blog
=====
A technical [blog](/blog) on network science, deep learning, reinforcement learning, information retrieval, 
optimization and data visualization. You can find my latest posts:
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
- <b>Sports</b>: Mountain Biking, Pingpong
- <b>Musics & Movies</b>: The Matrix, Mountain Patrol, Maksim's Exodus, The Phantom of the Opera, Seven Samurai, Nausicaa of the Valley of the Wind
</div>

<div class="section" markdown="1">
Reading
==============================================
<div id="w0789d8409abbeacae8fbd27aa551582a"></div><script type="text/javascript" charset="UTF-8" src="https://www.librarything.com/widget_get.php?userid=horsehour&theID=w0789d8409abbeacae8fbd27aa551582a"></script><noscript><a href="http://www.librarything.com/profile/horsehour">My Library</a> at <a href="http://www.librarything.com">LibraryThing</a></noscript>

<!--
<div id="wf9bea313bdf7bde6e5de83d63c44608c"></div><script type="text/javascript" charset="UTF-8" src="https://www.librarything.com/widget_get.php?userid=horsehour&theID=wf9bea313bdf7bde6e5de83d63c44608c"></script><noscript><a href="http://www.librarything.com/profile/horsehour">My Library</a> at <a href="http://www.librarything.com">LibraryThing</a></noscript>
</div>
-->

[searchrank]: /files/searchrank.pdf
