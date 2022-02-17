---
layout: main
title: Resume
section: resume
---

I am now doing my PhD on network science & artificial intelligence with Dr. [Jianxi Gao][Gao]{:target="_blank"} in RPI. 
Contact me if you are interested in my work.


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
_2016.08 - now_: <b>Ph.D.</b>, Computer Science, [Rensselaer Polytechnic Institute][RPI]{:target="_blank"}  
_2016.08 - 2018.05_: <b>M.S.</b>, Computer Science, [Rensselaer Polytechnic Institute][RPI]{:target="_blank"}  
_2011.09 - 2014.07_: <b>M.S.</b>, Applied Mathematics, [Southwest Jiaotong University][swjtu]{:target="_blank"}  
<!--
2005.09 - 2009.07: ***B.Sc***, Information and Computing Science, [Tianjin University of Commerce][tjcu]{:target="_blank"}  
-->
</div>

<div class="section" markdown="1">
Publications
============
Chunheng Jiang, Tejaswini Pedapati, Pin-Yu Chen, Yizhou Sun, Jianxi Gao. 
<b>[Neural Capacitance: A New Perspective of Neural
Network Selection via Edge Dynamics][capacitance]{:target="_blank"}</b>,
arXiv preprint arXiv:2201.04194, (2022).

Chunheng Jiang, Boleslaw Szymanski, Jie Lian, Shlomo Havlin, and Jianxi Gao. 
<b>[Nuclear Reaction Network Unveils Novel Reaction Patterns Based on Stellar Energies][nucnet]{:target="_blank"}</b>,
New Journal of Physics, (2021).

Xiang Niu, Chunheng Jiang, Jianxi Gao, Gyorgy Korniss, and Boleslaw Szymanski.
<b>[From Data to Complex Network Control of Airline Flight Delays][flightnet]{:target="_blank"}</b>, 
Scientific Reports, 11, 18715, (2021).

Xiang Niu, Christopher Brissette, Chunheng Jiang, Jianxi Gao, Gyorgy Korniss and Boleslaw K. Szymanski.
<b>[Heuristic Assessment of the Economic Effects of Pandemic Control][pandemic]{:target="_blank"}</b>,
Scientific Reports, 11, 7645 (2021).

Chunheng Jiang, Jianxi Gao, and Malik Magdon-Ismail. 
<b>[Inferring Degrees from Incomplete Networks and Nonlinear Dynamics][estks]{:target="_blank"}</b>, 
in Proceedings of the 29th International Joint Conference on Artificial Intelligence (IJCAI 2020), 2020. 
Oral. Acceptance Rate: 12.6%. (<b>[slides][ijcai20slides]{:target="_blank"})

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
- Learning to Rank / Rank Aggregation
- Information Retrieval / Recommendation
- Visualization
</div>


<div class="section" markdown="1">
Work Experience
===============
_2020.06 - 2020.08_: *Summer Research Intern*, IBM, Yorktown Heights, NY, USA
_2014.07 - 2016.03_: *Software Engineer*, Antusuoji Network Technology Co., Ltd., Chengdu, CHINA

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
_Aug 2020 -_ : <b>Dynamical System View of Neural Network Training</b>, RPI-IBM AI Research Collaboration (AIRC), Research Extern
<img src="{{ site.images }}/python.png" style="width: 15px;"/>
- Built a novel graph representation for various neural architectures (e.g., ResNet, DenseNet, MobileNet, VGG, etc.)
- Studied the topological properties (e.g., resilience, shortest path length) of neural architectures for robust models
- Derived approximated training dynamics to speed-up neural network training and neural architecture search (NAS)
- Achieved 10-70% relative improvement over the best baseline w.r.t ranking of neural networks
- <b>Techniques</b>: SGD, transfer learning, neural architecture search/design, learning curve prediction

