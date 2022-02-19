---
layout: blog-post
categories: Research
tags: [Reinforcement Learning, voting]
title: Reinforcement Learning based Voting Winner Determination Procedure
---

All important signals, including the current and visited states, the depth, the size of alternatives never been a winner, the number of winners, the percentage of winners and non-winners in the state, the predicted probability based on other features, are included in a new model that learned from the experience (episodes from root to leaf node). By learning such kind of model, we can get rid of the cache checking and pruning component, we choose the path according to the prediction results from this enhanced function to reduce the number of nodes to extend.

<img src="/assets/images/pdf.png" style="width: 25px;"/>
[PDF](/files/reinforce.pdf){:target="_blank"}
<img src="/assets/images/vote.png" style="width: 25px;"/>
[Visualization](/code/projects/vote/index.html){:target="_blank"}

The visualization of the visited path helps to guide us to design a better heuristic algorithm. Based upon some observation, we can improve the definition of our current priority function.

We model the multi-round STV elimination approach as a reinforcement learning problem, where the states are the node (or subset of the alternatives), the action set comes from the eliminations (legal one should follows the rule that one alternative that receives the lowest plurality score will be eliminated), and the reward should be modeled based on the minimum number of nodes to extend along the current branch, and possible early discovery of as many winners as possible, and running time and so on. If a path contains a lot of successful cache checking, it should be punished; if the path contains multiple new winners, it should be assigned more rewards. Even the path is critical, we say that it contains a single winner, and the winner is hard to search, because from all other paths we get different winners from this winner.

When the winner set is empty, there is no need to compute the priorities for states. With a nonempty winner set, we could check whether the predicted winner(s) has/have been elected, if not, its priority will be higher than those have been elected. Once the start state has been fixed, then searching the path with its children states the high priority until a winner is found, or the predicted winner(s) is/are different from the prediction of its parent state.

Visited state should also been fully exploited, such that those nodes with such same states, we should record their corresponding winner(s) when it’s available.
In order to apply Reinforcement Learning (RL) or Inverse Reinforcement Learning (IRL) techniques to STV, the meanings of states, actions and rewards should be clarified.


