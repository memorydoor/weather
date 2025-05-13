<template>
  <header class="app-bar">
    <span class="title">Simple Weather</span>
    <div class="search-area">
      <input
        v-if="showInput"
        ref="inputRef"
        v-model="searchQuery"
        class="city-input"
        type="text"
        placeholder="Search city..."
        @keydown.esc="showInput = false"
      />
      <span class="search-icon" title="Search" @click="handleSearchClick">
        <svg width="24" height="24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
      </span>
      <ul v-if="showInput && filteredCities.length" class="city-dropdown">
        <li v-for="(city, idx) in filteredCities" :key="city.id" @click="selectCity(props.cities.findIndex(c => c.id === city.id))">
          {{ city.name }}
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, watch, nextTick } from 'vue'
const props = defineProps({
  cities: Array
})
const emit = defineEmits(['search-city'])
const showInput = ref(false)
const searchQuery = ref('')
const debouncedQuery = ref('')
let debounceTimeout = null

watch(searchQuery, (val) => {
  clearTimeout(debounceTimeout)
  debounceTimeout = setTimeout(() => {
    debouncedQuery.value = val
  }, 200)
})

const filteredCities = computed(() => {
  if (!debouncedQuery.value) return []
  return props.cities
    .filter(city => city.name.toLowerCase().startsWith(debouncedQuery.value.toLowerCase()))
    .slice(0, 20)
})

const inputRef = ref(null)
function handleSearchClick() {
  showInput.value = !showInput.value
  searchQuery.value = ''
  if (showInput.value) {
    nextTick(() => {
      inputRef.value && inputRef.value.focus()
    })
  }
}
function selectCity(idx) {
  emit('search-city', idx)
  showInput.value = false
  searchQuery.value = ''
}
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
.search-area {
  display: flex;
  align-items: center;
  position: relative;
}
.city-input {
  border: none;
  border-radius: 4px;
  padding: 0.2rem 0.5rem;
  font-size: 1rem;
  margin-right: 0.5rem;
  outline: none;
  max-width: 110px;
  width: 100%;
}
.city-dropdown {
  position: absolute;
  top: 2.2rem;
  right: 0;
  background: #fff;
  color: #222;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
  min-width: 160px;
  z-index: 10;
  list-style: none;
  padding: 0.2rem 0;
  margin: 0;
}
.city-dropdown li {
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background 0.2s;
}
.city-dropdown li:hover {
  background: #f0f4fa;
}
.search-icon {
  display: flex;
  align-items: center;
  cursor: pointer;
}
</style> 