_Aug 2018 -_May 2020_ : <b>Inferring True Dynamics from Incomplete Networks</b>, RPI, Research Assistant
<img src="{{ site.images }}/python.png" style="width: 15px;"/>
- Developed a mean-field approach to infer nodes’ characteristics from incomplete networks
- Recovered true nonlinear dynamics with incomplete topology and equilibrium state information
- Designed a heuristic optimization algorithm based on our topology inference approach to solve K-SUM problem
- Solved large-scale nonlinear dynamical systems in parallel (10x speedup w/ MPI/SLURM)
- <b>Techniques</b>: graph sampling, mean-field, dynamical systems, optimization, parallel computing

_May 2018 -_Aug 2018_ : <b>Online Early Warning Signals of Highway Traffic Breakdown</b>, RPI, Research Assistant
<img src="{{ site.images }}/python.png" style="width: 15px;"/> 
- Preprocessed traffic time series data (denoising, smoothing)
- Designed and computed early warning signals of traffic congestion
- Trained a machine learning based composite early warning signal indicator
- Issued warning for upcoming traffic congestion
- <b>Techniques</b>: denoising, smoothing, Gaussian density estimation, machine learning

_May - Aug 2017_ : <b>Multiround Winner Determination</b>, RPI, Research Assistant 
<img src="{{ site.images }}/java.jpg" style="width: 40px;"/>
<img src="{{ site.images }}/python.png" style="width: 15px;"/>
- Devised heuristic strategies (sampling, caching, pruning) to efficiently identify all tied winners in voting
- Developed reinforcement learning models to simulate voting procedures and improve the search efficiency
- Reduced run time by 50-80% relative to the baseline strategies
- <b>Techniques</b>: sampling, pruning, DFS, reinforcement learning, optimization, voting

_Sept - Dec 2016_ : <b>Matching Algorithm for <i>OKCollege</i> (now [<i>CollegeAI</i>][collegeai]{:target="_blank"})</b>, 
RPI, Research Assistant
<img src="{{ site.images }}/java.jpg" style="width: 40px;"/><img src="{{ site.images }}/python.png" style="width: 15px;"/>
- Designed a bilinear model to match students and colleges' preferences
- Trained a pairwise ranking model with synthesized dataset
- <b>Techniques</b>: machine learning, optimization

_May - Aug 2016_ : <b>Learning to Vote Fairly</b>, RPI, Research Assistant
<img src="{{ site.images }}/java.jpg" style="width: 40px;"/>
- Learned the fairness criteria in voting rules with machine learning approaches
- Introduced data augmentation to enhance the learning performance
- <b>Techniques</b>: machine learning, optimization, data augmentation, neural network

<!--
_Summer 2013_ : <b>Automating Data Collection</b> <img src="{{ site.images }}/java.jpg" style="width: 40px;"/>
- Crawl over 10,000 professors' profiles from top Chinese universities
- Semi-automate the inefficient and expensive manual collection procedure
- Align the collected data and output with homogeneous content

_Summer 2012_ : <b>Meta Extraction from PDF Papers</b> <img src="{{ site.images }}/java.jpg" style="width: 40px;"/><img src="{{ site.images }}/c++.png" style="width: 20px;"/>
- Crawl 5,000 research papers in PDF and related meta data from [arXiv](https://arxiv.org/){:target="_blank"}
- Convert PDF documents to XML with [pdf2xml](https://sourceforge.net/projects/pdf2xml/){:target="_blank"} and create training set
- Recognize the meta information blocks (titles, authors, keywords, abstract, and references) with handcrafted rules and machine learning techniques
-->

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
[ijcai20slides]: /files/ijcai20-estks-slides.pdf
[pandemic]: https://www.nature.com/articles/s41598-021-85432-x 
[flightnet]: https://www.nature.com/articles/s41598-021-98112-7
[nucnet]: https://iopscience.iop.org/article/10.1088/1367-2630/ac1a3d
[capacitance]: https://arxiv.org/abs/2201.04194v2
