---
layout: main
title: Resume
section: resume
---

I am now doing my PhD on network science & artificial intelligence with Dr. [Jianxi Gao][Gao]{:target="_blank"} in RPI. 
Contact me if you are interested in my work.

<!--
I plan to go to industry after graduation.  
-->

[Download CV](/files/cv.pdf)

<div class="section" markdown="1">
Contact
======= 
_E-mail_: [{{ site.gmail }}](mailto:{{ site.gmail }})  
_Website_: [{{ site.horsehour }}]({{ site.horsehour }}){:target="_blank"}  
_GitHub_: [{{ site.github }}]({{ site.github }}){:target="_blank"}  
Lally 08, 110 8th St. Troy NY, 12180, USA
</div>

<div class="section" markdown="1">
Education
============
_2016.09 - now_: <b>Ph.D</b>, Computer Science, [Rensselaer Polytechnic Institute][RPI]{:target="_blank"}  
_2016.09 - 2018.06_: <b>M.Sc</b>, Computer Science, [Rensselaer Polytechnic Institute][RPI]{:target="_blank"}  
_2011.09 - 2014.07_: <b>M.Sc</b>, Applied Mathematics, [Southwest Jiaotong University][swjtu]{:target="_blank"}  
<!--
2005.09 - 2009.07: ***B.Sc***, Information and Computing Science, [Tianjin University of Commerce][tjcu]{:target="_blank"}  
-->
</div>

<div class="section" markdown="1">
Publications
============
Chunheng Jiang, Jianxi Gao, and Malik Magdon-Ismail. 
<b>[Inferring Degrees from Incomplete Networks and Nonlinear Dynamics][estks]{:target="_blank"}</b>, 
in Proceedings of the 29th International Joint Conference on Artificial Intelligence (IJCAI 2020), 2020. 
Acceptance Rate: 12.6%.

Chunheng Jiang, Jianxi Gao, and Malik Magdon-Ismail. 
<b>[True Nonlinear Dynamics from Incomplete Networks][estxs]{:target="_blank"}</b>, 
in Proceedings of 34th AAAI Conference on Artificial Intelligence (AAAI 2020), 2020. Oral. Acceptance Rate: 20.6%.

Jun Wang, Sujoy Sikdar, Tyler Shepherd, Zhibing Zhao, Chunheng Jiang and Lirong Xia. 
<b>[Practical Algorithms for STV and Ranked Pairs with Parallel Universes Tiebreaking][put]{:target="_blank"}</b>, 
in Proceedings of 33rd AAAI Conference on Artificial Intelligence (AAAI 2019), 2019.

Chunheng Jiang, Sujoy Sikdar, Jun Wang, Lirong Xia, and Zhibing Zhao. 
<b>[Practical Algorithms for Computing STV and Other Multi-Round Voting Rules][stv]{:target="_blank"}</b>, 
in EXPLORE-2017: The 4th Workshop on Exploring Beyond the Worst Case in Computational Social Choice, 2017.

Chunheng Jiang and Wenbin Lin. 
<b>[DEARank: A Data-envelopment-analysis-based Ranking Method][dearank]{:target="_blank"}</b>. 
Machine Learning, 2015, 101: 415 -- 435.  

Zhongyou Pei, Chunheng Jiang, and Wenbin Lin. 
<b>[Random Walks on the Bipartite Graph for Personalized Recommendation][randwalk]{:target="_blank"}</b>,
in 2013 International Conference on Computer Science and Artificial Intelligence (ICCSAI 2013), 
Yuetong Lin and Gabriel Alungbe, Eds., Chengdu, China, 2013, 97 -- 102.
</div>

<div class="section" markdown="1">
Research Interests
============
Complex Networks and Artificial Intelligence
- Topology and Dynamics Inference
- Link Prediction
- Optimization 
- Deep Learning / Reinforcement Learning
- Graph Neural Network
- Learning to Rank / Rank Aggregation
- Information Retrieval / Recommendation

</div>

<div class="section" markdown="1">
Work Experience
===============
_2014.07 - 2016.03_: *Software Developer*, Antusuoji Network Technology Co., Ltd., Chengdu, CHINA

<!--
- Collect web information (commercial products, job positions)
- Build an information retrieval system based on Solr

_2009.11 - 2010.12_: Data Analyst, Bohai Securities Co., Ltd., Tianjin, CHINA
- Process the raw data in well organized structure
- Create model to analysis the financial data with statistical techniques
-->
</div>

