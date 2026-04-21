<template>
  <div>
    <h2 class="section-title">Cat Stats 📊</h2>
    <div class="paw-divider">🐾 🐾 🐾</div>

    <div class="cat-avatar">
      <img :src="catImage" alt="Cat Mood" />
    </div>

    <p><strong>Total Habits:</strong> {{ store.totalHabits }}</p>
    <p><strong>Completed:</strong> {{ store.completedHabits }}</p>
    <p><strong>Mood:</strong> {{ store.catMood }}</p>

    <div class="progress-wrapper">
      <div class="progress-bar" :style="{ width: progressPercent + '%' }"></div>
    </div>
    <p>{{ progressPercent }}% Complete</p>
  </div>
</template>

<script setup>
import { useCatHabitStore } from '../stores/catHabitStore'
import { computed } from 'vue'

const store = useCatHabitStore()

const progressPercent = computed(() => {
  if (store.totalHabits === 0) return 0
  return Math.round((store.completedHabits / store.totalHabits) * 100)
})

const catImage = computed(() => {
  if (store.catMood === "😾 Grumpy") return "/src/assets/cat-grumpy.png"
  if (store.catMood === "😺 Content") return "/src/assets/cat-content.png"
  return "/src/assets/cat-happy.png"
})
</script>

<style>
.cat-avatar img {
  width: 120px;
  display: block;
  margin: 0 auto 15px auto;
}

.progress-wrapper {
  width: 100%;
  height: 18px;
  background: var(--pink-light);
  border-radius: 10px;
  overflow: hidden;
  margin: 10px 0;
}

.progress-bar {
  height: 100%;
  background: var(--pink);
  transition: width 0.3s ease;
}
</style>
