---
layout: blog-post
title: "Little Guide to Programming in Python"
categories: Programming
tags: [programming, python, jupyter]
---

To learn a new programming language with specific goals can speed up the learning.  It's a little guide book for such purpose. When acquiring a new language, it's very nature to make some subconscious comparisons between the previous ones and the one you are learning. It's helpful to follow the specific sub-goals to get familiar to the basic data strucutres, for-loop, string, I/O, so on and so forth.

To generate a markdown file from a jupyter notebook`.ipynb`, run:
```bash
jupyter nbconvert guide.ipynb --to guide.md
```

# Basic
initial value, conversion between different types - upcast or downcast
- int, float, double, boolean
- char, string - slice, substring, index, trim, conversion between numeric value and string
- print and string format
- operators, enum
- math

# Recursive
for, while, do, if-else, continue, break - range, xrange

# Data Structures
initialize, length, assign value, add, delete, insert, visit, index, slice, compare (ref, empty), sort
- containers - list, map/dictionary, set, tuple, triple -- in or not in
- iterator - range, xrange, linespace

# I/O and sys
- File - I/O, append, buffer, lines, with block
- directory - list files, file names, delte/create file, exists, create new directory
- wilder chars, regular expression, zip, mapreduce

# Object Oriented programming
- function - lambda, arguments, return types, comments
- class - abstract class & interface/protocol, class attribute & instance attribute, toString, compare
- hashable, tostring, compare, iterable/iterator, try-exception-raise
- object serialization or deserialization
- module & packages & naming conventions
- import & requirements

# Advanced
## Mathematics
 - matrix
 - optimization
 - statistics - random numbers generator, sampling, distribution
 - numpy, pandas

## Machine Learning
 - classification, clustering, recommendation, ranking
 - reinforcement learning
 - deep learning
 - hyperparameter tuning - bayesian optimization
 - scipy, sigopt

## Chart Plot
 - scatter plot, histogram, lines - axis, legend, title, coloring, tick and grid
 - matplotlib, pandas

## Jupyter Notebook
 - Markdown
 - Embeded Languages: Python, Java, C/C++
 - LaTex
 - Magics

*import packages*

```python
import os
import sys
import pickle

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

import tensorflow as tf

%matplotlib inline
```


```python
## string concat
s = ""
for i in range(5):
    s += str(i) ## int -> string

print(s) ## print will auto-append a new line char '\n'

## tuple
a = s[0], s[-5], s[-2]
type(a) ## gives the type of a variable
```

    01234
    tuple




```python
int(a[2]) + 1 ## string -> int
```

    4



*** How to create empty {list, tuple, dict, string}? ***


```python
b = ([], (), {}, 0, 0.2, '', True)
for i in range(len(b)):
    print(type(b[i]))
```

    <class 'list'>
    <class 'tuple'>
    <class 'dict'>
    <class 'int'>
    <class 'float'>
    <class 'str'>
    <class 'bool'>


*** how to evaluate whether a list, tuple or dict, string is empty? ***


```python
for i in range(len(b)):
    if not b[i]: ## special way to know whether it's empty
        print(str(b[i]) + " is empty.")
    else:
        print(str(b[i]) + " is not empty.")
```

    [] is empty.
    () is empty.
    {} is empty.
    0 is empty.
    0.2 is not empty.
     is empty.
    True is not empty.


** Useful numpy.linespace to generate a sequence with a fixed width **


```python
# np.linspace(start, stop, num=50, endpoint=True, retstep=False, dtype=None)[source]
x = np.linspace(10, 100, num=10, endpoint=True)
for i in x:
    print(int(i))
type(x)
```

    10
    20
    30
    40
    50
    60
    70
    80
    90
    100





    numpy.ndarray



