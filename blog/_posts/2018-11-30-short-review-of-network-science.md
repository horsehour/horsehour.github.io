---
layout: blog-post
categories: Research
tags: [Network Science, Review, Random Network, Scale-free, Power-law, ER Network, Degree Distribution]
title: A Short Review of Network Science
---

Network science, has its root in graph theory, is evolving to be a multidisciplinary research field. 
It studies the network representations of physical, biological, and man-made systems, 
and designs models to reproduce and predict them. 
One key characteristic of a complex network is its degree distribution $P_k$, 
i.e, the probability that a randomly selected node has $k$ links. 
Based on degree distribution, many complex networks in real world, 
including communication networks, transportation networks, Internet, social networks and biological networks are 
characterized by a power-law degree distribution $P_k=Ck^{-\gamma}$, 
where the scaling exponent $\gamma$ is typically in the range $2<\gamma<3$. 
These networks are scale-free, greatly vary in size and structural complexity, 
but similar in that most nodes have just a few connections, and some have a vast amount of links. 
For instance, in the cellular metabolic network, 
most molecules participate in just one or two biochemical reactions, 
and some molecules, such as water and adenosine triphosphate are discovered in most reactions. 
It forms a striking contrast to random networks that 
follow a bell-shaped Poisson degree distribution $P_k=e^{-\langle k\rangle} \langle k\rangle^{-k}/k!$, 
where most nodes have approximately the same number of links. 

An interesting research topic in network science is how to design a network model, 
such that the generated networks are ensured to have some desired properties, e.g. in topological structure, 
following a particular degree distribution, or in dynamical evolving, 
being robust to random failures and targeted attacks. 

There are many network models for different complex systems. 
The most well-known is Erdős–Rényi model (ER) model with 
two equivalent definitions $G(N,L)$ and $G(N,p)$ of a random network. 
The $G(N,L)$ model fixes the total number of links, and connects $N$ nodes with $L$ randomly selected links; 
the $G(N,p)$ model fixes the probability $p$, wires each pair of $N$ labeled nodes with probability $p$. 
Both produces random networks with a Poisson distribution and the average degree $\langle k\rangle \approx pN$, 
where $p$ is equivalent to the percentage that $L$ links account for in all pairs of nodes, e.g. $p=2L/N(N-1)$.

The scale-free networks are pervasive. 
In order to produce scale-free networks, 
Barabási-Albert (BA) model is proposed in 1999 It includes two simple mechanisms: growth and preferential attachment, 
where the growth mechanism adds a new node with $m$ edges to existing nodes at each time step, 
the preferential attachment mechanism specifies the linking rule and attaches links between the newly added nodes and 
existing ones with probability $\Pi(k_i)=k_i/\sum_j k_j$, where the higher degree nodes are favored. 
However, BA model fails to explain how latecomers stand out, 
e.g. Google in search engine market and Facebook in social media. 
To fix the issue, Bianconi-Barabási model introduces a fitness parameter $\eta_i$ for each node, 
and considers both the fitness and the degree of existing nodes to 
build connections for new nodes with probability $\Pi(k_i)=k_i\eta_i/\sum_j k_j\eta_j$. 
Besides, there are many other variants for the scale-free networks, 
e.g. (1) adding second-order preferential attachment to the wiring probability, 
and (2) connecting the newly added node with the $m$ neighbors of a randomly picked existing nodes.

The real world complex networks have diverse degree distributions, 
including but not limited to a Poisson or power-law distribution. 
The nuclear reaction network is such an exception, showing a bimodal degree distribution. 
The degree distribution has been observed in other real-life cases, 
e.g. the mobile ad hoc networks on the university campus 
bimodal degree distribution with the modes a factor of 10 apart, 
the degree distribution of the gel network changes from unimodal to bimodal as temperature increases, 
the `stable-yet-switchable' behavior in neural networks is found to be most stable in bimodal networks, 
and the rich-club networks are also bimodal with high degree hub nodes and low degree peripheral nodes, 
is identified as the optimal network for smart grids for which the synchronization cost is also minimum. 
Many works have extensively studied it for the analysis of network robustness, 
but few have been done on the network model for bimodal degree distribution.
 
To study the properties of networks with bimodal degree distribution, 
the common reference models, including the configuration model, 
the hidden parameter model and the degree-preserving randomization can be used to generate networks, 
and compared with the proposed network model that brings the spatial information of nodes into consideration.


<img src="/assets/images/pdf.png" style="width: 25px;"/>
[PDF](/files/netsci.pdf){:target="_blank"}


