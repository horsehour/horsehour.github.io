---
layout: blog-post
categories: Research
tags: [Randomization, Algorithms, Lecture, Notes]
title: Lecture Note of Randomized Algorithms
---

It's a lecture note of an advanced algorithm class *Randomized Algorithms*.
I made some efforts to take notes and understand related materials.
To analyze and design an efficient algorithm, many valuable tools and advanced techniques are introduced, 
e.g., _Chernoff bounds_, _Derandomization_.
<a href="/files/randalgos.pdf" target="_blank">
<img src="/assets/images/pdf.png" style="width: 25px;"/></a>

Asymptotic Analysis
=====================
Asymptotic analysis concentrates on the change in running time when
increasing the size of an algorithm’s inputs, e.g. double the input
size. It avoids the perturbation from machines in analysis.

For a function $f(n)$, three sets of functions 

$$\begin{array}{rl}
O(f(n))&=\bigg\{g(n)\big|\exists \varepsilon > 0, N > 0, s.t. |g(n)| \ge c|f(n)|, \forall n\ge N\bigg\},\\
\Omega(f(n))&=\bigg\{g(n)\big|\exists \varepsilon > 0, N > 0, s.t. |g(n)| \le c|f(n)|, \forall n\ge N\bigg\},\\
\Theta(f(n))&=\bigg\{g(n)\big|\exists \varepsilon > 0, N > 0, s.t. |g(n)| = c|f(n)|, \forall n\ge N\bigg\},
\end{array}$$ 

are defined to express the asymptotic behavior of an
algorithm’s running time in terms of upper bound, lower bound, both the
upper bound and the lower bound, respectively.

Suppose an algorithm requires at least $\sqrt{\log n/n}$ steps, its
complexity is $\Omega(\sqrt{\log n/n})$. Another algorithm requires at
most $n^2$ rounds, therefore has complexity of $O(n^2)$.

Randomized Algorithms
=====================

The design and analysis of a randomized algorithm is to show that the
randomized behaviors in execution is *likely to be good*, on every
input. A randomized algorithm makes random choices during execution and
its behaviors vary even given the same inputs.

However, a *deterministic algorithm* will output the same outputs when
given the same inputs. It follows a fixed procedure and provides
deterministic output. Also, the randomized algorithms are different from
the *probabilistic analysis of algorithms*, where the input is assumed
to be drawn from a specific probability distribution, and show that the
algorithm works for most inputs.

Randomized algorithms can be roughly categorized into two
classifications: the *Las Vega* algorithms and the *Monte Carlo*
algorithms.

Las Vegas Algorithms
--------------------

A Las Vegas algorithm always produce the correct answer, but its running
time is a random variable whose expectation is bounded.

Monte Carlo Algorithms
----------------------

A Monte Carlo algorithm runs for a fixed number of steps, and produces
an answer that is correct with a lower-bounded probability.

These probabilities and expectations are determined by the random
choices and independent of the inputs. Therefore, the repetitions of
Monte Carlo can drive down the failure probability exponentially.

Applications
------------

1.  *data structures*: sorting, order statistics, searching
2.  *graph algorithms*: minimum spanning trees, shortest paths, min-cut
3.  *geometric algorithms and mathematical programming*: manipulation of
    geometric objects, faster algorithms for linear programming,
    rounding linear program solutions to integer linear program
    solutions
4.  *probabilistic existence proofs*: show that a combinatorial object
    arises with non-zero probability among objects drawn from a suitable
    probability space
5.  *derandomization*: first design a randomized algorithm, then argue
    that it can be derandomized to produce a deterministic algorithm
6.  *algebraic identities*: polynomial and matrix identity verification,
    pattern matching, interactive proof systems
7.  *number theoretic algorithms*: primality testing, polynomial roots
    and factors
8.  *counting and enumerating*: matrix permanent, counting combinatorial
    structures
9.  *parallel and distributed computing*: deadlock avoidance,
    distributed consensus
    

Randomized QuickSort
====================

QuickSort algorithm is an efficient sorting method, it places the
elements of an array in ascending order. It’s a *divide and conquer*
algorithm, it picks a pivot element in each step, and divides a larger
set into two smaller subsets, s.t all elements in one subset is smaller
than the pivot element, all elements in another subset is greater than
the pivot element. It recursively applies the partition strategy to
these subsets until all elements are in order. The time complexity of
QuickSort is $O(n\log n)$, and an easier randomized QuickSort algorithm
as indicated in Table \[alg:randquicksort\] can obtain the same level
complexity.

The expected number of comparisons of RandQS is at most $2nH_n$.

The comparison operations happen in step 8 - 10. Let $S_{(i)}$ be the
element in $S$ with rank $i$, i.e. the $i$th smallest element. Let
$X_{ij}$ indicates whether there is a comparison between $S_{(i)}$ and
$S_{(j)}$ in the execution of RandQS, where $j > i$. The execution
result of RandQS is a binary tree, each node corresponds to a pivot
element. Considering a permutation $\pi$ of the elements: visiting in
up-bottom order, and then from left to right within the same level.
Then, $\pi$ can be viewed as the order of picking pivot elements. If the
pair has a comparison, one of them must be the ancestor of another one.
Also, all other elements with ranks between $i$ and $j$ should not be
picked earlier than either $S_{(i)}$ or $S_{(j)}$. Otherwise, it will
cause the partition of $S_{(i)}$ or $S_{(j)}$ to its two children, such
that there is no chance to make comparison. Therefore, we should
consider all elements with ranks from $i$ to $j$, and compute the
probability that either $S_{(i)}$ or $S_{(j)}$ are picked firstly, which
is $Pr(X_{ij}=1)=2/(j-i+1)$.

The total number of comparison in the execution of RandQS is
$X=\sum_{i=1}^n \sum_{j>i} X_{ij}$, and its expectation can be computed

$$\mathbb E[X] = \sum_{i=1}^n \sum_{j>i} \mathbb E[X_{ij}] = \sum_{i=1}^n \sum_{j>i} Pr(X_{ij}=1) = \sum_{i=1}^n \sum_{j=i+1}^n \frac{2}{j-i+1} \le \sum_{i=1}^n \sum_{d=1}^n \frac{2}{d} = 2nH_n.$$

A set $S$ of $n$ elements The elements of $S$ in ascending order

$S_1\leftarrow {\varnothing}$, $S_2\leftarrow {\varnothing}$ Randomly
pick a pivot element $y$

$C\leftarrow \{y\}$

$C$

$S_1\leftarrow S_1\cup\{S[i]\}$ if $S[i] \le y$
$S_2\leftarrow S_2\cup\{S[i]\}$ if $S[i] > y$

