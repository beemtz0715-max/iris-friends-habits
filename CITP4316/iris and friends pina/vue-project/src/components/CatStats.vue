<script setup>
import { useCatHabitStore } from '@/stores/catHabitStore'
const store = useCatHabitStore()
</script>

<template>
  <div class="stats">
    <p>Total Tasks: {{ store.totalHabits }}</p>
    <p>Completed: {{ store.completedHabits }}</p>
    <p>Cat Mood: {{ store.catMood }}</p>
  </div>
</template>
