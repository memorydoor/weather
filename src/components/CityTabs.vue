<template>
  <nav class="city-tabs">
    <div
      v-for="(city, idx) in cities"
      :key="city.name"
      class="tab"
      :class="{ active: idx === selected }"
      @click="emit('change', idx)"
    >
      {{ city.name }}
    </div>
  </nav>
</template>

<script setup>
const props = defineProps({
  cities: {
    type: Array,
    required: true
  },
  selected: {
    type: Number,
    required: true
  }
})
const emit = defineEmits(['change'])
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