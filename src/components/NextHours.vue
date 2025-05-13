<template>
  <section class="card">
    <h2 class="card-title">Next hours</h2>
    <div class="hours-row">
      <div class="hour" v-for="(h, i) in hours" :key="i">
        <div class="temp">{{ h.temp }}°</div>
        <div class="precip">{{ h.precip }}%</div>
        <div class="icon">☀️</div>
        <div class="time">{{ h.time }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
const hours = [
  { temp: 20, precip: 0, time: '3:00 PM' },
  { temp: 23, precip: 0, time: '4:00 PM' },
  { temp: 25, precip: 0, time: '5:00 PM' },
  { temp: 26, precip: 0, time: '6:00 PM' },
]
</script>

<style scoped>
.card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  padding: 1rem 1rem 0.5rem 1rem;
  margin-bottom: 0.5rem;
  width: 100%;
  box-sizing: border-box;
}
.card-title {
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #222;
}
.hours-row {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
}
.hour {
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
  color: #444;
}
.temp {
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.1rem;
}
.precip {
  font-size: 0.9rem;
  color: #1976d2;
  margin-bottom: 0.2rem;
}
.icon {
  font-size: 1.5rem;
  margin-bottom: 0.2rem;
}
.time {
  font-size: 0.95rem;
  color: #888;
}
</style> 