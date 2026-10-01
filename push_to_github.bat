@echo off
title Push to GitHub
echo ========================================================
echo Push Portfolio to GitHub
echo ========================================================
set /p REPO_URL="Enter your GitHub repository URL (e.g. https://github.com/pranav36018/portfolio.git): "

git remote remove origin 2>nul
git remote add origin %REPO_URL%
git branch -M main
git push -u origin main

echo ========================================================
echo Done! Now head over to https://dashboard.render.com to deploy.
echo ========================================================
pause
