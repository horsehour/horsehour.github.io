---
layout: blog-post
title: "Quick Cheat Sheet for a New Developer"
categories: Programming
tags: [programming, environment]
---

Quick cheat sheets (incomplete) of bash, Anaconda, PipPy, Git and Django. 

# Bash

## Files & Folders

```bash
# change directory

cd ~ #root
cd dir

# print current working dir
pwd 

# list files
ls -alh #a-all, h-human-readibility

# create new file/dir
vim 1.txt
echo "hello" >> 1.txt  # create new and feed it with hello
mkdir dir

# concateenate/print files
cat 1.txt #all
tail -n 1.txt #last n lines 
head -n 1.txt #first n lines

# cp file/dir
cp a.txt b.txt
cp -R dir1 dir2
cp -n a b #without overwritten

# rename/move
mv -f ./f1 ~/home/f2
find . -name "*txt" -exec mv {} /new/place \; # lots of files

# delete files/folder
rm file.txt
rm -r folder

# open file with specific app
open a.log -a ultraedit

# zip/unzip
zip -r data.zip data/
zip -r data.zip data2/1.txt  #update
unzip data.zip
```

## Searching & Count

```bash
grep key *.txt  #searching key from .txt files

top #cpu usuage
df -H, du -hs # free disk and used disk

# count number of files/lines/words
find dir -type f | wc -l   #files

# | is piping and redirection, >> for concatentate or override
ls -l | wc -l a.txt  #lines/words, or size of the file

du -hs * | sort #total Disk Usage of the directory in a Human reabible Summary mode
head -5 1.txt >> 2.txt #append the first 5 lines of 1.txt -> 2.txt
tail -n +2 -q a.txt >> b.txt #append from 2nd line to the end of file a.txt -> b.txt
cat 1.txt 2.txt > 3.txt #merge files 1.txt and 2.txt and output ->  3.txt 

curl -O http://www.horsehour.com #crawl page
``` 
*Note*: grep: **g**lobally search a **re**gular expression and **p**rint

## Processes
```bash
ps #list all current processes
ps -ef | grep java #searching all processes with 'java' in names
ps aux | grep `z`  # searching the Zombie processes
#kill processes
kill pid #by id
pkill -9 -u `id -u username` # by username
nohup java -jar horse.jar & # run processes to background
echo $! #recent process
```
*Note*: nohup: Close a terminal without killing a running process, or move running processes to background. If standard output is the terminal, it will be redirected to `nohup.out`.

## VPN, SSH and SCP
```bash
connect vpn.net.a.edu #vpn connection
ssh username@host #ssh login a remote server
scp username@host:/src/1.py local/  #copy from remote to local
scp local/*.java username@host:/src/ #copy from local to remote
```

## Turn on case insensitive auto-complete of Mac OSX terminal
```bash
echo "set completion-ignore-case On" >> ~/.inputrc
```

# Django

```python
print(django.get_version())
```
```bash
python3 -m django --version
```

## Structures
All applications must be created following some specific Django conventions. Django has many utilities to create related directories and files automatically, s.t. 
we can focus on the core code.

- `djsite`: a project container
    
- `manage.py`: a command line utility to interact with djsite
    
- `djsite/settings.py`: configuration file (e.g. set up a database)
    
- `djsite/urls.py:` the URL declarations for djsite
    
- `djsite/wsgi.py`: defines an entry-point for WSGI-compatible web servers to serve djsite
    
- `djapp/models.py`: creates models for application
    
- `djapp/views.py`: 
   
- `djapp/urls.py`: add a url in urls.py for each djapp and connect it to djsite/urls.py with an include clause
    
- `djapp/admin.py`: interface to register and manage models
    
- `djapp/templates`
    
- `djapp/migrations`: propagate changes made to the models (adding a field, deleting a model) into the database


## Utilities

- create a Django project
```bash
django-admin startproject djsite
```

- start the `Development` server
```bash
python3 manage.py runserver
```

- create a new application
```bash
python3 manage.py startapp djapp
```


# Git

## Manually create a new repo with name, e.g. `drl`
```bash
git clone https://github.com/horseour/drl.git
git add *
git commit -a
git push -u origin master
```