$C\leftarrow QS(S_1) \cup C$

$C\leftarrow C\cup QS(S_2)$ $C$

Binary Planar Partitions
========================

Given $n$ non-intersecting line segments in the plane build a small
linear decision tree that has (pieces of) at most one segment in each
cell.

Cut Problem
===========

Karger’s Min-Cut: repeat and contract
$2\binom{n}{2} \ln n \in O(n^2\ln n)$ times, retain the best cut with
total cost $O(n^4\ln n)$. It ends with non-zero probability to find a
min-cut.

Given $G=(V,E)$, find a partition $S, T$ of $V$, i.e.
$S\cup T=V, S\cap T={\varnothing}$, s.t. the size of
$\underline{cut}(S,T)=\{(u,v)\in E|u\in S, v\in T\}$ is maximized.

Coupon Collector Problem
========================

Suppose there are $n$ different types of coupons, and a coupon is chosen
at random at each trial. Each random coupon is equally likely be of any
of the $n$ types, and the random choices of the coupons are mutually
independent. To collect on of each type of coupon, at least how many
trails are required?

Let $X$ be the number of trials required to collect at least one of each
type of coupon. We determine $\mathbb E[X]$. Let $X_i$ be the number of
additional trials for another new type of coupon while exactly $i-1$
different types of coupon have been collected, $1\le i\le n$ and
$X=\sum_{i=1}^n X_i$. It’s obvious, $X_i$ has geometric distribution
with parameter $p_i$. To be success, it requires to collect a type of
coupon which is different from previous $i-1$ types. The probability is
$p_i=1-(i-1)/n$.

At the beginning, no coupon is collected. To collect a new type of
coupon, only one additional trail is required, and the probability of
being success is $Pr(X_1=1)=p_1=1$.

Let’s compute the expectation for $X$

$$\mathbb E[X]=\sum_{i=1}^n \mathbb E[X_i] = \sum_{i=1}^n \frac{1}{p_i} = \sum_{i=1}^n \frac{n}{n-i+1} = nH_n.$$

The harmonic number $H_n=\sum_{i=1}^n 1/i$ satisfies

$$H_n=\ln n + \Theta(1).$$

Because $f(x)=1/x$ is monotonically decreasing, we apply the geometric
properties of an integral operation over $1/x$ and have

$$\sum_{k=2}^n \frac{1}{k}\le \ln n = \int_1^n \frac{1}{x} dx \le \sum_{k=1}^n \frac{1}{k},$$

hence $\ln n\le H_n\le \ln n + 1$, we end the proof.

We analysis the probability that $X$ derivates from its expectation
$nH_n=n\ln n + \Theta(n)$ by amount of $cn$, where $c$ is real constant.
Let $\epsilon_i^r$ denote the event that coupon type $i$ is not
collected in the first $r$ trials. Therefore,
$$Pr(\epsilon_i^r) = (1-\frac{1}{n})^r \le e^{-r/n}.$$ Suppose the
number of trials $X$ required is greater than $r=\beta n\ln n$, then at
least one of the events $\{\epsilon_i^r\}_{i=1}^n$ must happen. Apply
the union bound, we can write

$$Pr(X>r) = Pr(\cup_{i=1}^n \epsilon_i^r) \le \sum_{i=1}^n Pr(\epsilon_i^r) \le ne^{-r/n} = n^{-\beta+1}.$$

When $\beta = 2$, $Pr(X>2n\ln n) \le 1/n$.

Randomized Selection
====================

Randomized Median Algorithm
===========================

Analysis the probability that the randomized median algorithm fails,
including 3 reasons:

-   $\varepsilon_1$: $|\{r\in R|r\le m\}| < 1/2 n^{3/4}-\sqrt n$,

-   $\varepsilon_2$: $|\{r\in R|r\ge m\}| < 1/2 n^{3/4}-\sqrt n$,

-   $\varepsilon_3$: $|C| > 4 n^{3/4}$.

Therefore,
$Pr(Fails) = Pr(\varepsilon_1\cup\varepsilon_2\cup\varepsilon_3)=Pr(\varepsilon_1) + Pr(\varepsilon_2) + Pr(\varepsilon_3)$

A set $S$ of $n$ elements are a totally ordered university The median
element in $S$, denoted $m$ $R\leftarrow$ uniformly sample
$\ceil{n^{3/4}}$ elements from $S$ with replacement Sort $R$
$d\leftarrow$ the $\ceil{1/2n^{3/4}- \sqrt n}$th smallest element in $R$
$u\leftarrow$ the $\ceil{1/2n^{3/4}+ \sqrt n}$th smallest element in $R$
$C\leftarrow {\varnothing}$ $n_d,n_u\leftarrow 0$
$n_d \leftarrow n_d + 1$, if $S[i] < d$ $n_u \leftarrow n_u + 1$, if
$S[i] > u$ $C\leftarrow C\cup \{S[i]\}$, if $d\le S[i]\le u$ Sort $C$

Tail Bounds
===========

Let $\{X_i\}_{i=1}^n$ be independent *Poisson trails* s.t. for
$1\le i\le n$, $Pr(X_i=1)=p_i$, where $0<p_i<1$. Then, for
$X=\sum_{i=1}^n X_i$, $\mu=\mathbb E(X)=\sum_{i=1}^n p_i$. If
$p=p_i, \forall 1\le i\le n$, $\{X_i\}_{i=1}^n$ are a.k.a *Bernoulli
trails*, and $X$ is said to have the *binomial distribution*.

To bound the probability that a random variable deviates from its
expectation, many useful techniques are available, e.g. Markov’s
inequality and Chebyshev’s inequality. There are several questions
regarding the deviation of $X$ from its expectation $\mu$:

-   given $\delta>0$, what’s the probability that $X$ exceeds
    $(1+\delta)\mu$?

-   given a small $\epsilon>0$ (e.g. 0.01), how large need $\delta$ be
    s.t. $Pr[X\ge(1+\delta)\mu] \le \epsilon$?

To answer these questions, a very useful technique known as the
*Chernoff bounds* was proposed. It’s extremely useful in designing and
analyzing randomized algorithms. Chernoff bounds are all formulated in
terms of *Moment Generating Function* (MGF), and we give it a brief
introduce.

The expectation of $e^{tX}$ is the moment generating function of $X$,
and denoted as $M_X(t)=\mathbb E[e^{tX}],\forall t>0$.

MGF has several useful properties:

If $\{X_i\}_{i=1}^n$ are independent, and
$Y=\sum_{i=1}^n c_i X_i, \forall c_i\in\mathbb R$, then the PDF of $Y$
is the convolution of the PDF of $\{X_i\}_{i=1}^n$, and its MGF

