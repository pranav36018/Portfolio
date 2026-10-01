@echo off
title Pranav V Rao Portfolio Dev Server
echo ==============================================
echo Starting Portfolio Dev Server...
echo Opening http://localhost:5173 in your browser
echo ==============================================
start http://localhost:5173
call npm.cmd run dev -- --host
pause
