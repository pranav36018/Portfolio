@echo off
title Build Portfolio
echo ==============================================
echo Building Production Bundle...
echo ==============================================
call npm.cmd run build
echo ==============================================
echo Build completed! Files are in the 'dist' folder.
echo ==============================================
pause