** [Hashable in Python](http://stackoverflow.com/questions/14535730/what-do-you-mean-by-hashable-in-python) **
> All of Python’s immutable built-in objects are hashable, while no mutable containers 
> (such as *lists* or *dictionaries*) are. Objects which are instances of user-defined 
> classes are hashable by default; they all compare unequal, and their hash value is their id().


```python
s1 = "it's great"
s2 = "it's great"  ## s2 = s1
print(hash(s1) == hash(s2))
```

    False



```python
t = {'i':hash('i'), 'u':hash('u')}
t
```




    {'i': 433611154635708497, 'u': 3049833569042992159}




```python
for k,v in t.items():
    print(k, v)
```

    i 433611154635708497
    u 3049833569042992159



```python
l = [1, 9, '2', True]
l[1:4:2]
```




    [9, True]




```python
l.reverse()
l
```




    [1, 9, '2', True]




```python
b = [2, 9, 0]
b.sort()
b.reverse()
b
```




    [9, 2, 0]




```python
print('it' in s1, 'we' in s1, s1.find('he'), s1.rfind('g'), s1.count('t'), s1.split(' '))
```

    True False -1 5 2 ["it's", 'great']



```python
s3 = "  welcome to python"
## trim() function
print("before:" + s3)
print("after:" + s3.strip())
```

    before:  welcome to python
    after:welcome to python



```python
print('{1} and {0}'.format('spam', 'eggs'))
```

    eggs and spam



```python
source = "/Users/chjiang/GitHub/csc/soc-3-hardcase/m10n10-1.csv"
with open(source, 'r') as f:
    for line in f:
        print(line, end = "") ## without newline
```

    10
    0,c0
    1,c1
    2,c2
    3,c3
    4,c4
    5,c5
    6,c6
    7,c7
    8,c8
    9,c9
    10,10,10
    1,7,9,4,2,1,0,6,5,8,3
    1,5,2,7,1,4,9,3,8,0,6
    1,5,2,7,8,6,0,3,4,9,1
    1,9,7,6,2,5,8,4,1,0,3
    1,3,8,4,2,6,5,9,7,0,1
    1,0,4,3,5,7,2,8,6,9,1
    1,9,7,5,0,2,4,1,6,8,3
    1,3,2,6,1,5,7,4,8,9,0
    1,7,0,3,9,6,4,2,1,5,8
    1,5,4,8,7,9,2,1,3,6,0


** Reading lines and skip some of them **


```python
with open(source, 'r') as f:
    m = int(f.readline())
    for _ in range(m + 1):
        next(f)          ## skip lines, f is an iterator
    for line in f:
        print(line, end = "") ## without newline
```

    1,7,9,4,2,1,0,6,5,8,3
    1,5,2,7,1,4,9,3,8,0,6
    1,5,2,7,8,6,0,3,4,9,1
    1,9,7,6,2,5,8,4,1,0,3
    1,3,8,4,2,6,5,9,7,0,1
    1,0,4,3,5,7,2,8,6,9,1
    1,9,7,5,0,2,4,1,6,8,3
    1,3,2,6,1,5,7,4,8,9,0
    1,7,0,3,9,6,4,2,1,5,8
    1,5,4,8,7,9,2,1,3,6,0



```python
profile = {}
with open(source, 'r') as f:
    m = int(f.readline())
    for _ in range(m + 1):
        next(f)          ## skip lines, f is an iterator
    for line in f:
        fields = [int(c) for c in line.split(",")]
        pref = tuple(fields[1:]) ## change list to tuple such that it's hashable
        profile[pref] = fields[0] ## add item to dict
```


```python
profile
```




    {(0, 4, 3, 5, 7, 2, 8, 6, 9, 1): 1,
     (3, 2, 6, 1, 5, 7, 4, 8, 9, 0): 1,
     (3, 8, 4, 2, 6, 5, 9, 7, 0, 1): 1,
     (5, 2, 7, 1, 4, 9, 3, 8, 0, 6): 1,
     (5, 2, 7, 8, 6, 0, 3, 4, 9, 1): 1,
     (5, 4, 8, 7, 9, 2, 1, 3, 6, 0): 1,
     (7, 0, 3, 9, 6, 4, 2, 1, 5, 8): 1,
     (7, 9, 4, 2, 1, 0, 6, 5, 8, 3): 1,
     (9, 7, 5, 0, 2, 4, 1, 6, 8, 3): 1,
     (9, 7, 6, 2, 5, 8, 4, 1, 0, 3): 1}




```python
next(iter(profile.items())) ## iteratively get access to all items
```




    ((0, 4, 3, 5, 7, 2, 8, 6, 9, 1), 1)




```python
profile
```




    {(0, 4, 3, 5, 7, 2, 8, 6, 9, 1): 1,
     (3, 2, 6, 1, 5, 7, 4, 8, 9, 0): 1,
     (3, 8, 4, 2, 6, 5, 9, 7, 0, 1): 1,
     (5, 2, 7, 1, 4, 9, 3, 8, 0, 6): 1,
     (5, 2, 7, 8, 6, 0, 3, 4, 9, 1): 1,
     (5, 4, 8, 7, 9, 2, 1, 3, 6, 0): 1,
     (7, 0, 3, 9, 6, 4, 2, 1, 5, 8): 1,
     (7, 9, 4, 2, 1, 0, 6, 5, 8, 3): 1,
     (9, 7, 5, 0, 2, 4, 1, 6, 8, 3): 1,
     (9, 7, 6, 2, 5, 8, 4, 1, 0, 3): 1}




```python
a, b, c = "123"; d, e, f = [2, 'w', True]
```


```python
c, e
```




    ('3', 'w')




```python
ll = [2,1,9]
ll.append(43)
print(ll)
```

    [2, 1, 9, 43]


1. list all files under given directory, get files' names using os.path
```python
import glob
import os
source = "./*"
for file in glob.glob(source):
    print(os.path.basename(file)) ## glob.glob: absolute path of files -> os.path.basename: file name
```

2. directory of current python file, its name and its parent
```python
import os
# file name
print(os.path.basename(__file__))
# absolute path
path = os.path.abspath(__file__) 
print(path)
# directory name of ABSOLUTE PATH
print(os.path.dirname(path))
```

** write string to file, read lines from file, remove file **


```python
source = "./temp.txt"
with open(source, "w+") as file:
    file.write("hello\n")
    file.write("what?\n")

with open(source, "r") as file:
    for line in file:
        print(line, end = "")

if os.path.exists(source):
#    print(os.remove(source))
    os.rename(source, source + "-2")
```

    hello
    what?



```python
a = [1, 4, 9, 0, 9]
len(a)
```




    5



** Tranform a list to a set **


```python
set(a) ## sorted set
```




    {0, 1, 4, 9}




```python
len(a) == 5 and len(set(a)) == 4
```




    True



*** Set operations ***


```python
s1 = set(['a', 'c', 'd', 'b']) # list -> set
s2 = set(('b', 'c', 'e', 'b')) # tuple -> set
s3 = set(['b', 'c'])
s4 = set(('b', 'c', 'e'))
```


```python
# union, intersection, difference, symmetric difference, subset, equal, true subset
(s1 | s2, s1 & s2, s1 - s2, s1 ^ s2, s3 <= s1, s4 == s2, s4 < s2, s4 <= s2) 
```




    ({'a', 'b', 'c', 'd', 'e'},
     {'b', 'c'},
     {'a', 'd'},
     {'a', 'd', 'e'},
     True,
     True,
     False,
     True)




```python
# equivalent functions
print((s1.union(s2), s1.intersection(s2), s1.difference(s2), s1.symmetric_difference(s2)))
print((s3.issubset(s1), s4.isdisjoint(s2), s4.issubset(s2)))
```

    ({'c', 'a', 'e', 'd', 'b'}, {'b', 'c'}, {'a', 'd'}, {'e', 'd', 'a'})
    (True, False, True)



```python
## membership
'a' in s1, 'ag' in s2
```




    (True, False)



*** Priority Queue ***


```python
from queue import PriorityQueue
```


```python
 # if maxsize=0, the priority queue will be infinity
q1 = PriorityQueue(maxsize=2)
q1.put((1, "a"))
q1.put((0, "b"))
print(q1.empty(), q1.full(), q1.maxsize)
```

    False True 2



```python
# add elements into quque
q2 = PriorityQueue()
q2.put((1, "a"))
q2.put((0, "b"))
q2.put((9, 'e'))
q2.put((-1, 'e'))
print(q2.empty(), q2.full(), q2.maxsize)
```

    False False 0



```python
# gets acess to elements in queue, it also remove elements from queue
while not q2.empty():
    print(q2.get())
```

    (-1, 'e')
    (0, 'b')
    (1, 'a')
    (9, 'e')



```python
class State(object):
    def __init__(self, val):
        self.val = val
    
    def __lt__(self, other):
        return self.val[0] < other.val[0]
    
    def __str__(self):
        return self.val.__str__()
```


```python
val1 = [0, 2, 4]
state1 = State(val1)
val2 = [90, 110]
state2 = State(val2)
val3 = [19, 100]
state3 = State(val3)

print("Before state3: " + str(state3))

q = PriorityQueue()
q.put(state1)
q.put(state2)
q.put(state3)

print("peel:" + str(q.get()))

val3[0] = 100
## the change affects the state, but does not changes the priority queue
print("After state3: " + str(state3))

print("peel:" + str(q.get()))
```

    Before state3: [19, 100]
    peel:[0, 2, 4]
    After state3: [100, 100]
    peel:[100, 100]



```python
v = [0, 9, 0, 9, 2, 91, 2]
```


```python
v.index(2, 5)
```




    6



*** Timing *** It's an example to compute the $\pi$ value from a series approximation:
$\pi = \sqrt{12} \sum\limits_{i=0}^\infty \frac{1}{(2 i + 1) 3^i}$


```python
import time
import math
import numpy as np
import matplotlib.pyplot as plt
%matplotlib inline

def compute_pi(max_i):
    diff = []
    value = 0.0
    sgn = -1
    fact = 1.0
    for i in range(max_i):
        sgn *= -1
        value += sgn * fact / (2 * i + 1)
        fact /= 3.0
        diff.append(2 * math.sqrt(3) * value - math.pi)
    plt.plot(np.array(range(max_i)), np.array(diff))
    return 2 * math.sqrt(3) * value

begin = time.perf_counter()
max_i = 100
pi = compute_pi(max_i)
end = time.perf_counter()
print("PI = ", str(pi))
print("Elapsed: " + str((end - begin)) + "s")
```

    PI =  3.141592653589794
    Elapsed: 0.11220011999830604s

*** argmin, argmax, get_rank ***


```python
def argmax(x):
    """
    retrieval all positions with element = max value in x
    :param x: list or tuple
    :return: all positions with element = max element in x
    """
    max_v = max(x)
    ret = []
    for i in range(len(x)):
        if x[i] == max_v:
            ret.append(i)
    return ret

def argmin(x):
    """
    retrieval all positions with element = min value in x
    :param x: list or tuple
    :return: all positions with element = min element in x
    """
    min_v = min(x)
    ret = []
    for i in range(len(x)):
        if x[i] == min_v:
            ret.append(i)
    return ret

def get_rank(x, ascend=True):
    """
    ranking positions of elements in x in ascending or descending order
    :param x: list or tuple
    :param ascend: boolean
    :return: ranking positions of elements in x
    """
    inv = 1
    if not ascend:
        inv = -1

    return sorted(range(len(x)), key=lambda i : inv * x[i])
```


```python
x = [1,2,4,4,1,3]
get_rank(x)
```




    [0, 4, 1, 5, 2, 3]




```python
argmin(x)
```




    [0, 4]




```python
argmax(x)
```




    [2, 3]



*** __init__ method is used when the class is called to initialize the instance, while the __call__ method is called when the instance is called ***


```python
class CLS(object):
    def __init__(self, a, b):
        self.a = a
        self.b = b

    def __call__(self, a, b):
        self.a = a
        self.b = b
        print((a,b))
```


```python
cls = CLS(2, 1) # initialize a CLS instance
cls(6, 7) # call instance with parameters
```

    (6, 7)


*** difference between python2 and python3 in division operation between two integers ***
```python
a = 1
b = 2

a/b = 0   # python2
a/b = 0.5 # python3
```

To avoid possible issue, just multiply the numerator (number above the line in a fraction) by 1.0, with no
need to change the denominator (number below the line in a fraction), i.e.

```python
a * 1.0 / b = 0.5 # works for both python2 and python3
```

*** Different ways to remove an item from a list ***


```python
lst = [8, 29, -1, 0, 89]
```


```python
lst.remove(0) # remove 0 from lst
print("rmv 0:" + str(lst))

lst.pop() # remove from lst the last element
print("pop:" + str(lst))

lst.pop(1) # remove from lst the element with the index
print("pop(1): " + str(lst))

del lst[0] # remove from lst the first element
print("del lst[0]: " + str(lst))
```

    rmv 0:[8, 29, -1, 89]
    pop:[8, 29, -1]
    pop(1): [8, -1]
    del lst[0]: [-1]


** With ** block is used to close some stream to release the assigned resource, 
e.g. file stream when open a file, or Tensorflow Session, the stream will be 
closed automatically at the end of the **with** block.

```python
with open('stv.csv', 'w+') as file:
    file.write('stv is a popular voting rule.')
    
import Tensorflow as tf

x = tf.constant([[3., 3.]])
y = tf.constant([[2.],[2.]])
product = tf.matmul(x, y)

with tf.Session() as sess:
    result = sess.run([product])
    print(result)
```

*** Difference between list append and extend ***


```python
a = [1, 2, 4]
a.append([5, 0])
print(a)

a.extend([8, 9])
print(a)
```

    [1, 2, 4, [5, 0]]
    [1, 2, 4, [5, 0], 8, 9]


*** Evaluate whether a key exists in dict using in ***


```python
d = {(2, 4, 5) : 1, (2, 5) : 2}
(2, 5, 3) in d
```




    False



*** Merging of two dict ***


```python
e = {(1, 3) : 2}
d.update(e)
d
```




    {(1, 3): 2, (2, 4, 5): 1, (2, 5): 2}




```python
e = {(1, 2) : 4}
d
```




    {(1, 3): 2, (2, 4, 5): 1, (2, 5): 2}




```python
a = {}
'a' in a
```




    False



***module import and __init__.py ***
__init__.py file is trying to direct the Python importer to a module under a directory.
If you want to include the module under certain directory, you have to give an __init__.py
file, even the file is empty, otherwise, the module under the directory may fail to import.


```python
source = "/users/chjiang/github/csc/temp.txt"
with open(source, "w+") as output:
    output.write("lhel" + "\n")
    output.write("lskdf" + "\n")
```


```python
s = set()
s.add(1)
s.add(2)
s
```




    {1, 2}




```python
type(s)
```




    set




```python
sorted(s)
```




    [1, 2]



*** shell basic: kill background process nohup ***
- search the PID of the last process executed
    echo $!
- kill the process using the pid
    kill -9 pid

*** serialization and deserialization using pickle ***
- export/import serialized object to/from file
 - pickle.dump(obj, file)
 - pickle.load(file)
- serialized/deserialized an object
 - bt = pickle.dumps(obj)
 - obj = pickle.loads(bt)
- If a pickle file contains multiple appended object, we can load them repeatedly until there is a EOF error:

```python
import pickle
objs = []
while 1:
    try:
        objs.append(pickle.load(f))
    except EOFError:
        break
```


```python
import pickle
```


```python
file = "/users/chjiang/github/csc/temp.pkl"
profile = {"C" : 100, "D" : 90}
pickle.dump(profile, open(file, "wb")) # write in binary
```


```python
prof = pickle.load(open(file, "rb"))
```


```python
print(prof)
```

    {'a': 100, 'b': 90}



```python
#*** record log using logging ***

import logging

# create logger with name `HoRseHouR`
logger = logging.getLogger('HoRseHouR')
logger.setLevel(logging.DEBUG)

# create file handler which logs even debug messages
file = "/users/chjiang/github/csc/temp.log"
fh = logging.FileHandler(file)
fh.setLevel(logging.DEBUG)

# create formatter
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
# add the formmatter to the handlers
fh.setFormatter(formatter)
# add the handlers to the logger
logger.addHandler(fh)

# add information to the logger
logger.info("I am riding and running")
logger.info("Look man, he fell off the horse. How hilarious! ;-)")
```


```python
# open file and write its name and all lines
with open(file, "r") as output:
    print(output.name)
    print(output.readline())
    print(output.readline())
    print(output.readline())
```


```python
# delete file
import os
file = "/users/chjiang/github/csc/temp.pkl"
os.path.exists(file)
# os.remove(file)
```




    True




```python
# basename
os.path.basename(file)
```




    'temp.log'




```python
import random
```


```python
# random sample without replacement, shuffle
import random
a = [1, 3, 4, 20]
random.sample(a, 2)
random.shuffle(a)
a
```




    [20, 4, 3, 1]




```python
a = [1, 23, 4]
b = [1, 3, 4]
a == b
```




    False




```python
c = np.array(a) + np.array(b)
```


```python
[sum(x)/2 for x in zip(a,b)]
```




    [1.0, 13.0, 4.0]




```python
zip(a,b)
```




    <zip at 0x1073181c8>




```python
a[1:3] = b
```


```python
a
```




    [1, 1, 3, 4]




```python
b = [5,6]
a.extend([1,2,1,4])
```


```python
sum([e == 1 for e in a])
```




    4




```python
def onehot(x, k=10):
    """
    Encode input elements with a one-hot vector

    :param x: nonnegative input elements
    :param int k: length of the code
    :return: onehot code of length k
    :rtype: list
    """
    code = [0] * k
    for i in x:
        code[i] = 1
    return code

```


```python
x = [0, 1, 4, 5]
onehot(x)
```




    [1, 1, 0, 0, 1, 1, 0, 0, 0, 0]




```python
a = {1:2, 1:4}
a
```




    {1: 4}




```python
print("{0:>2} {1:<30} {2:<2} {3:<10}".format(str([1]), str(x), str(x), str([0,9])))
print("{0:>2} {1:<30} {2:<2} {3:<10}".format(str([1]), str(x+[2]), str(x), str([1,9])))
```

    [1] [0, 1, 4, 5]                   [0, 1, 4, 5] [0, 9]    
    [1] [0, 1, 4, 5, 2]                [0, 1, 4, 5] [1, 9]    



```python
import sys
-sys.float_info.min < 0
```




    True




```python
# minimum float
-float('inf') < -sys.float_info.max
```




    True




```python
a, b, c = 1, 2, 0
```


```python
not 2
```
    False
