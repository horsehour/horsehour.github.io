#!/bin/bash

bundle exec jekyll build

# git add *
# avoid file of size exceeding 100m

# git config --global user.name horsehour
# git config --global user.email jiangchunheng@gmail.com

find * -size -100M -type f -print0 | xargs -0 git add
git commit -a
git push -u origin master
