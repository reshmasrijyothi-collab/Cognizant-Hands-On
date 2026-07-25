#!/bin/bash
# ============================================================
# Exercise 3: Branching and Merging
# ============================================================

cd GitDemo

# ---------------- BRANCHING ----------------

# 1. Create a new branch "GitNewBranch"
git branch GitNewBranch

# 2. List all local branches
git branch
# List all local AND remote branches (the "*" marks the current branch)
git branch -a

# 3. Switch to the newly created branch
git checkout GitNewBranch
# (Alternative modern command: git switch GitNewBranch)

# Add some files with content
echo "This file was added in GitNewBranch" > branchfile.txt

# 4. Commit the changes to the branch
git add branchfile.txt
git commit -m "Add branchfile.txt in GitNewBranch"

# 5. Check status
git status


# ---------------- MERGING ----------------

# 1. Switch back to the master branch
git checkout master

# 2. List differences between master and the branch (command line)
git diff master GitNewBranch

# 3. List visual differences using P4Merge tool
#    First configure P4Merge as the diff/merge tool (one-time setup):
git config --global diff.tool p4merge
git config --global difftool.p4merge.path "C:/Program Files/Perforce/p4merge.exe"
git config --global merge.tool p4merge
git config --global mergetool.p4merge.path "C:/Program Files/Perforce/p4merge.exe"

# Launch the visual diff
git difftool master GitNewBranch

# 4. Merge the source branch (GitNewBranch) into master (the trunk)
git merge GitNewBranch

# 5. Observe the commit log/graph after merging
git log --oneline --graph --decorate

# 6. Delete the branch after a successful merge
git branch -d GitNewBranch

# Observe git status and confirm branch is gone
git status
git branch -a
