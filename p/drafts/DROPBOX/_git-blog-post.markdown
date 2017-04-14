# Overview

## Git uses three-tree architecture.
- working
- staging index
- repository

## SHA-1 Hash Values
The 40 digit number that is called the "Commit:"
Get generates a checksum for each change set
Git uses SHA-1 hash algorithm to create checksums
They are unique enough that when you reference a commit, you can grab the first 10+ digits and git will know which SHA you are referring to.

## Head Pointer
HEAD is a variable
Head always points to the 'tip' of the current branch in the repo.
Last state of repo, what was last checked out
Points to the parent of the next commit - where commit writing takes place.
The place where we'll start 'recording' next.

## Setup
## Configuration
Three levels of configuration: System, User, Project

## Files in .git
HEAD
config _Only File you should consider changing_
description hooks
info
objects
refs


### System

Not used very often
Found at _/etc/gitconfig_

    git config --system

### Global (User Level)
Found at _~/.gitconfig_

    git config --global
(Global means user)

**Examples**

    git config --global [put whatever you want in here to be added to User Configurations]
    git config --global user.name "Dave Woodall"
    git config --global core.editor "mate -w"

_I think that the above prefix (user & core) create categories for the items added to gitconfig file._


**See what's in the config**

    git config --list

### Project

Found at _myProject/.git/config_

    git config

keeps track of changes in text


# Components
## Remotes
#### Fetch
Fetch is when we get code from remotes.
It brings into origin/master, but doesn't bring into master branch until we do a merge.

#### Origin / master
Origin / Master is a branch that stays in sync with the remote server's Master.
It will not be the same as my master until I merge the two.

#### Push
Sends code to the repo


#### Adding a remote

    git remote add [alias] [url]

This basically creates a branch that will match up with the remote repo.


#### Remove a remote

    git remote rm origin


### Creating Remote branchs

    git push -u origin


#### See remote branches

    git branch -r

#### See all branches local and remote

    git branch -a

### Cloning a remote repo

    git clone [https...]

#### -u

is an option that says we'll be tracking that branch in the remote repo.

#### Adding a non-tracked branch to the repo

If you ever want a branch that's not tracking, but you want to make it tracking

    git config branch.[branch name to track].remote origin

Example

    git config branch.sub_nav.remote origin

    git config branch.[branchName to track].merge refs/heads/[branch to merge onto]

Example;

    git config branch.sub_nav.merge refs/heads/master

##### Another way to add an untracked branch

    git branch --set-upstreem [branch to add] [origin / place to add it]
    git branch --set-upstreem sub_nav origin/sub_nav

### Fetching changes from a remote repo

Fetch syncs origin/master with whatever is on remote repo.

    git fetch

or,

    git fetch origin

### When to fetch

