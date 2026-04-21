<script setup>
import { useCatHabitStore } from '@/stores/catHabitStore'
const store = useCatHabitStore()
</script>

<template>
  <ul>
    <li v-for="habit in store.habits" :key="habit.id">
      <label>
        <input type="checkbox" v-model="habit.completed" @change="store.toggleHabit(habit.id)" />
        {{ habit.name }}
      </label>
    </li>
  </ul>
</template>
