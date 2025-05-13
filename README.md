# Simple Weather App (Vue 3 + Vite)

This project is a mobile-friendly weather web application built with Vue 3 and Vite. It displays the current weather, next hours, and next 5 days forecast for a selected city using data from the OpenWeatherMap API.

## Features

- Mobile-first, responsive design (iPhone preview style)
- City tab navigation (static for now)
- Next hours forecast (temperature, precipitation, icon, time)
- Next 5 days forecast (icon, day, date, description, high/low)
- Local weather icons from OpenWeatherMap
- Dynamic data fetching from OpenWeatherMap (free plan, using the /forecast endpoint)
- Environment variable support for API key

## Tech Stack

- [Vue 3](https://vuejs.org/) (Composition API, `<script setup>`)
- [Vite](https://vitejs.dev/) (fast dev/build tool)
- CSS (no frameworks, custom mobile styles)

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Set up your OpenWeatherMap API key:**
   - Create a `.env` file in your project root (next to `package.json`).
   - Add the following line, replacing `your_api_key_here` with your actual OpenWeatherMap API key:
     ```
     VITE_OPENWEATHER_API_KEY=your_api_key_here
     ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:5173/](http://localhost:5173/)

## Project Structure

- `src/App.vue` — Main app layout and weather data fetching
- `src/components/` — UI components (AppBar, CityTabs, NextHours, NextDays, FooterBar)
- `src/api/weather.js` — Weather API utility and city coordinates
- `src/assets/weather-icons/` — Local OpenWeatherMap weather icons

## Notes

- The app currently fetches weather for Los Angeles by default.
- You can easily extend it to support city switching or more features.
- Make sure your API key is valid and has access to the `/forecast` endpoint (free plan).

---
