<template>
  <div>
    <h2 class="section-title">Your Cat’s Habits 🐱</h2>
    <div class="paw-divider">🐾 🐾 🐾</div>

    <div v-if="store.habits.length === 0">
      No habits yet — add one above!
    </div>

    <ul>
      <li v-for="habit in store.habits" :key="habit.id">
        <label>
          <input type="checkbox" v-model="habit.done" @change="store.toggleHabit(habit.id)" />
          {{ habit.name }}
        </label>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useCatHabitStore } from '../stores/catHabitStore'
const store = useCatHabitStore()
</script>

<style>
ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 8px 0;
}
</style>
