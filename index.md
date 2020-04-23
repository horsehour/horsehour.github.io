---
layout: main
title: CHUNHENG JIANG
section: Home
---

<!--
<img class='inset right' src='/images/seal.png' title='Chunheng Jiang' width='50px' />
-->

I'm Chunheng Jiang (蔣春恒), a computer science PhD student of
Rensselaer Polytechnic Institute (RPI) in Troy NY. 
I am now working on inference from incomplete networks 
using sampling and optimization techniques.
I am a strongly self-motivated learner, 
and fascinated in developing simple but efficient algorithms for real problems.

I have compiled a little book named 
<i>[Searching and Ranking](/blog/book){:target="_blank"}</i> based on my learning experience on 
General Artificial Intelligence (GAI). 
It is a cheat sheet, covering some classical algorithms (detailed mathematical derivations may be included as well), 
in information retrieval, machine learning (e.g. ensemble learning, learning to rank), 
mathematical optimization and social choice. 
<!--
If you can read Chinese, it can be very useful for you to understand related research paper. 
-->
Please [let me know](mailto:{{ site.gmail }}) if you find it useful. 

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
<div id="wf9bea313bdf7bde6e5de83d63c44608c"></div><script type="text/javascript" charset="UTF-8" src="https://www.librarything.com/widget_get.php?userid=horsehour&theID=wf9bea313bdf7bde6e5de83d63c44608c"></script><noscript><a href="http://www.librarything.com/profile/horsehour">My Library</a> at <a href="http://www.librarything.com">LibraryThing</a></noscript>
</div>

