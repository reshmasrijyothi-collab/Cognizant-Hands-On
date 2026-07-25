#!/bin/bash
# ============================================================
# Exercise 5: Clean Up and Push Back to Remote Git
# ============================================================

cd GitDemo

# 1. Verify master is in a clean state
git status

# 2. List all available branches (local and remote)
git branch -a

# 3. Pull the latest changes from the remote repository into master
git pull origin master

# 4. Push the pending changes from Exercise 4 (Git-T03-HOL_002) to the remote repository
git push origin master

# 5. Verify the changes are reflected in the remote repository
#    a) Check the remote log matches local log
git log --oneline --graph --decorate --all

#    b) Fetch and compare with remote-tracking branch
git fetch origin
git log origin/master --oneline -5

#    c) Or simply log in to GitLab and confirm the commits/files
#       (hello.xml, .gitignore updates, etc.) appear in the GitDemo project
