<script setup>
import { ref } from 'vue'
import { useCatHabitStore } from '@/stores/catHabitStore'

const store = useCatHabitStore()
const habitName = ref('')
</script>

<template>
  <div class="add-box">
    <input v-model="habitName" placeholder="Add a cat task…" />
    <button @click="store.addHabit(habitName); habitName = ''">
      Add Task 🐾
    </button>
  </div>
</template>
