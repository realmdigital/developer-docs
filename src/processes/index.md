---
title: Processes
type: processes
---

These are the official processes for Realm Digital developers.

## Version Control

* Realmdigital uses git as the sole form of source code version control
* https://bitbucket.org/realmdigital - Bitbucket is used for hosting private git repositories
* https://github.com/realmdigital - Github is used for hosting public git repositories
* Developers/3rd parties MAY NOT use private git repositories to store Realm Digital code. All code MUST be pushed to Realm Digital repositories.


## Branching Strategy

* All projects must follow the git-flow branching strategy - Read more [here](https://drive.google.com/a/realmdigital.co.za/open?id=1JPU1THo_QJ_aOMc8QxIskDjjYvjtzjMAmx4Hs1IeJ38) and [here](https://danielkummer.github.io/git-flow-cheatsheet/)
* All feature/bugfix/hotfix branches must be prefixed with a ticket number

## Committing

* Developers may **NOT** commit directly to “develop”
* Developers may **NOT** commit directly to “master”
* Commits should be small groups of related changes
* **DO NOT** create a single commit containing every change of the feature
* Commit messages should describe the changes. Messages like “WIP” do not offer any value.
* The secondary purpose of commit messages is help with reading the code’s history
* The primary purpose of commit messages is to make the sure developer is actively thinking about the work they are doing, and what this commit actually contains
* A developer must know **EXACTLY** what they are committing in every commit. If you are committing debug logging, temporary files, etc, it is because you are not actively reviewing your pre-commits
* A developer must know **EXACTLY** what branch they are committing to. If you commit to the incorrect branch, this is most likely the case of you not pre-reviewing the current working branch before committing. 

## Pull Requests

* A pull request must be created prior to merging any feature, release or hotfix branches
* A pull request must be approved by 2 reviewers before it can be merged

## Code Review

* It is the responsibility of every developer to review their peer’s code
* Treat the approving of pull requests are your personal seal of approval

## Pushing Code

* All code must be push daily before leaving for the day
* The branching strategy employed makes this seamless

## Environment - Branch Mapping

Unless otherwise agreed, and in very special, clearly defined circumstances, the following maps which Git branches are deployed to which environment. 

|                 |         |           |            |
|-----------------|:-------:| ---------:|-----------:|
| **Environment** | Dev     | UAT       | Production | 
| **Git Branch**  | develop | release/* | master     |

## Coding Standards

* The coding standards agreed upon must be followed - [Read More](https://docs.google.com/document/d/1tIacFvPzR9QfkqZZ4RAsO03WYfkxUWotbtacb0vHZ_A)
* These standards are open to change through general consensus

## Style Guide

[Read More](/style-guide)



