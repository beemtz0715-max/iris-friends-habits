<template>
  <div>
    <h2 class="section-title">Add a New Habit 🐾</h2>
    <div class="paw-divider">🐾 🐾 🐾</div>

    <input v-model="habitName" placeholder="Enter habit..." />
    <button @click="add">Add Habit</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCatHabitStore } from '../stores/catHabitStore'

const store = useCatHabitStore()
const habitName = ref('')

function add() {
  if (habitName.value.trim() !== '') {
    store.addHabit(habitName.value)
    habitName.value = ''
  }
}
</script>
