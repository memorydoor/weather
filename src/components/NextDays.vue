<template>
  <section class="card">
    <h2 class="card-title">Next 5 days</h2>
    <div class="days-list">
      <div class="day-row" v-for="(d, i) in days" :key="i">
        <div class="icon">{{ d.icon }}</div>
        <div class="info">
          <div class="day-date">{{ d.day }}, {{ d.date }}</div>
          <div class="desc">{{ d.desc }}</div>
        </div>
        <div class="temps">
          <span class="high">{{ d.high }}°</span>
          <span class="low">{{ d.low }}°</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const days = [
  { icon: '☀️', day: 'Fri', date: 'Nov 1', desc: 'Clear throughout the day.', high: 27, low: 11 },
  { icon: '☀️', day: 'Sat', date: 'Nov 2', desc: 'Clear throughout the day.', high: 28, low: 13 },
  { icon: '☀️', day: 'Sun', date: 'Nov 3', desc: 'Clear throughout the day.', high: 27, low: 14 },
  { icon: '🌤️', day: 'Mon', date: 'Nov 4', desc: 'Clear throughout the day.', high: 26, low: 11 },
]
</script>

<style scoped>
.card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  padding: 1rem 1rem 0.5rem 1rem;
  width: 100%;
  box-sizing: border-box;
}
.card-title {
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #222;
}
.days-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.day-row {
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid #f0f0f0;
}
.day-row:last-child {
  border-bottom: none;
}
.icon {
  font-size: 1.7rem;
  margin-right: 0.7rem;
}
.info {
  flex: 1 1 0;
}
.day-date {
  font-weight: 500;
  font-size: 1.05rem;
  color: #222;
}
.desc {
  font-size: 0.95rem;
  color: #888;
}
.temps {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-width: 48px;
}
.high {
  color: #222;
  font-weight: 500;
}
.low {
  color: #888;
  font-size: 0.95rem;
}
</style> 