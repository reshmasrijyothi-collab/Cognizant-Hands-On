#!/bin/bash
# ============================================================
# Exercise 1: Git Configuration, Notepad++ Integration,
#             and Adding a File to a Source Code Repository
# ============================================================

# ---------- STEP 1: Setup your machine with Git Configuration ----------

# 1. Check if Git client is installed properly
git --version

# 2. Configure user level configuration (name and email)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# 3. Verify the configuration is set properly
git config --global --list
# or check individual values
git config --global user.name
git config --global user.email


# ---------- STEP 2: Integrate notepad++.exe to Git and make it the default editor ----------

# 1. Check if notepad++ runs from Git Bash (run after adding it to PATH env variable)
notepad++

# 2. After adding Notepad++ install path to the PATH environment variable,
#    restart Git Bash and try again
notepad++

# 3. Create an alias for notepad++ inside the bash profile
#    Open the profile file in notepad++
notepad++ ~/.bash_profile
# Add this line inside the file, save and close:
#    alias notepad++="/c/Program\ Files/Notepad++/notepad++.exe"

# 4. Configure notepad++ as Git's default (core) editor
git config --global core.editor "notepad++ -multiInst -notabbar -nosession -noPlugin"

# 5. Verify notepad++ is set as the default editor (-e = editor)
git config --global -e
# This opens notepad++ and also shows the full global config:
git config --global --list


# ---------- STEP 3: Add a file to source code repository ----------

# 1. Create a new project folder "GitDemo" and initialize Git repo
mkdir GitDemo
cd GitDemo
git init

# 2. Verify - list all hidden files (the .git folder) in the working directory
ls -la

# 3. Create a file "welcome.txt" and add content to it
echo "Welcome to Git Hands-on Lab" > welcome.txt

# 4. Verify the file "welcome.txt" is created
ls -l

# 5. Verify the content of the file
cat welcome.txt

# 6. Check the status (file appears as "untracked")
git status

# 7. Add the file to be tracked by Git (staging area)
git add welcome.txt

# 8. Commit with a multi-line comment using the default editor (notepad++)
git commit
# Notepad++ opens - type your multi-line commit message, save, and close the file

# 9. Check status again - working directory & local repo are in sync
git status

# 10. Create the remote repository "GitDemo" in GitLab (via GitLab website)
#     Then link your local repo to the remote
git remote add origin <GitLab_repository_URL>

# 11. Pull from the remote repository (to sync any remote changes, e.g., README)
git pull origin master

# 12. Push local commits to the remote repository
git push origin master
