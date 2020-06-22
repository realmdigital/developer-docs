---
title: Simple Git Workflow
type: cookbook
order: 1
---

## Very beginning (only once)
```shell script
$ git config --global user.email "yourname@realmdigital.co.za"
$ git config --global user.name "Your Name"
```
## Git procedures (per project, once only)
Before you start working on a project you must issue the following command ONCE per project.
```shell script
// This initializes git-flow for this project
$ git flow init -d
```
## Every time you want to do some work on a project
```shell script
// get latest code from server
$ git checkout develop
$ git pull
// create your own branch, no spaces
$ git flow feature start MY_FEATURE
```
Make your changes......
Dont work on the same branch all the time.
Keep it small to enable easy reviews and avoid code conflicts.

### Saving your work
#### Per unit of work done
```shell script
$ git add .
$ git commit -m "commit message"
$ git pull origin develop // (DO THIS EVERY DAY - Pull latest copy from server, and merge it with your code, so you have all changes here)
```
Try NOT sit on the same branch for a long time.

### Catching up your current branch with `develop`
```shell script
$ git checkout develop
$ git pull
$ git checkout feature/myFeature
$ git merge develop
```

### When ready to "finish your work"
* Create Pull request
* Wait for 2 people to approve, and make changes if necessary

#### After code review
```shell script
// finish your work, and merge back into develop [locally]
$ git flow feature finish MY_FEATURE
// push your locally merged develop branch to the server
$ git push
```

### Cleaning your local repository

```shell script
$ git remote prune origin // deletes all remote branches that no longer exist in origin
$ git branch -d feature/[branchMergedViaPullRequest] // deletes a local branch
```
