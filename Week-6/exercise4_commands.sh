#!/bin/bash
# ============================================================
# Exercise 4: Resolving Merge Conflicts
# ============================================================

cd GitDemo

# 1. Verify master is in a clean state (no pending changes)
git status

# 2. Create a branch "GitWork" and switch to it, then add "hello.xml"
git checkout -b GitWork
cat <<EOF > hello.xml
<greeting>
    <message>Hello from GitWork branch - version 1</message>
</greeting>
EOF

# 3. Update the content of "hello.xml" and observe status
echo "<!-- updated comment in GitWork -->" >> hello.xml
git status

# 4. Commit the changes to reflect in the branch
git add hello.xml
git commit -m "Add and update hello.xml in GitWork branch"

# 5. Switch to master
git checkout master

# 6. Add a file "hello.xml" to master with DIFFERENT content (to force a conflict)
cat <<EOF > hello.xml
<greeting>
    <message>Hello from MASTER branch - different content</message>
</greeting>
EOF

# 7. Commit the changes to master
git add hello.xml
git commit -m "Add hello.xml with different content in master"

# 8. Observe the log for both branches
git log --oneline --graph --decorate --all

# 9. Check differences with Git diff tool
git diff master GitWork

# 10. Visualize differences with P4Merge (assuming already configured, see Exercise 3)
git difftool master GitWork

# 11. Merge the GitWork branch into master -> this will trigger a CONFLICT
git merge GitWork
# Output will show something like:
# CONFLICT (add/add): Merge conflict in hello.xml
# Automatic merge failed; fix conflicts and then commit the result.

# 12. Observe the git conflict markup inside hello.xml
cat hello.xml
# You will see markers like:
# <<<<<<< HEAD
# ... master version ...
# =======
# ... GitWork version ...
# >>>>>>> GitWork

# 13. Use the 3-way merge tool to resolve the conflict visually
git mergetool
# P4Merge opens with 3 panes (yours / base / theirs) plus the result pane
# Manually pick/merge the correct lines and save

# 14. After resolving, commit the merge result
git add hello.xml
git commit -m "Resolve merge conflict in hello.xml between master and GitWork"

# 15. Observe git status - mergetool typically creates a backup file (hello.xml.orig)
git status
# Add the backup file pattern to .gitignore
echo "*.orig" >> .gitignore

# 16. Commit the .gitignore update
git add .gitignore
git commit -m "Ignore mergetool backup files (*.orig)"

# 17. List all available branches
git branch -a

# 18. Delete the branch that was merged into master
git branch -d GitWork

# 19. Observe the final log
git log --oneline --graph --decorate
