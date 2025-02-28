@echo off

REM Run the Python script
python uploadImages.py

REM Stage all changes
git add .

REM Commit changes
git commit -m "Automated commit Windows"

REM Push changes to GitHub
git push origin master

echo Commit and push done
pause