---
title: "Some git command that you might don't know"
date: "26 Feb 2021"
---
As a developer we depend on git for our work, we might know and familliar with some of git command such as `git init` `git push` `git commit` `git clone`
and bunch of other git command, but here I share you some git command that might be usefull for you and I think some of you never use it before.

## 1 Switch to previous branch 

you can use `git checkout -` for switching from your current branch to previous branch, it will make your work easier when working in multiple branch
```
git branch
    development
    *main

git checkout -
    *development
    main

git checkout - 
    development
    *main
```

## 2 Show manual page
If you forgot git command that you need, at least you have to remember this command as a life savior `git help everyday`, this command will show you manual page in minimum set format that might help with your problem, but if you want to full tutorial introduction, you can use this command `git help tutorial`

## 3 Autocorrect 
If you put this configuration `git config --global help.autocorrect 10`, Git will automatically within 1 second (number 10 in the last configuration line mean 1 seconds) running correct command if developer make a mistake
```
git config --global help.autocorrect 10
git stats 
    WARNING: You called a Git command named 'stats', which does not exist.
    Continuing in 1.0 seconds, assuming that you meant 'status'.
    --- then running git status command
```
to deactivate this configuration simply `git config --global help.autocorrect 0`

## 4 Show file content inside a branch
to preview content of a file in other branch you can simply use this command `git show <branch>:<path/to/file>`

```
git show development:README.md
    --- This is content README.md from branch development 
git show main:README.md
    --- This is content README.md from branch main 
```

## 5 Show graphical Alternatif git commit 
Git command `git citool`, will give you a graphical interface to review modified files, stage them , put commit mesage and record new commit onto the current branch