1. fetch before you work
2. fetch before you push
3. fetch often (it's not destructive so it will not harm anything)

### Merging in fetched changes
Fetching does not move the changes into your local master.

**git is in charge of 'origin/master' and we can't check it out. but it's just a branch**

    git merge origin/master

_That moves the origin master onto our local master_

###  git pull = git fetch + git merge
     git pull = git fetch + git merge

Good it's very convenient.
Bad - forget that it's two actions in one.


#### Fast forward merge vs real merge

**Fast forward**
In FF, git checks to see if it sees the master HEAD is in the ancestry.
There was no need to make a new commit so it just made the non-master branch the new HEAD.


**True Merge**



### Checking out remote branches

    git branch [new branch name] [starting point]

Example

    git branch sub_nav origin/sub_nav

Alternative

    git checkout -b sub_nav origin/sub_nav







## Branches
- try new ideas
- isolate features or sections of work
- one working directory
- fast context switching

Git requires you to commit changes before switching back and forth between branches

Show what branches available

    git branch

Also, you can see them in

    .git/refs/heads

Git new branch

    git branch new_feature

### Create and Switch branches at once

    git checkout -b [name]

checks out the new branch

### Compare branches

    git diff [branch]..[branch]

Or shorter version of diffs

    git diff  --color-words[branch]..[branch]

Find out  everything that sits in same branch

    git branch --merged

shows us all branches that are completely included in branch

### Renaming branches

    git branch --move [old branch name] [new branch name]

Or shortened with **-m**,

    git branch -m [old branch name] [new branch name]


### Deleting branches

    git branch --delete [branch name]
    git branch -d [branch name]

Can't delete branches you are on.

If you have uncommited changes, then you need to use -D if you really want to delete

    git branch -D [branch name]


## Stages

### Commits


#### Investigating specific commits

    git show [SHA key]


** Format options**

    git show --format=oneline HEAD

One before HEAD;

    git show --format=oneline HEAD^^

Back 3 from head

    git show --format=oneline HEAD~3


#### Referencing commits
You can reference a parent commit

    HEAD^
grandparent commit

    HEAD~2
or

    HEAD^^


#### each commit has
- commit id
- author
- date
- message

## Files
### Deleting files

    git rm [nameOfFile]

### Moving and renaming files

    git mv [file1] [newFile2]
renames and adds to staging index

### Undo working directory changes

Say you make a mistake, like delete navigation.
Go to git status and see differences. Now, you'll want the 'Repo' version and not the working directory version of the file.

    git checkout  -- [name of file.html]

The "--" is a double check to confirm that we stay on the same branch.

### Unstaging files

When you try to put together a commit from a variety of files. And you accidentally add a file that is not part of the commit. So you need to unstage

    git reset HEAD [name of file]


### Amending commits

Most recent commits, the one that HEAD points to can be editable.

    git commit --amend -m ""

Using --amend changes the head, so you don't have two logs of very simple changes.


### Retrieving old versions

grab first 10 characters of SHA

    git checkout 1fhal0-SHA-you-want-ash2dn2 -- [name of file]

A good message is "this commit reverts commit 123"


### Reverting a commit

A simple revert from "B" back to "A"

    git revert [SHA key]


### Use rest to undo commits
**USE with CAUTION!**

Allows us to specify where the HEAD should point to, and then works from that new point and moving forward.

    git reset

#### Options

    git reset --soft [SHA key]
SAFEST
Does not change the staging index or working directory.
Means you can use this to go back, but the items _after_ the reset are still in staging. You can even go back to the most _actual_ head but doing <code>git reset --soft</code> a second time.

    git reset --mixed (default) [SHA key]

Moves HEAD and changes stanging index to match repo
does not change the working directory

    git reset --hard [SHA key]
Changes staging index and working directory to match repo.
For when things have gone completely wrong. This loses everything that comes after.
This is basically a 'Rewind'.

### Remove untracked files

    git clean -n
This is a test run telling you what will be removed.

    git clean -f
This will throw away anything that's not in the repo.

### Ignore files with .gitignore

Examples
* - wildcard
! - not ignore (would be tracked)
all files in directory using a trailing '/'

#### Some files to ignore
- compiled source code
- packages & compressed files
- logs and databases
- operating system generated files
- user-uploaded assets(images, PDF's, videos)

check out these two URL's for ideas of what to ignore
[ignoring files](https://help.github.com/articles/ignoring-files)
[git ignore](https://github.com/github/gitignore)


### Globally ignore files

ignore files in all repos
user-specified instead of repo-specific

    git config --global core.excludesfile ~/.gitignore_global
(you can call it anything you want, don't have to call it '.gitignore_global')
Make the changes (i.e. files you want to ignore.)

    git config --global core.excludesfile ~/.gitignore_global
Will add the git config file as follows.




# Insights

## Diffs

### Viewing changes with diff
To see what changes have been made on a line by line basis against the working repo

    git diff

--- is the old version
+++ is the new version

#### Options

    git diff [first_file.txt]
shows only diffs related to specific file.

    git diff --staged
Only shows differences that are in the staging directory

    git diff --color-words [optional filename]
puts the changes side by side

#### Get more than truncated version

When in diff use the command

"minus(-)" + shift + s + return

That will show the full version of the text that has been changed beyond the truncated version.

Send it back to truncated
"- S"

### Compare commits with Diff

Not just a specific file, but the directory of all the files in a commit.

Shows the differences between the SHA and current directory

    git diff [SHA key]

Or, review a speific file between the two commit diffs

    git diff [SHA key] [filename]

Or commits between two commits

    git diff [SHA key]..[SHA key]
    git diff [SHA key]..HEAD
    git diff [SHA key]..HEAD^^

**Get some stats**

    git diff [SHA key]..HEAD --stat --summary

**Disregard white space**

    git diff  -b [SHA key]..HEAD --stat --summary
_Ignores whitespace changes_

    git diff  -w [SHA key]..HEAD --stat --summary
_Ignores all spaces_


## Logs

Viewing the commit log

    git log

### Formatting options
    git log -n

##### Find one line

    git log --oneline
gives online list of what's in our logfile

**Shows the last 3 commits (Can do whatever number wanted, 5, 10, etc.)**

    git log --oneline -3

##### Output options
In addition to 'oneline' there are some other formatting options;

    git log --format=short
    git log --format=email
    git log --format=raw
    git log --format=full

##### Date related Searches
    git log --after="2012-6-15"
    git log --since="2012-6-15" (synonym to after)

    git log --until="2012-6-15"
    git log --before="2012-6-15" (synonym to until)

Everything before.

**Combine and use easier syntax;**

    git log --since="2 weeks ago" --until="3 days ago"
    git log --since=2.weeks --until=3.days

(Notice that the last one doesn't need "" 2.weeks, not "2.weeks")

##### Find by author

    git log --author="Kevin"

##### Grep finds

    git log --grep="Init"
matches any commit messages with those terms in it.
like 'bugfix', or 'javascrip'

##### Find a range of commits

From one key to another specific one;

    git log --oneline [SHA key]..[SHA key]

Or from one SHA in a specific file

    git log --oneline [SHA key]..index.html


##### Insight commands for summaries.

    git log -p

    git log --stat

    git log --summary

**shows the branches**

    git log --graph

##### Good summary;

    git log --oneline --graph --all --decorate

## The Tree (Tree-ish)


### Explore tree listing
**Q - What is the point of this view/output?**

    git ls-tree HEAD

Shows up the commits up to that point

    git ls-tree master

shows the branch

    git ls-tree master assets/

shows the files in the director

    git ls-tree master^ asset/

shows commit in the previous state, the parent state.

#### Tree vs Blob
Tree is a directory
Blog is a file - could be any type of file.



# Workflow
make changes
add changes
commit changes to the repo with a message
keep file commits together
separate different projects in different commits