$$M_Y(t) = \prod\limits_{i=1}^n M_{X_i}(c_it),\forall t\in \mathbb R.$$

$\mathbb E[X^n] = M_X^{(n)}(0)$.

If $X$ is a random variable with expectation $\mu_X$, then

$$Pr(X\ge t) \le \mu_X/t, \forall t > 0.$$

According to the definition of expectation of $X$, we have

$$\begin{array}{rl}
\mu_X & = \mathbb E[X] = \sum\limits_{\forall x} xPr(X=x)\\
& =\sum\limits_{\forall x \ge t} xPr(X=x)+\sum\limits_{\forall x < t} xPr(X=x) \\
& \ge \sum_{\forall x \ge t} tPr(X=x) = tPr(X\ge t).
\end{array}$$ 

Divide both sides by $t$, we get
$Pr(X\ge t)\le \mathbb E[X]/t,\forall t>0$.

If $X$ is a random variable with variance $\sigma_X^2$, then

$$Pr(|X-\mu_X| \ge t \sigma_X) \le 1/t^2, \forall t>0.$$

Let $Y=(X-\mu_X)^2$, then $\mathbb E(X-\mu_X)^2 = \sigma_X^2$. Applying
Markov’s inequality, we get

$$Pr(|X-\mu_X|\ge t) = Pr(Y\ge t^2) \le \mu_Y/t^2 = \mathbb E(X-\mu_X)^2/t^2=(\sigma_X/t)^2,$$

then $Pr(|X-\mu_X|\ge t\sigma_X) \le 1/t^2$.

Chernoff Bounds
---------------

Given $n$ independent Poisson trials $\{X_i\}_{i=1}^n$ with
$Pr[X_i=1]=p_i\in (0,1)$, $1\le i\le n$, and the sum
$X=\sum_{i=1}^n X_i$ has its expectation
$\mu=\mathbb E(X)=\sum_{i=1}^n p_i$. These bounds on the tail
probability 

$$\begin{aligned}
Pr[X \ge (1 + \delta)\mu] & \le & \bigg[\frac{e^\delta}{(1+\delta)^{1+\delta}}\bigg]^\mu, \forall \delta > 0\\
Pr[X \ge (1 + \delta)\mu] & \le & e^{-\mu \delta^2/3}, \forall \delta \in (0, 1]\\
Pr[X\ge R] & \le & 2^{-R}, R\ge 6\mu\end{aligned}$$ 

hold.

The first bound is the strongest one, and from it we derive the others,
which are easier in statement and computing.

It’s obvious,
$Pr[X \ge (1 + \delta)\mu] = Pr[e^{tX} \ge e^{t(1 + \delta)\mu}]$,
$\forall t > 0$. According to Markov’s inequality,
$Pr[e^{tX} \ge e^{t(1 + \delta)\mu}] \le \mathbb E[e^{tX}]/e^{t(1 + \delta)\mu}$.
Because $\{X_i\}_{i=1}^n$ are independent, therefore
$\{e^{tX_i}\}_{i=1}^n$ are independent as well. Therefore,

$$\mathbb E[e^{tX}]=\prod\limits_{i=1}^n \mathbb E[e^{tX_i}]=\prod\limits_{i=1}^n [p_i e^t + (1-p_i)]=\prod\limits_{i=1}^n [1+p_i (e^t - 1)].$$

With the fact that $e^x \ge 1 + x$ and set $x=p_i (e^t - 1)$, we have

$$\prod\limits_{i=1}^n [1+p_i (e^t - 1)] \le \prod\limits_{i=1}^n \exp\big(p_i (e^t - 1)\big)=\exp\bigg(\sum\limits_{i=1}^n p_i (e^t - 1)\bigg)=\exp((e^t - 1)\mu).$$

Thus,
$Pr[e^{tX} \ge e^{t(1 + \delta)\mu}] \le \mathbb E[e^{tX}]/e^{t(1 + \delta)\mu} \le \exp((e^t - 1)\mu - t(1 + \delta)\mu)$.
To obtain a tight upper bound, we minimize the RHS of the inequality.
Let $f(t)=(e^t - 1)\mu - t(1 + \delta)\mu$, we minimize it by solving
$f'(t)=\mu e^t -(1 + \delta)\mu = 0$, and get $t=\ln(1+\delta)>0$, where
$f(t)$ reaches its minimum since $f''(t)=\mu e^t > 0$. Plugging it to
the above inequality gives

$$Pr[X \ge (1 + \delta)\mu] \le \exp(\delta\mu - \ln(1+\delta)(1 + \delta)\mu) = \bigg[\frac{e^\delta}{(1+\delta)^{1+\delta}}\bigg]^\mu.$$

We show
$[\frac{e^\delta}{(1+\delta)^{1+\delta}}]^\mu \le e^{-3\mu\delta^2/3}$.
We define $g(\delta)=\delta - (1+\delta)\ln (1+\delta) + \delta^2/3$,
then $g'(\delta)=-\ln(1+\delta) + 2/3\delta$,
$g''(\delta)=2/3 - 1/(1+\delta)$. With $g''(1/2)=g'(0)=g(0)=0$,
$g'(1)=2/3-\ln 2 < 0$, we have

-   $\delta \in (0,1/2)$: $g''(\delta) < 0$, $g'(\delta) < g'(0) = 0$,

-   $\delta \in (1/2,1)$: $g''(\delta) > 0$, $g'(\delta) < g'(1) < 0$.

Above all, $g'(\delta) \le 0,\forall \delta\in[0,1]$, thus
$g(\delta) \le 0$, and
$Pr[X \ge (1 + \delta)\mu] \le e^{-\mu \delta^2/3}$.

To prove the last bound, let $R=(1+\delta)\mu \ge 6\mu$, then
$\delta \le 5$, and applying the first bound

$$Pr(X\ge R) \le \bigg[\frac{e^\delta}{(1+\delta)^{1+\delta}}\bigg]^\mu \le \bigg[\frac{e}{1+\delta}\bigg]^{\mu(1+\delta)} \le \big[\frac{e}{6}\big]^{\mu(1+\delta)} \le 2^{-R}.$$

Given $n$ independent Poisson trials $\{X_i\}_{i=1}^n$ with
$Pr[X_i=1]=p_i\in (0,1)$, $1\le i\le n$, and the sum
$X=\sum_{i=1}^n X_i$ has its expectation
$\mu=\mathbb E(X)=\sum_{i=1}^n p_i$. The bounds on the tail probability

