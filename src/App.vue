<script setup>
import { ref, watch, onMounted } from 'vue'
import AppBar from './components/AppBar.vue'
import CityTabs from './components/CityTabs.vue'
import NextHours from './components/NextHours.vue'
import NextDays from './components/NextDays.vue'
import FooterBar from './components/FooterBar.vue'
import { fetchWeather, cities } from './api/weather.js'

const selectedCityIndex = ref(2) // Default: Los Angeles
const weather = ref(null)
const loading = ref(true)
const error = ref(null)

async function loadWeather() {
  try {
    loading.value = true
    const { lat, lon } = cities[selectedCityIndex.value]
    weather.value = await fetchWeather(lat, lon)
  } catch (e) {
    error.value = e.message
  } finally {
    loading.value = false
  }
}

onMounted(loadWeather)
watch(selectedCityIndex, loadWeather)

function handleCityChange(index) {
  selectedCityIndex.value = index
}
</script>

<template>
  <div class="app-container">
    <AppBar />
    <CityTabs :cities="cities" :selected="selectedCityIndex" @change="handleCityChange" />
    <main class="main-content">
      <div v-if="loading">Loading weather...</div>
      <div v-else-if="error">Error: {{ error }}</div>
      <template v-else>
        <NextHours :hourly="weather.hours" />
        <NextDays :daily="weather.days" />
      </template>
    </main>
    <FooterBar />
  </div>
</template>

<style>
body {
  background: #222;
}
.app-container {
  width: 390px;
  height: 844px;
  min-height: unset;
  background: #e3f0fc;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', Arial, sans-serif;
  margin: 24px auto;
  border: 1.5px solid #aaa;
  border-radius: 28px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  overflow: hidden;
  position: relative;
}
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0.5rem 0.5rem 0.5rem;
  max-width: 400px;
  width: 100vw;
  margin: 0 auto;
  box-sizing: border-box;
}
</style>
