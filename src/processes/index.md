---
title: Processes
type: processes
---

These are the official processes for Realm Digital developers.

## Planning


## Version Control

* Realmdigital uses git as the sole form of source code version control
* https://bitbucket.org/realmdigital - Bitbucket is used for hosting private git repositories
* https://github.com/realmdigital - GitHub is used for hosting public git repositories
* Developers/3rd parties **MAY NOT** use personal git repositories to store Realm Digital code. All code **MUST** be pushed to Realm Digital repositories.
* All developers **SHOULD** to use SSH keys for pushing/pulling from Bitbucket/GitHub.


### Branching Strategy

* All projects must follow the git-flow branching strategy - Read more [here](https://drive.google.com/a/realmdigital.co.za/open?id=1JPU1THo_QJ_aOMc8QxIskDjjYvjtzjMAmx4Hs1IeJ38) and [here](https://danielkummer.github.io/git-flow-cheatsheet/)
* All feature/bugfix/hotfix branches must be prefixed with a ticket number

### Committing

* Developers may **NOT** commit directly to “develop”
* Developers may **NOT** commit directly to “master”
* Commits should be small groups of related changes
* **DO NOT** create a single commit containing every change of the feature
* Commit messages should describe the changes. Messages like “WIP” do not offer any value.
* The secondary purpose of commit messages is help with reading the code’s history
* The primary purpose of commit messages is to make the sure developer is actively thinking about the work they are doing, and what this commit actually contains
* A developer must know **EXACTLY** what they are committing in every commit. If you are committing debug logging, temporary files, etc, it is because you are not actively reviewing your pre-commits
* A developer must know **EXACTLY** what branch they are committing to. If you commit to the incorrect branch, this is most likely the case of you not pre-reviewing the current working branch before committing.

### Pull Requests

* A pull request must be created prior to merging any feature, release or hotfix branches
* A pull request must be approved by 2 reviewers before it can be merged

### Code Review

* It is the responsibility of every developer to review their peer’s code
* Treat the approving of pull requests as your personal seal of approval
* It is the responsibility of the developer to ensure that their pull request is reviewed

### Pushing Code

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

[Read More here too](https://docs.google.com/document/d/1dumj6V6fGEbFhbmZiKoDM8My7kiGwN5RGiC-cWCbht8/edit#heading=h.al4m06g6xmm)

## Local Development Environment

### Debugging

* A debugger **MUST** be used by all developers on all projects
* A debugger means a tool that, at minimum, allows you to:
  - set breakpoints in code
  - pause at said breakpoints
  - step over, step into, continue, etc at said breakpoints
  - view/inspect the current scope and variable values

### Hardware (Full-time Realm Digital employees only)

* Realmdigital will supply a laptop running Ubuntu Linux
* Realmdigital might supply a monitor, keyboard and mouse
* You are responsible for the well being of any hardware assigned to you

### OS

* All developers must use a Unix based operating system (Linux, MacOS) as their daily OS
* Docker must be used for all local PHP development
* It is recommended to install local development services(nginx, MySQL, Postgres, Redis, elasticsearch, etc) using Docker

### IDE

* Developers may use any modern feature rich IDE/Editor they find most productive
* Realmdigital will supply a licenced copy of PHPStorm, and is the recommended IDE

### Tooling

* The Git CLI must be favoured
* No out of IDE git clients may be used, except TortoiseGit on Windows

## Dev/UAT Environments

* Every Dev/UAT site **MUST** have its own unique Basic Authentication credentials.
    * This also applies to 3rd party suppliers
    * Use [this tool](http://www.htaccesstools.com/htpasswd-generator/) to make your life easier
* These must be stored in Google Drive in the environment document(s) for that project/client.

## Live Environments

* **NO** deployments may be done to live environments without the approval of the Project Owner, Project Manager or Team Leader
