<script setup>
import AddCatHabit from './components/AddCatHabit.vue'
import CatHabitList from './components/CatHabitList.vue'
import CatStats from './components/CatStats.vue'
</script>

<template>
  <header class="app-header">
    <img src="/src/assets/logo.png" class="logo" />
    <h1>Iris & Friends Habit Tracker</h1>
  </header>

  <main>
    <AddCatHabit />
    <CatHabitList />
    <CatStats />
  </main>
</template>

<style>
.app-header {
  text-align: center;
  padding: 20px;
}

.logo {
  width: 120px;
  border-radius: 50%;
}

main {
  max-width: 600px;
  margin: auto;
}
</style>
