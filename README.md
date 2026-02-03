# WeatherScope Dashboard

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/wemiibidun/weatherscope-dashboard)
![GitHub languages count](https://img.shields.io/github/languages/count/wemiibidun/weatherscope-dashboard)
[![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://wemiibidun.github.io/weatherscope-dashboard/)

## Table of contents
* [Introduction](#introduction)
* [Screenshot](#screenshot)
* [Technologies](#technologies)
* [What I Built](#what-i-built)
* [Features](#features)
* [Deployment (CRA + GitHub Pages)](#deployment-cra--github-pages)
* [Link to Published Project](#link-to-published-project)
* [Status](#status)
* [Contact](#contact)

## Introduction
WeatherScope Dashboard is a React weather dashboard that lets users search for a city, pick a location, and view a multi-day forecast with hourly trends. It fetches location matches and forecast data from the OpenWeather API and presents it with interactive display controls.

## Screenshot
![WeatherScope preview](public/preview.png)

## Technologies
![React](https://img.shields.io/badge/React-239120?style=for-the-badge&logo=react&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)
![OpenWeather](https://img.shields.io/badge/OpenWeather-239120?style=for-the-badge&logo=openweather&logoColor=white)

* React — component-driven UI, state hooks, and user interactions
* CSS + Bootstrap — layout, styling, responsive grid, and card UI
* Chart.js — hourly trend visualization
* OpenWeather API — geocoding search + 5-day forecast data

## What I Built
* A two-step search flow (city search → location selection)
* Forecast cards that summarize daily conditions
* A settings panel to toggle temperature, wind, and humidity display
* An hourly conditions chart that responds to toggle settings
* A polished, responsive layout optimized for desktop and mobile

## Features
* Search for a city and choose from matching locations
* Fetch and display 5-day forecast data
* Toggle temperature, wind, humidity, and units
* Hourly chart with live updates based on settings
* Responsive layout with modernized Bootstrap styling

## Deployment (CRA + GitHub Pages)
1. Install the deploy tool:
   * `npm install --save-dev gh-pages`
2. Add scripts in `package.json`:
   * `"predeploy": "npm run build"`
   * `"deploy": "gh-pages -d build"`
3. Deploy:
   * `npm run deploy`
4. In GitHub: **Settings → Pages** → Source: **Deploy from a branch** → **gh-pages** → **/ (root)**.

## Link to Published Project
[WeatherScope Dashboard Webpage](https://wemiibidun.github.io/weatherscope-dashboard/)

## Status
Project is: _Complete_

## Contact
Created by [@wemiibidun](https://github.com/wemiibidun)