<div class="section" markdown="1">
Projects 
==========
_Fall 2018 -_ : <b>Inferring True Dynamics from Incomplete Networks</b>, RPI
<img src="{{ site.images }}/python.png" style="width: 15px;"/>
- Predict steady-states of vertices from incomplete networks (e.g., ecology, epidemic, regulatory)
- Infer vertices’ degrees and missing links from partially observed networks
- Recovery true nonlinear dynamics with incomplete information (e.g., topology and steady-states)

_Summer 2018 -_ : <b>Online Early Warning Signals of Highway Traffic Breakdown</b>, RPI
<img src="{{ site.images }}/python.png" style="width: 15px;"/> 
- Preprocess traffic time series data (denoising, smoothing)
- Design and compute early warning signals of traffic congestion
- Machine learning based traffic prediction

_Spring - Summer 2017_ : <b>Multiround Winner Determination</b>, RPI 
<img src="{{ site.images }}/java.jpg" style="width: 40px;"/>
<img src="{{ site.images }}/python.png" style="width: 15px;"/>
- Devise heuristic strategies (sample, cache, prune) to search all tied winners
- Train reinforcement learning models to simulate the voting procedure
- Improve the baseline DFS in terms of running time & number of nodes

_Fall 2016_ : <b>Matching Algorithm for <i>OKCollege</i> (now [<i>CollegeAI</i>][collegeai]{:target="_blank"})</b>  <img src="{{ site.images }}/java.jpg" style="width: 40px;"/><img src="{{ site.images }}/python.png" style="width: 15px;"/>
- Design a bilinear model to match students and colleges's preferences
- Optimize a ranking-related loss function with SGD to train the model

_Summer 2016_ : <b>Learning to Vote Fairly</b>, RPI <img src="{{ site.images }}/java.jpg" style="width: 40px;"/>
- Learn the fairness criteria in voting rules with machine learning approaches
- Apply data augmentation to enhance the learning performance

_Summer 2013_ : <b>Automating Data Collection</b> <img src="{{ site.images }}/java.jpg" style="width: 40px;"/>
- Crawl over 10,000 professors' profiles from top Chinese universities
- Semi-automate the inefficient and expensive manual collection procedure
- Align the collected data and output with homogeneous content

_Summer 2012_ : <b>Meta Extraction from PDF Papers</b> <img src="{{ site.images }}/java.jpg" style="width: 40px;"/><img src="{{ site.images }}/c++.png" style="width: 20px;"/>
- Crawl 5,000 research papers in PDF and related meta data from [arXiv](https://arxiv.org/){:target="_blank"}
- Convert PDF documents to XML with [pdf2xml](https://sourceforge.net/projects/pdf2xml/){:target="_blank"} and create training set
- Recognize the meta information blocks (titles, authors, keywords, abstract, and references) with handcrafted rules and machine learning techniques
</div>

<div class="section" markdown="1">
Teaching 
==========  
_Spring 2017/18_ : Assistant, [CSCI 4150: Introduction to Artificial Intelligence](http://www.cs.rpi.edu/~xial/){:target="_blank"}, RPI 
_Fall 2016_ : Assistant, [CSCI 4100/6100: Machine Learning from Data](http://www.cs.rpi.edu/~magdon/){:target="_blank"}, RPI 
</div>

<div class="section" markdown="1">
Programming
==========  
Python, Java, C/C++, Matlab, Mathematical, Lingo  
Eclipse, PyCharm, Git, LaTeX, Markdown, Jupyter Notebook, vim
</div>

<div class="section" markdown="1">
[Courses](/resume/courses/)
==========  
A complete [list of courses](/resume/courses/) I have taken on-campus or online
</div>

[gao]: http://gaojianxi.com/
[rpi]:  https://www.rpi.edu/
[swjtu]:http://www.swjtu.edu.cn/
[tjcu]: http://www.tjcu.edu.cn/

[collegeai]: https://www.collegeai.com/
[dearank]: https://link.springer.com/article/10.1007/s10994-014-5442-3
[randwalk]: https://www.researchgate.net/publication/278670661_Random_Walks_on_the_Bipartite-Graph_for_Personalized_Recommendation
[stv]: http://www.explore-2017.preflib.org/wp-content/uploads/2017/04/paper_16.pdf
[put]: https://arxiv.org/pdf/1805.06992.pdf
[estxs]: https://arxiv.org/pdf/2001.06722.pdf 
[estks]: https://arxiv.org/pdf/2004.10546.pdf

