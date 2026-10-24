@echo off
title Birthday Of Risala Ma'am Server
cd /d "%~dp0"
echo ======================================================================
echo    🌸 Starting Birthday Of Risala Ma'am Server 🌸
echo ======================================================================
echo Opening website in your default browser...
start "" "http://localhost:8080"
node server.js
pause