$$\begin{aligned}
\label{eq:low_chernoff_poisson_1}
Pr[X \le (1 - \delta)\mu] & \le &\big[\frac{e^{-\delta}}{(1-\delta)^{1-\delta}}\big]^\mu\\
\label{eq:low_chernoff_poisson_2}
Pr[X \le (1 - \delta)\mu] & \le & e^{-\mu\delta^2/2}\end{aligned}$$

Apply Markov’s inequality with $t<0$, we get 

$$\begin{array}{rl}
Pr[X \le (1 - \delta)\mu] & = Pr[e^{tX} \ge e^{t(1 - \delta)\mu}] \le \mathbb E[e^{tX}]e^{-t(1-\delta)\mu}\\
 & = \prod_{i=1}^n \mathbb E[e^{tX_i}] e^{-t(1-\delta)\mu} \le \prod_{i=1}^n e^{p_i(e^t-1)}e^{-t(1-\delta)\mu}\\
 & = e^{(e^t-1)\mu -t(1-\delta)\mu}.
\end{array}$$ 

Let $t=\ln(1-\delta)<0$, we show that

$$Pr[X \le (1 - \delta)\mu] \le \bigg[\frac{e^{-\delta}}{(1-\delta)^{1-\delta}}\bigg]^\mu.$$

To show
$\big[\frac{e^{-\delta}}{(1-\delta)^{1-\delta}}\big]^\mu \le e^{-\mu\delta^2/2}$
equivalently to show
$\mu[-\delta - (1-\delta)\ln(1-\delta)] \le -\mu\delta^2/2$. Let
$f(\delta) = -\delta - (1-\delta)\ln(1-\delta) + \delta^2/2$, we have
$f(0)=0$, $f'(\delta)=\ln(1-\delta) + \delta$, and
$f''(\delta)=1-1/(1-\delta) < 0$. Since $f'(0)=0$, so $f'(\delta)\le 0$
in $[0,1)$ and $f(\delta) \le 0$.

Let $\{X_i\}_{i=1}^n$ be the independent random variables with
$Pr(X_i=1)=Pr(X_i=-1)=1/2$, $\{X_i\}$ are a.k.a *Rademacher* random
variables. Let $X=\sum_{i=1}^n X_i$. For any $c>0$ 

$$\begin{aligned}
Pr(X\ge c) & \le & e^{-c^2/2n}\\
Pr(X\le -c) & \le & e^{-c^2/2n}\\
Pr(|X|\ge c) & \le & 2e^{-c^2/2n}\end{aligned}$$

Applying Markov’s inequality, we have

$$Pr(X\ge c) = Pr(e^{tX} \ge e^{tc})\le \mathbb E[e^{tX}]/e^{tc}=\prod_{i=1}^n \mathbb E[e^{tX_i}]/e^{tc}, \forall t > 0.$$

For any $t\in \mathbb R$, $\mathbb E[e^{tX_i}] = e^t/2 + e^{-t}/2$, we
merge them using the Taylor’s series 

$$\begin{array}{rl}
e^t & = 1 + t + \frac{t^2}{2!} + \frac{t^3}{3!}+\cdots,\\
e^{-t} & = 1 - t + \frac{t^2}{2!} -\frac{t^3}{3!}+\cdots,
\end{array}$$ 

then
$\mathbb E[e^{tX_i}]=1+\frac{t^2}{2!}+\frac{t^4}{4!}+\cdots=\sum_{i=0}^\infty \frac{t^{2i}}{(2i)!}$.
The product of the even terms of $(2i)!$ is
$\prod_{n=1}^i (2n) = 2^i i! \le (2i)!$ and
$\mathbb E[e^{tX_i}]\le \sum_{i=0}^\infty \frac{(t^2/2)^i}{i!}=e^{t^2/2}$.
Thus, $Pr(X\ge c)\le e^{nt^2/2-tc}$. Let , then $nt^2/2-tc=-c^2/2n$,
$Pr(X\ge c)\le e^{-c^2/2n}$.

The symmetry of $X$ leads to $Pr(X\le -c) \le e^{-c^2/2n}$ and
$Pr(|X|\ge c) \le 2e^{-c^2/2n}$.

Let $\{Y_i\}_{i=1}^n$ be the independent random variables with
$Pr(Y_i=1)=Pr(Y_i=0)=1/2$, $\{Y_i\}$ are a.k.a *Bernounlli* random
variables with $p=1/2$. Let $Y=\sum_{i=1}^n Y_i$, then $\mu=n/2$.

$$\begin{aligned}
Pr(Y\le \mu - c) & \le & e^{-2c^2/n}, \forall 0< c < \mu\\
Pr(Y\le (1-\delta)\mu) & \le & e^{-\delta^2\mu}, \forall 0 < \delta < 1\end{aligned}$$

Let $X_i=2Y_i-1$, it has the Rademacher distribution,
$X=\sum_{i=1}^n X_i$, then

$$Pr(X\le -a) \le e^{-a^2/2n}, \forall a > 0.$$ 

Because
$Pr(X\le -a)=Pr(2Y-n\le -a) = Pr(Y\le \mu - a/2)$, let $c = a/2$, we
have 

$$Pr(Y\le \mu-c)\le e^{-4c^2/2n} = e^{-2c^2/n}.$$ 

Let $c = \delta\mu$, we have $Pr(Y\le (1-\delta)\mu)\le e^{-2\delta^2\mu^2/n}=e^{-\delta^2\mu}$.

Applications
------------

### Set Balancing

The problem *set-balancing* is a.k.a *two-coloring a family of vectors*.
Given $A\in \{0,1\}^{n\times m}$, find a column vector $b\in \{-1,1\}^m$
to minimize $\|Ab\|_\infty$. It arises in statistical experiment
designs. Each column of $A$ represents an subject in the experiment, and
each row represents a feature. The vector $b$ partitions subjects to two
disjoint groups: the treatment group and the control group, such that
the number of subjects with each feature is roughly the same.

A randomized algorithm to search the vector $b$ is independently,
randomly choose each entry from $\{-1,1\}$, then $\|Ab\|_\infty$ can
reach $O(\sqrt{m\ln n})$.

For a random vector $b$ with entries independently and with equal
probability chosen from $\{-1,1\}$, then

$$Pr(\|Ab\|_\infty \ge \sqrt{4m\ln n}) \le \frac{2}{n}.$$

For the $i$th row of $A$, $1\le i\le n$, the dot product of $A$’s $i$th
row and the random vector $b$ 
$$Z_i=\sum\limits_{j=1}^m a_{ij} b_j.$$

Suppose there are $k$ non-zero elements in the row vector of $A$, $Z_i$
becomes the sum of $k$ independent random variables with
$Pr(b_j=1)=Pr(b_j=-1)=1/2$. Applying the Chernoff bounds on Rademacher
distribution of two tails, we have

