<script setup>
import { ref, watch, onMounted } from 'vue'
import AppBar from './components/AppBar.vue'
import CityTabs from './components/CityTabs.vue'
import NextHours from './components/NextHours.vue'
import NextDays from './components/NextDays.vue'
import FooterBar from './components/FooterBar.vue'
import { fetchWeather, cities } from './api/weather.js'

const cityTabs = ref([...cities])
const selectedTabIndex = ref(2) // Default: Los Angeles
const weather = ref(null)
const loading = ref(true)
const error = ref(null)
const allCities = ref([])

async function loadCityList() {
  const res = await fetch('/cities.json')
  allCities.value = await res.json()
  console.log('Loaded city list:', allCities.value.length, 'cities')
}

async function loadWeather() {
  try {
    loading.value = true
    const { lat, lon } = cityTabs.value[selectedTabIndex.value]
    weather.value = await fetchWeather(lat, lon)
  } catch (e) {
    error.value = e.message
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  await loadCityList()
  await loadWeather()
})
watch(selectedTabIndex, loadWeather)

function handleCityChange(index) {
  selectedTabIndex.value = index
}
function handleSearchCity(index) {
  const city = allCities.value[index]
  console.log('City selected from search:', city)
  // Check if city is already in tabs
  const tabIdx = cityTabs.value.findIndex(c => c.name === city.name)
  if (tabIdx !== -1) {
    selectedTabIndex.value = tabIdx
    console.log('City already in tabs, selecting tab', tabIdx)
  } else {
    // Replace last tab with new city
    cityTabs.value[cityTabs.value.length - 1] = city
    selectedTabIndex.value = cityTabs.value.length - 1
    console.log('Replaced last tab with city:', city)
  }
  console.log('Current cityTabs:', cityTabs.value.map(c => c.name))
}
</script>

<template>
  <div class="app-container">
    <AppBar :cities="allCities" @search-city="handleSearchCity" />
    <CityTabs :cities="cityTabs" :selected="selectedTabIndex" @change="handleCityChange" />
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
