#!/bin/bash
# ============================================================
# Exercise 2: Git Ignore - Ignoring unwanted files/folders
# ============================================================

# Prerequisite: Run this inside the existing "GitDemo" repository from Exercise 1
cd GitDemo

# 1. Create a ".log" file in the working directory
echo "This is a sample log entry" > application.log

# 2. Create a "log" folder with a file inside it
mkdir log
echo "Log folder sample content" > log/debug.log

# 3. Check status - notice application.log and log/ show up as untracked
git status

# 4. Create/update the .gitignore file to ignore *.log files and the log/ folder
cat <<EOF > .gitignore
# Ignore all files with .log extension
*.log

# Ignore the entire log folder
log/
EOF

# 5. Add and commit the .gitignore file itself so the rule is tracked
git add .gitignore
git commit -m "Add .gitignore to ignore log files and log folder"

# 6. Verify git status now - application.log and log/ should NOT appear
#    (Git will no longer show them as untracked files)
git status

# 7. Double-check ignored files explicitly
git status --ignored

# 8. Confirm a specific file is ignored (useful for troubleshooting)
git check-ignore -v application.log
git check-ignore -v log/debug.log
