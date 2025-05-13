<template>
  <nav class="city-tabs">
    <div class="tab" :class="{active: city === 'RIO DE JANEIRO'}">RIO DE JANEIRO</div>
    <div class="tab" :class="{active: city === 'BEIJING'}">BEIJING</div>
    <div class="tab active">LOS ANGELES</div>
  </nav>
</template>

<script setup>
const city = 'LOS ANGELES' // static for now
</script>

<style scoped>
.city-tabs {
  display: flex;
  background: #fff;
  border-bottom: 1.5px solid #e0e0e0;
  overflow-x: auto;
  white-space: nowrap;
}
.tab {
  flex: 1 1 0;
  text-align: center;
  padding: 0.75rem 0.5rem 0.5rem 0.5rem;
  color: #888;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  border-bottom: 2.5px solid transparent;
  transition: color 0.2s, border-bottom 0.2s;
}
.tab.active {
  color: #1976d2;
  border-bottom: 2.5px solid #d32f2f;
  background: #fff;
}
</style> 