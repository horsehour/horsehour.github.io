---
layout: main 
title: Book 
section: book 
keywords: search, ranking, information retrieval, stats and math
---

I am interested in developing simple yet effective algorithms for real problems. 
I have taken a collection of notes and compiled them into a book named 
<i>[Searching and Ranking][searchrank]{:target="_blank"}</i> 
based on my learning experience on Artificial General Intelligence (AGI). 
It covers some classical algorithms (detailed mathematical derivations may be included as well) in 
information retrieval, machine learning, mathematical optimization, statistics and decision making. 
Please [let me know](mailto:{{ site.gmail }}) if you find it useful.
 
<img src="/assets/images/git.png" style="width: 30px;"/>
[GitHub](https://github.com/horsehour/searchrank){:target="_blank"}
<img src="/assets/images/pdf.png" style="width: 30px;"/>
[PDF][searchrank]{:target="_blank"}


这篇文档是一份个人笔记，源于我在读研和工作期间([2011 -- 2016年](/resume))阅读文献时的一些总结与思考。文档的主线是排名问题，涵盖的主题五花八门，我也曾多次删减，但是囿于水平，必然存在各种谬误。如您觉得文档有价值或有兴趣参与改进，请和我[联系](mailto:jiangchunheng@gmail.com)。我将文档分享出来就是希望它可以成为一个开源项目，使更多的人能够参与其中，丰富和完善它，帮助到处于不同学习阶段的朋友。原始文档是使用$\rm \LaTeX $编辑，为了维持原始文档的格式，现在使用[pdf2htmlEX](https://github.com/coolwanglu/pdf2htmlEX){:target="_blank"}将PDF转化成HTML，感谢pdf2htmlEX的开发人员。由于pdf2htmlEX的转化过程会产生大量冗余的格式信息，不利于搜索引擎建立索引，另外对独立页面的转换会产生索引缺失，无疑增加了维护的难度。一个备选方案是使用[Pandoc](https://pandoc.org/getting-started.html){:target="_blank"}直接编译$\rm \TeX$源码生成HTML。此外，文档内容参考了网络上的一些优秀博文，如果您发现文中有内容缺少引用，请您予以指出以方便更正或修改。

摘要 - ABSTRCT
---------
排名存在于人类社会生活的各个角落，也是不同学科领域研究人员籍以解决各类实际问题的一个重要工具，排名问题从古至今始终都是人类发展历程中一个不可或缺的认知领域。现代人已经习惯于在虚拟的网络世界徜徉，通过敲击键盘、点击鼠标、分享互动构筑一个崭新的数字时代。当海量数据将信息贫乏的年代埋葬之时，也淹没了人们惯常的汲取知识的道路，长于信息检索和排名的搜索引擎已然成为现代人们检索查询信息的一个主要工具。它通过分析网络链接结构、文本语义、用户交互行为，建立一套成熟的网页排名系统，根据用户提交的查询词，检索庞大的数据存储系统，根据相关程度对网页进行排名和展示。民主社会的人们通过投票选举制度评选潜在候选人，排名系统的公平性决定了民主决策的效力，确保其在维护多数人利益的方向上不偏不倚。社会选择的标准对于不同国家存在迥然各异的解读，也就造就全球各国存在明显差异性的选举制度。

排名的形式出奇地简单，其表现能力却惊人地丰富多彩，并显性地或隐形地影响人们的决策行为。比如，世界经济排名靠前的国家，其经济政策的制定就会对世界经济的走向产生直接影响，它可以部分解释国际投资对其经济政策变化的紧追不舍。科学文献引用量是衡量学术期刊等级、研究学者学术贡献大小的重要指标，甚至成为个人就业升迁的主要制约。一个稳居体育运动排行榜首的明星运动员，其商业价值自然可能明显高于排名靠后的其他运动员。高校排名是学生择校时的一个重要参考指标，也间接地为名校申请的竞争激烈贡献了一部分力量。兹文档辑总信息检索、机器学习、社会选择、推荐系统、统计学习、多目标决策等领域业界公认的经典排名算法，从数学和统计的角度解释其内在机理，构建一个跨领域的排名系统。



目录 - TABLE OF CONTENT
----------
[<img src="/assets/images/toc/dmml.png" height="300"/>](./chaps/dmml.html){:target="_blank"}
[<img src="/assets/images/toc/ir.png" height="220"/>](./chaps/ir.html){:target="_blank"}
[<img src="/assets/images/toc/rank.png" height="180"/>](./chaps/rank.html){:target="_blank"}
[<img src="/assets/images/toc/math.png" height="100"/>](./chaps/math.html){:target="_blank"}
[<img src="/assets/images/toc/metric.png" height="200"/>](./chaps/metric.html){:target="_blank"}
[<img src="/assets/images/toc/mcda.png" height="200"/>](./chaps/mcda.html){:target="_blank"}
[<img src="/assets/images/toc/l2r.png" height="120"/>](./chaps/l2r.html){:target="_blank"}

[searchrank]: /files/searchrank.pdf
