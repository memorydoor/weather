<script setup>
import AppBar from './components/AppBar.vue'
import CityTabs from './components/CityTabs.vue'
import NextHours from './components/NextHours.vue'
import NextDays from './components/NextDays.vue'
import FooterBar from './components/FooterBar.vue'
</script>

<template>
  <div class="app-container">
    <AppBar />
    <CityTabs />
    <main class="main-content">
      <NextHours />
      <NextDays />
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