## Create, delete a branch, and navigate between branches
```bash
git branch bname     #create a new branch
git branch -a              #list all branches (including all remote ones)
git branch -d/-D bname  # delete an obsolete branch in safe mode/forcefully
git push origin :bname  #delete a branch on remote server
git branch -m newname  #rename current branch
git checkout bname (or master) #switch curr branch & update the working dir to match
```

## Merge branches to master
```bash
git merge branch1 branch2 #merge branch1 and branch2 into CURRENT branch
git pull origin rep1 rep2 #pulls in changes from the remote `rep1` and `rep2` branches
``` 

# PipPy

`PipPy` is a package manager used to install and manage software package in python.

```bash
- pip install pkgname
- pip install -r requirements.txt
- pip install pkgname --upgrade
- pip install pkgname -U
- pip install git+https://github.com/horsehour.git
- pip uninstall pkgname
```
# Activate Auto-complete on Terminal

- Check the current shell supported 
```bash
shell echo $SHELL 
```

- If the supported shell is _/bin/sh_ the smart auto-complete may be locked up, change the shell

- Check the existence of `.bashrc`
```bash
chsh -s /bin/bash username
chsh usermod -s /bin/bash username
```

# Compile Source Code & Execute

## C/C++ 
```bash 
gcc -Wall -Werror main.c
./a.out parameters
```
 
## GDB: All program to be debugged in gdb must be compiled by gcc with the -g option.
 
## MPI
```bash
mpicc mpi.c
mpiexec -n 5 ./a.out 
```
 
## Java
```bash
javac main.java
java main
java -jar main.jar parameters
```
 
## Python
```bash
python Main.py
python3 Main.py
``` 

## $\rm \LaTeX$
 ```bash
 pdflatex report.tex
 ```

## Html rendering with http.server
```bash
python3 -m http.server
```

# Project Building

## Ant
`build.xml` default filename of build used by Ant. When you run `ant` without parameter, it will use the file to figure out what to do.

## Maven
`pom.xml` is the default filename to describe a maven project so that when you run `mvn compile`, it will use the file to build the project.

## Eclipse
Eclipse can import a project based on an Ant build file or a pom file, and create the appropriate `.project` and `.classpth`.

## UltraEdit
A word file (`.uew`) is a plain text configuration file that UE uses to highlight keywords in source code files. It also supports other features like code folding, brace matching, function listing and more.

# Anaconda
Package Manager + Environment Manager + Additional Scientific Libraries.

```bash
# specify python version
conda install python=3.5
# list all created environments
conda env list
# create a new environment
conda create -n env_reinforcement
# activate env_reinforcement
source activate env_reinforcement
# list all installed packages in an environment
conda list
# install a package for an environment
conda install --name env_reinforcement scipy
# install opencv, see [^f1] 
conda install -c menpo opencv3

# full uninstall using Anaconda-Clean and simple remove
conda install anaconda-clean
# remove all Anaconda-related files and directories without being prompted to delete each one
anaconda-clean --yes
# remove all packages installed via pip
pip freeze | xargs pip uninstall -y
# remove unused archives installed via homebrew
brew cleanup 
# uninstall all the packages install through Homebrew
brew remove --force $(brew list) --ignore-dependencies

# export/create conda environment to/from yaml file for reproduce
conda env export > environment.yml
conda env create -f environment.yml
```

# Machine Learning with LightGBM, XGBoost and TensorFlow
## LightGBM[^f2]
```bash
build
python package install
```
## XGBoost [^f3]
```bash
build
python package install
```
## TensorFlow [^f4]
```bash
conda create -n tensorflow
source activate tensorflow
pip install --ignore-installed --upgrade TF_PYTHON_URL
```

# References
[^f1]: https://solarianprogrammer.com/2016/11/29/install-opencv-3-with-python-3-on-macos/
[^f2]: https://aichamp.wordpress.com/2017/02/07/my-experiment-using-lightgbm-microsoft-from-scratch-at-osx/
[^f3]: https://xgboost.readthedocs.io/en/latest/build.html
[^f4]: https://storage.googleapis.com/tensorflow/mac/cpu/tensorflow-1.3.0-py3-none-any.whl