$$Pr(|Z_i| \ge \sqrt{4m\ln n}) \le 2e^{-4m\ln n/2k}\le 2e^{-2\ln n} = \frac{2}{n^2},$$

since $m\ge k$. Considering all rows of $A$, 

$$\begin{array}{rl}
Pr(\|Ab\|_\infty \ge \sqrt{4m\ln n}) & = Pr\big(\cup_{i=1}^n \{|Z_i| \ge \sqrt{4m\ln n}\}\big)\\
&\le \sum\limits_{i=1}^n Pr(|Z_i| \ge \sqrt{4m\ln n}) \le \frac{2}{n}.
\end{array}$$

### Permutation Routing on the Hypercube

A $n$-dimensional hypercube (or $n$-cube) is a directed graph $G=(V,E)$
with $N=2^n$ nodes s.t node $i$ is immediately connected to $j$ iff
$h(i, j)=1$, where $h$ is the Hamming distance of $i$ and $j$ in terms
of binary representation of length $n$. The total number of directed
edges in $G$ is $|E|=2nN$ because the out-degree of each node is exact
$n$.

*Permutation routing problem* is a.k.a *oblivious routing problem*,
where each node in $G$ initially has one packet to deliever and is also
the destination of exact one packet. Let $d(i)$ be the destination of
the packet of node $i$. Table \[tbl:permurouting\] demonstrates a
permutation routing problem on 3-cube. The two rows present the source
and destination node, both are written in the form of binary
representation. One row is just a permutation of another row, and it’s
where the name of the problem comes from.

    $i$     00   01   01   11   00   11   10   11
  -------- ---- ---- ---- ---- ---- ---- ---- ----
   $d(i)$   00   01   01   11   00   10   01   11

  : Permutation Routing Problem

\[tbl:permurouting\]

A *routing algorithm* assigns each pair of nodes a directed path – a
sequence of directed edges – connecting the pair. During the routing of
packets, one edge may be on the path of more than one packet and one
edge can process only one packet per step, it will cause *congestion*
and *bottlenecks*. To resolve the problem, the routing algorithm should
also specify a *queueing policy* to order packets in the queue and
allows at most one packet to pass through the directed edge in each
step. If the permutation routing algorithm routes packets only based on
their destination, it’s called *oblivious routing algorithm*.

The performance of a routing algorithm can be measured with the *maximum
time*, or the *number of parallel steps* required to routing an
arbitrary permutation routing problem.

For arbitrary deterministic oblivious permutation routing algorithm on
an $n$-cube with $N=2^n$ nodes each of out-degree $n$, there is an
instance of permutation routing requiring $\Omega(\sqrt{N/n})$ steps to
finish.

Let the route of packet $v_i$ be $\rho_i=(e_1,e_2,\ldots,e_K)$. Let
$S_i^I$ be the set of packets (other than $v_i$) whose routes intersect
at least one of $\{e_1,e_2,\ldots,e_K\}$ in $\rho_i$ in Phase I. Then,
the delay of $v_i$ is at most $|S_i^I|$.

Suppose $n$ is even, and for packet $v_i$ with its source and
destination of forms 

$$\begin{array}{rcl}
i=&ab= &a_1,\ldots,a_{n/2}, b_1\ldots,b_{n/2},\\
d(i)=&ba=&b_1,\ldots,b_{n/2},a_1,\ldots,a_{n/2}.
\end{array}$$ 

There is a node with address $bb$, and the routing
algorithm will alway use it to route a pair of $ab\to ba$. However,
among $N$ nodes, $2^{n/2}=\sqrt N$ have an address of the form $bb$. The
routing algorithm routes at most $n$ packets for each node at each step,
because each node has $n$ out-going edges. Therefore, routing all
packets requires at least $N/(n\sqrt N)$ steps, it’s $\sqrt N/n$.

The time to deliver packet $v_i$ is at most $n$ plus the delayed steps
for queueing at intermediate node in $\rho_i$. We need to compute the
expected delay.

We analysis the two phase algorithm, and fix the packet $v_i$ with a
route $\rho_i=(e_1,e_2,\ldots,e_K)$ of length $K$. Let $H_j=1$ if a
different $\rho_j$ intersects $\rho_i$; otherwise $H_j=0$. Since the
intermedia destination is randomly chosen, $\{H_j\}$ are independent
Poisson trials. According to the definition, we have

$$|S_i^I| = \sum_{j=1}^N H_j.$$ 

For an edge $e$ in $G$, let $T(e)$ be
the number of routes cross edge $e$. Then, the number of routes
intersects $\rho_i$ should not be larger than the number of routes
passing through at least one edge in $\rho_i$, i.e.

$$|S_i^I| \le \sum_{t=1}^K T(e_t).$$ 

Therefore, we have
$\mathbb E[|S_i^I|] \le \sum_{t=1}^K \mathbb E[T(e_t)]$, where $K$ is
also a random variable. Suppose $i=(a_1,a_2,\ldots,a_n)$, and
$\sigma(i)=(b_1,b_2,\ldots,b_n)$, the times taken to deliver packet
$v_i$ from $i$ to $\sigma(i)$ is the Hamming distance between $i$ and
its intermediate destination $\sigma(i)$. Let $Z_t=1$ if $a_t\ne b_t$;
otherwise $Z_t=0$, $1\le t\le n$. Further, $K = \sum_{t=1}^n Z_t$ and
$\mathbb E[K]=n/2$ for $\{Z_t\}$ are independent Bernoulli random
variables with parameter $1/2$.

Besides, $\forall e \in E$, $T(e)$s are the same, and thus independent
from $K$. We get

$$\mathbb E[|S_i^I|] = \mathbb E[\mathbb E[|S_i^I|\big|K]] \le \mathbb E[\mathbb E[\sum_{t=1}^K T(e_t)\big| K]]=\mathbb E[K T(e)] = \mathbb E[K] \mathbb E[T(e)] = \frac{n}{2} \mathbb E[T(e)].$$

According to the definition

$$T(e) = \sum_{k=1}^N I(\rho_k \text{ crosses }e)=\sum_{k=1}^N Pr(\rho_k \text{ crosses }e).$$

Let $e=(b_1,\ldots,b_{j-1}, a_j, a_{j+1},\ldots,a_n)\to(b_1,\ldots,b_{j-1}, b_j, a_{j+1},\ldots,a_n)$
corresponding the bit-fixing on the $j$th entry. To cross the edge $e$,
the origin of the route must be $(*,*,\ldots,*, a_j,\ldots, a_n)$ and
the destination of the route be
$(b_1,\ldots,b_{j-1}, b_j,*,*,\ldots,*)$, where $*$-bit’s value does not
matter.

