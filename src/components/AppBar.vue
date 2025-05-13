<template>
  <header class="app-bar">
    <span class="title">Simple Weather</span>
    <span class="search-icon" title="Search">
      <svg width="24" height="24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    </span>
  </header>
</template>

<script setup>
</script>

<style scoped>
.app-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #1976d2;
  color: #fff;
  padding: 0.75rem 1rem;
  font-size: 1.25rem;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(0,0,0,0.04);
}
.title {
  letter-spacing: 0.5px;
}
.search-icon {
  display: flex;
  align-items: center;
  cursor: pointer;
}
</style> 