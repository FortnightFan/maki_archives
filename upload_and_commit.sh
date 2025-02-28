#!/bin/bash

python3 uploadImages.py

# Stage all changes
git add .

# Commit changes
git commit -m "Automated commit Linux"

# Push changes to GitHub
git push origin master

echo "Commit and push done"