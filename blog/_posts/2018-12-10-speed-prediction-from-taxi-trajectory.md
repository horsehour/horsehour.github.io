---
layout: blog-post
categories: Research
tags: [Speed Prediction, Drive Trajectory, Gradient Boost, Random Forest, SVR]
title: Speed Prediction from Taxi Trajectory Data 
---

We are given a trajectory data of DiDi Express and DiDi Premier drivers within the Second Ring Road of Xi'An City. 
All track points are bound to physical roads with resolution about 2-4 seconds. The problem is to predict the average speed of all vehicles running on a road segment (either north- or south-bound) at specific timestamp. 

<img src="/assets/images/git.png" style="width: 25px;"/>
[GitHub](https://github.com/horsehour/transfor19/){:target="_blank"}
<img src="/assets/images/pdf.png" style="width: 25px;"/>
[Report](https://github.com/horsehour/transfor19/blob/master/report.pdf){:target="_blank"}


Data Preprocessing
------------------
<b>Time Alignment.</b> Each day contains millions records, and each record contains five columns: driver id, order id, timestamp, longitude, and latitude. Both drivers and orders are encrypted and anonymized with long strings. To reduce memory usage, we re-encode these strings with integers. It shrinks the file size for at least 50%. All timestamp entries, either in unix convenience or human readable format are aligned relative to 00:00:00, and replaced with time offset, i.e. time difference between current and the reference in terms of seconds.

<img src="/assets/images/roadsection.png" style="width: 800px;"/>

<b>Trajectory Truncation and Speed Estimation.</b>
The road section in question is shown in red rectangular in Fig.1, and we manually locate the ranges of both north-bounding and south-bounding road sections in terms of longitudes and latitudes. We extract all trips that go through south-or-north bounding corridor. Then, from the truncated trajectory, we calculate the vehicle speed with the travel distance calculated from location information and the travel time. The speeds contain noisy data since the travel time of two sequential points is very short, approximately 2-4 seconds. The noise can be ignored in our computation, since the extracted data is sufficiently large. Another aspect is the time slots. The time offsets are split into evenly distributed cells, e.g. north-bounding time slots is a simple sequence $5, 305, 605,\ldots$, while south-bounding time slots are $4, 304, 604, \ldots$, with a gap of 5 minutes (300 seconds). Each estimated speed is allocated to its nearest time slot, e.g. the speed $k=39$ of a truncated trip $a\to b$ during $t_1=505$ and $t_2=508$, since $t_2-t_1\ll 300$, it's nature to assume that the average driving speed at the nearest time slot $t=605$ tends to be close to what at either $t_1$ or $t_2$.

Methods and Results
-------------------
Speed prediction is a classical regression problem. Partially based on real life facts, we assume that the future traffic speed is predictable with the historical data. The dataset is built as follows. Based on the evenly distributed time slots, we extract all speed estimations in each time slot, and the average value is assigned to the corresponding time slot. We apply the same strategy to process the trajectory data of each day. Finally, we create a dataset of size $n\times d$, with $n=284$ instance for north-bounding and $n=279$ for south-bounding traffic flow, and $d=59$ equals to the number of effective days (Note: Oct 30 and Oct 31, 2016 are redundant copies and thrown away). The number of instances is determined by the number of time slots, which are split following the same criterion used in the observation records.

<img src="/assets/images/table_hyparams.png" style="width: 800px;"/>

Three models: gradient boosting, random forest and support vector regressor are trained with the $z-$score normalized dataset, where dataset is split into training and testing set following 80:20 rule. Each has its own pros and cons. The former two are ensemble models, whose advantages include ease to implement and efficient to train, but may be overfitting, which can be counteracted with cross-validation. SVM models are hard to tune and expensive to train. But, they have a good generalization ability even with small data set. Also, each has many hyper-parameters to tune. Therefore, we employed the hyper-optimization method implemented in [hyperopt](https://github.com/hyperopt/). The optimal hyper-parameters for each model are reported in Table 1. With the selected model, predictions are made over the missing time periods and Fig.2 shows the snapshots of the predictions. More detailed information can be found in the attached Jupyter Notebook.

<img src="/assets/images/traffic_speed_prediction.png" style="width: 800px;"/>

Discussions
----------
The trajectory date is sparse, especially for the given road sections. All our computations is simplified, and the created dataset does not consider other factors that exercise some extend impacts on the traffic speed, locally or globally, e.g. the drivers' behaviors (the size of unique drivers is found in million, many drivers may be given multiple encoding strings), the weather (snowing slows down the entire system), surrounding business (determines the demand and supply), and the entering and exiting ramps (merge/branch the traffic flow, and form bottlenecks, may cause traffic collisions). More advanced techniques can be applied, including HMM, MCMC and deep neural networks.


[Transportation Forecasting Competition (TRANSFOR 19)](https://ta.itss-ieee.org/transportation-forecasting-competition-transfor-19-call-for-participation-2019-trb-annual-meeting-workshop/)
is supported by the IEEE ITSS Technical Activities Sub-Committee "Smart Cities and Smart Mobility" 
and sponsored by Didi Chuxing Gaia Open Data Initiative.