The possible number of routes with the specific form of origins are
$2^{j-1}$, and for any fixed origin (route), the probability that the
destination of the route has the specific form is
$Pr(b_1,\ldots,b_{j-1}, b_j,*,*,\ldots,*)=2^{n-j}/2^n=2^{-j}$, then

$$\begin{aligned}
\mathbb E[T(e)]& =&2^{j-1} 2^{-j}=1/2,\\
\mathbb E[|S_i^I|] &\le &n/4.\end{aligned}$$ 

Let $R=3n/2 \ge 6\mathbb E[|S_1|]$,
$Pr(|S_i^I|\ge R) = Pr(|S_1| \ge 3n/2) \le 2^{-R}=2^{-3n/2}$. Using
union bound for $N$ packets, we get

$$Pr\big(\cup_{i=1}^N \{|S_i^I| \ge 3n/2\}\big) \le N 2^{-3n/2}=2^{-n/2}.$$

It’s for the Phase I, and Phase II runs Phase I backward. Therefore, we
can conclude that: with probability at least $1-2^{-n/2}$, all packets
are delivered in at most $n + 3n/2 * 2=5n$ steps. The randomized 2-Phase
routing algorithm can route all packets to their destination in $O(n)$
time with probability close to $1$.

The Probability Method
======================

The probability method is a way of proving the existence of an object.
To prove the existence, there are two important principles:

-   Simple Counting: constructing an appropriate probability space
    $\mathcal S$ of objects, and then show that the probability that an
    object in $\mathcal S$ with the required properties is selected is
    positive. Since the probability is positive, it must exist.

-   Averaging Argument: a random variable – in a discrete probability
    space – must with a positive probability assume at least one value
    that is not greater than its expectation, and at least one value
    that is not smaller than its expectation.

It’s applied to solve some complicated problems and requires many
advanced techniques for constructing proof.

Max-SAT
-------

Second Moment Method
--------------------

If $X$ is a non-negative integer-valued random variable, then

$$Pr(X=0)\le \frac{Var(X)}{(\mathbb E[X])^2}.$$

Apply Chebyshev’s inequality,

$$Pr(X=0)\le Pr(|X - \mathbb E[X]| \ge \mathbb E[X]) \le \frac{\mathbb E[X-\mathbb E[X]]}{(\mathbb E[X])^2} = \frac{Var(X)}{(\mathbb E[X])^2}.$$

Conditional Expectation Inequality
----------------------------------

Let $X=\sum_{i=1}^n X_i$ where each $X_i$ is a Bernoulli random
variable. Then

$$Pr(X>0) \ge \sum_{i=1}^n \frac{Pr(X_i=1)}{\mathbb E[X|X_i=1]}.$$

Let $Y=1/X$ if $X>0$, and $Y=0$ otherwise. It’s obvious,
$Pr(X>0)=\mathbb E[XY]$. Then 

$$\begin{array}{rl}
\mathbb E[XY] & = \sum_{i=1}^n \mathbb E[X_iY] = \sum_{i=1}^n \big[\mathbb E[X_iY|X_i=0]Pr(X_i=0) + \mathbb E[X_iY|X_i=1]Pr(X_i=1)\big]\\
& = \sum_{i=1}^n \mathbb E[X_iY|X_i=1]Pr(X_i=1) = \sum_{i=1}^n \mathbb E[Y|X_i=1]Pr(X_i=1)\\
& =\sum_{i=1}^n \mathbb E[1/X|X_i=1]Pr(X_i=1) = \sum_{i=1}^n [\sum_{x} \frac{Pr[X=x|X_i=1]}{x}]Pr(X_i=1) \\
& \ge \sum_{i=1}^n \frac{Pr(X_i=1)}{\sum_{x} xPr[X=x|X_i=1]} = \sum_{i=1}^n \frac{Pr(X_i=1)}{\mathbb E[X|X_i=1]},
\end{array}$$ 

where the Jensen’s inequality is used since $f(x)=1/x$ is
convex.

Lovász Local Lemma
------------------

Suppose a large number of events in the probability space happens with
probability less than 1, and there are independent from each other,
there must exist a positive probability that none of these events occur.
The Lovász local lemma relax the mutually independency with a weak
partially independency, and arrives the same conclusion.

A dependency graph for a set of events $E_1, E_2, \ldots, E_n$ is a
graph $G(V,E)$ such that $V=\{1,2,\ldots,n\}$, and for $i=1,\ldots,n$,
event $E_i$ is mutually independent of the events $\{E_j|(i,j)\ne E\}$.

Let $E_1,E_2,\ldots,E_n$ be a set of events, and assume that the
following hold

1.  $Pr(E_i)\le p < 1,\forall i = 1, 2,\ldots,n$

2.  the degree of $G$ is bounded by $d$

3.  $4pd \le 1$

Then 

$$Pr\big(\bigcap_{i=1}^n \bar E_i\big) > 0.$$

We note that
$Pr\big(\bigcap_{i=1}^n \bar E_i\big) = \prod_{i=1}^n Pr(\bar E_i|\bigcap_{j=1}^{i-1} \bar E_j)$.
Let $S\subset \{1,\ldots,n\}$, we prove by induction on $s=0,1,\ldots,n-1$ that 

$$\label{eq:lll_lemma}
Pr\big(E_k|\bigcap_{j\in S} \bar E_j\big) \le 2p < 1,\forall k\not\in S$$

if $|S|\le s$. Based on it, we can proof $Pr\big(\bigcap_{j\in S} \bar E_j\big) > 0$.

If $s=0$, or $S={\varnothing}$,
$Pr\big(E_k|\bigcap_{j\in S} \bar E_j\big) = Pr(E_k)\le p < 2p$. Let’s
show that it’s true for any non-empty $S$. Based on the statement in 
for $s \ge 1$, we show $Pr\big(\bigcap_{j\in S} \bar E_j\big) > 0$.

If $s=1$, we can immediate get $Pr(\bar E_i) = 1- Pr(E_i) \ge 1 - p >0$,
which is not dependent on the statement in . , w.l.o.g let
$S=\{1,2,\ldots, s\}$, we show 

$$\label{eq:lll}
\begin{array}{rl}
Pr\big(\bigcap_{i=1}^s \bar E_i\big) & = \prod_{i=1}^s Pr(\bar E_i|\bigcap_{j=1}^{i-1} \bar E_j)\\
& = \prod_{i=1}^s [1 - Pr(E_i|\bigcap_{j=1}^{i-1} \bar E_j)]\\
& \ge \prod_{i=1}^s (1-2p) > 0.
\end{array}$$

We . Let $S_1=\{j\in S|(k, j)\in E\}$, $S_2=\{j\in S|(k, j)\not\in E\}$,
$F_S=\bigcap_{i\in S} \bar E_i$. If $S_2=S$, $E_k$ is mutually
independent of the events $\bar E_j,\forall j\in S$, and thus

$$Pr(E_k|F_S) = Pr(E_k) \le p \le 2p.$$ 

For $|S_2| < s$, apply Bayes’ theorem, we have

$$Pr(E_k|F_S) = \frac{Pr(E_k\cap F_S)}{Pr(F_S)} = \frac{Pr(E_k\cap F_{S_1}\cap F_{S_2}}{Pr(F_{S_1}\cap F_{S_2})}
= \frac{Pr(E_k\cap F_{S_1}|F_{S_2}) Pr(F_{S_2})}{Pr(F_{S_1}|F_{S_2})Pr(F_{S_2})}
= \frac{Pr(E_k\cap F_{S_1}|F_{S_2})}{Pr(F_{S_1}|F_{S_2})}.$$

1.  Denominator: 

    $$\begin{array}{rl}
    Pr(F_{S_1}|F_{S_2}) & = Pr(\bigcap_{i\in S_1} \bar E_i|F_{S_2}) = 1-Pr(\bigcup_{i\in S_1} E_i|F_{S_2})\\
    & \ge 1-\sum_{i\in S_1} Pr(E_i|F_{S_2}) = 1-|S_1| 2p \ge 1-2dp \ge 1/2.
    \end{array}$$ 
    
    Using the fact that $|S_1|\le d$ and $4dp\le 1$, and
    the assumption $Pr(E_i|F_{S}) \le 2p, |S|<s$.

2.  Numerator:
    
    $$Pr(E_k\cap F_{S_1}|F_{S_2}) \le Pr(E_k|F_{S_2}) = Pr(E_k) \le p.$$

Therefore, $Pr(E_k|F_S)\le 2p$, $\forall S$ with $|S|\le s$. Plug $s=n$
in , we get $Pr\big(\bigcap_{i=1}^n \bar E_i\big) > 0$.

Let $G(V,E)$ be a dependency graph for events $E_1,E_2,\ldots,E_n$ in a
probability space. Suppose that there exist
$x_i\in[0,1], \forall 1\le i \le n$ such that

$$Pr(E_i) \le x_i\prod_{(i,j)\in E} (1-x_i).$$ 

Then

$$Pr\big(\bigcap_{i=1}^n \bar E_i\big) \ge \prod_{i=1}^n (1-x_i).$$

Let $S\subset \{1,2,\ldots,n\}$. We first prove by induction on
$s=|S|=0,1,\ldots, n-1$ that

$$Pr(E_k|\cap_{j\in S} \bar E_j) \le x_i,\forall k\not\in S.$$ 

The base
case $s=0$ or $S={\varnothing}$ follows from the assumption on the
probabilities $Pr(E_i)$. For $s\ge 1$, let $S_1=\{j\in S|(k, j)\in E\}$,
$S_2=\{j\in S|(k, j)\not\in E\}$, $F_S=\bigcap_{i\in S} \bar E_i$. Apply
the definition of conditional probability,

$$Pr(E_k|F_S) = \frac{Pr(E_k\cap F_{S_1}|F_{S_2})}{Pr(F_{S_1}|F_{S_2})}.$$

1.  Denominator: let $S_1=\{j_1,j_2,\ldots,j_r\}$, 

    $$\begin{array}{rl}
    Pr(F_{S_1}|F_{S_2}) & = Pr(\cap_{j\in S_1} \bar E_j|F_{S_2})\\
    & = \prod_{t=1}^r Pr(\bar E_{j_t}|F_{S_2}\cap_{u=1}^{t-1} \bar E_{j_u})\\
    & = \prod_{t=1}^r \big[1 - Pr(E_{j_t}|F_{S_2}\cap_{u=1}^{t-1} \bar E_{j_u})\big]\\
    & \le \prod_{t=1}^r \big[1 - x_{j_t}\big]=\prod_{j\in S_1} \big[1-x_j\big].
    \end{array}$$

2.  Numerator:
    
    $$Pr(E_k\cap F_{S_1}|F_{S_2}) \le Pr(E_k|F_{S_2}) = Pr(E_k) \le x_k\prod_{j\in S_1}\big[1-x_j\big].$$

It follows that 

$$\begin{array}{rl}
Pr(E_k|F_S) & \le \frac{x_k\prod_{j\in S_1}(1-x_j)}{\prod_{j\in S_1} (1-x_j)} = x_k,\\
Pr\big(\bigcap_{i=1}^n \bar E_i\big) & = \prod_{i=1}^n Pr(\bar E_i|\cap_{j=1}^{i-1} \bar E_j) \ge \prod_{i=1}^n (1-x_i).
\end{array}$$

Derandomization
===============

Pop Quiz and Examples
=====================

Sailor Problem
--------------

*There are 40 sailors. After finish the tasks, they return back to their
beds randomly. What the expected number of sailors who choose their
original bunk beds? What the probability of no sailor chooses his or her
original bunk?*

**Solution**: (1) Let $X_i$ is a binary indicator represents whether
sailor $i$ ($1 \le i \le n$) chooses his or her original bed. Assuming
that sailors’ choices are independent, i.e. multiple sailors are allowed
to pick the same bed. Since each sailor has one different original bed,
therefore $X_i$ obeys Bernoulli distribution, i.e. $P(X_i=1) = 1/n$ and
$P(X_i=0) = 1-1/n$. The number of sailors who choose their original beds
could be written as $X=\sum_{i=1}^n X_i$. According to the linearity of
expectation, we see that $\mathbb E(X) = \sum_{i=1}^n \mathbb E(X_i)$,
and $\mathbb E(X_i) = P(X_i=1) = 1/n$, then
$\mathbb E(X)=\sum_{i=1}^n \mathbb E(X_i) = 1$.

\(2) We know that $X=\sum_{i=1}^n$ obeys Binomial distribution, therefore
we can compute the probability of $X=m$ where $0\le m\le n$, i.e.
$P(X=m)=\binom{n}{m} (1/n)^m (1-1/n)^{n-m}$. Therefore, the probability
of no sailor chooses his or her original bunk bed is
$P(X=0) = 1 - \sum_{m=1}^n P(X=m) = \binom{n}{0} (1-1/n)^n = (1-1/40)^{40}$.

Expected number of steps to terminate
-------------------------------------

*There are 100 strings in a box. In each step, two string ends are
picked at random, tied together and put back into the box. The process
is repeated until there are no free ends. What is the expected number of
loops at the end of the process?*

**Solution**: Let $X_t$ be the number of loops in the box at step $t$
and $Y_t$ be the number of free ends in the box, where $t=0,1,\ldots$.
Therefore, the number of strings with free ends is $Z_t=Y_t/2$. When
$t=1$, $X_1=0$, $Y_1=2n$ and $Z_1=n$. In each step, two string ends are
randomly picked and tied together. The operation will produce two
possible outcomes, (i) the two ends come from the same string, it will
form a new loop; (ii) the ends come from different string, it will form
a longer string with two free ends.

Starting from step $t$, when case (i) occurs $X_{t+1}=X_t + 1$, and
$X_{t+1} = X_t$ when case (ii) occurs. Meanwhile, we have
$Y_{t+1} = Y_t - 2$ and $Z_{t+1} = Z_t - 1$, the number of free ends
reduces by 2, and the number of strings with free ends reduces by 1.
There are $n$ free strings, and it terminates after $n$ steps.

Let $U_t$ indicates a binary indicator to represent whether the random
operation in step $t$ forms a new loop, i.e. $U_t=\{0,1\}$. To obtain a
new loop, the two free ends randomly chose in step should come from the
same string. It’s easy to compute
$P(U_t=1) = Z_t/\binom{Y_t}{2} = 2 Z_t/[Y_t*(Y_t-1)] = 1/(Y_t-1)$, and
$P(U_t=0) = 1 - P(U_t=0)$.

According to the above results, we can get the number of loops at the
end of the process $$X_n = X_1 + \sum_{t=1}^n U_t.$$ With the fact that
$\mathbb E(U_t) = P(U_t=1)$, we have 

$$\begin{aligned}
\mathbb E(X_n) & = & X_1 + \sum_{t=1}^n \mathbb E(U_t) = \sum_{t=1}^n P(U_t=1) = \sum_{t=1}^n 1/(Y_t - 1)\\
& = & 1/(2n-1) + 1/(2n-3) + \cdots + 1/3 + 1/1\end{aligned}$$

Expected Sum
------------

Roll a standard dice to generate a sequence $d_1,d_2,\ldots,d_R$, where
$R$ is the first integer s.t. $d_R$ is even. What’s the expected sum
$d=\sum_i d_i$?

**Solution**:
$\mathbb E(d) = \sum_{k=1}^\infty \mathbb E (\sum_i (d_i)|R=k) Pr(R=k)$.
Since there are $p=1/2$ probability to get an even number in rolling a
dice, i.e. $Pr(R=k) = (1/2)^{k-1}(1/2) = (1/2)^k$, then
$\mathbb E(d) = \sum_{k=1}^\infty \sum_i \mathbb E(d_i|R=k) Pr(R=k) = \sum_{k=1}^\infty \sum_i E(d_i|R=k) 2^{-k}$.

Let’s compute $\mathbb E(d_i|R=k)$, $i=1,2,\ldots, R$. When $i<R$, $d_i$
is odd, we get $Pr(d_i=1|R=k) = Pr(d_i=3|R=k) = Pr(d_i=5|R=k) = 1/3$ and
$\mathbb E(d_i|R=k) = (1+3+5)/3=3$. When $i=R$, $d_i$ is even, and
$Pr(d_i|R=k)=1/3$. The possible values for $d_R$ is $\{2,4,6\}$ and the
expectation $\mathbb E(d_i\vert R=k) = (2+4+6)/3=4$. Therefore, we have

$$\mathbb E(d) = \sum_{k=1}^\infty [3(k-1) + 4] 2^{-k} =3\sum_{k=0}^\infty k 2^{-k} + 4 \sum_{k=1}^\infty 2^{-k}.$$

The geometric distribution $G(p)$ has expectation $1/p$, and
$\sum_{k=0}^\infty k 2^{-k} = 2$. As for
$\sum_{k=1}^\infty 2^{-k} = 1/2/[1-(1/2)] = 1$. As a result, we have
$\mathbb E(d) = 3\times 2+4\times 1=10$.

### Variance

Given $a\in \mathbb R$, prove that $Var (aX) = a^2 Var X$.

**Proof**:
$Var(aX) = \mathbb E(aX - \mathbb E(aX))^2 = \mathbb E(a^2X^2 - 2aX\mathbb E(aX) + a^2(\mathbb E(X))^2) = a^2 \mathbb E(X^2) - 2a^2[\mathbb E(X)]^2 + a^2 [\mathbb E(X)]^2 = a^2 (\mathbb E(X^2) - (\mathbb E(X))^2) = a^2 Var X$.

### Application of Chebyshev’s Inequality

Let $X_i$ be iid random variables, $1\le i\le n$. Given
$\mu=\mathbb E(X_i)$ and $\sigma^2=Var(X_i)$. Suppose
$X=\sum_{i=1}^n X_i/n$, show the best upper bound for $Pr(X\ge \delta)$,
if $\delta > \mu$.

**Solution**: Because $X_i$ are iid, then
$\mathbb E(X) = \sum_{i=1}^n\mathbb E(X_i)/n=\mu$,
$\sigma_X^2=Var(X_i)/n = \sigma^2/n$. Therefore, we have

$$\begin{array}{rl}
Pr(X\ge \delta) & = Pr(X-\mu_X\ge \delta - \mu_X) \le Pr(|X-\mu_X|\ge (\delta - \mu_X))\\
& \le Var(X)/(\delta - \mu_X)^2\\
& = \frac{\sigma^2}{n(\delta-\mu)^2}.
\end{array}$$

### Application of Chernoff Bound

Assigning $n$ individuals to two groups: control group and treatment
group. Each individual is assigned to the control group with probability
$P(X_i=1)=1/2$. Argue that the size of the control group is
$n/2\pm O(\sqrt{n\ln n})$ with probability $\ge 1-1/n$.

Let $X_i$ denote the $i$th individual is assigned to the control group.
Then $Pr(X_i=1)=Pr(X_i=0)=1/2$, $X=\sum_{i=1}^n X_i$ is the size of the
control group, and $\mu=\mathbb E[X]=n/2$. According to the Chernoff
bounds $Pr(|X-\mu|\ge a)\le e^{-2a^2/n},\forall 0 < a < \mu$,
$Pr(|X-\mu| \le c\sqrt{n\ln n}) = 1 - Pr(|X-\mu| \ge c\sqrt{n\ln n})$.
Let $a=c\sqrt{n\ln n}$, plugging into the above inequality gives

$$Pr(|X-\mu| \le c\sqrt{n\ln n}) \ge 1 - e^{-2c^2\ln n} = 1 - n^{-2c^2}.$$

Assign $c=1/\sqrt 2$, then $Pr(|X-\mu| \le c\sqrt{n\ln n}) \ge 1 - 1/n$.
We end the proof.
