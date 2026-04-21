<script setup>
import AddCatHabit from './components/AddCatHabit.vue'
import CatHabitList from './components/CatHabitList.vue'
import CatStats from './components/CatStats.vue'
import { useCatHabitStore } from './stores/catHabitStore'

// ⭐ Correct Vite image import for the logo
import logo from './assets/logo.png'

const store = useCatHabitStore()
</script>

<template>
  <header class="app-header">
    <!-- ⭐ Use imported logo instead of /src/... -->
    <img :src="logo" class="logo" />
    <h1>Iris & Friends Habit Tracker</h1>
  </header>

  <main class="container">
    <div class="top-buttons">
      <button class="back-btn">⬅ Back</button>
      <button class="reset-btn" @click="store.resetHabits()">Reset</button>
    </div>

    <section class="section-card">
      <AddCatHabit />
    </section>

    <section class="section-card">
      <CatHabitList />
    </section>

    <section class="section-card">
      <CatStats />
    </section>

    <footer class="footer">
      <p>Made with ❤️ by Iris, Jasper, Raja & Cali</p>
    </footer>
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

.container {
  max-width: 700px;
  margin: auto;
  padding: 20px;
}

.section-card {
  background: white;
  padding: 20px;
  margin: 20px 0;
  border-radius: 18px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  border-left: 6px solid var(--pink);
}

.top-buttons {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.reset-btn {
  background: var(--pink-dark);
}

.back-btn {
  background: var(--pink-light);
  color: var(--text-dark);
}

.footer {
  text-align: center;
  padding: 20px;
  margin-top: 30px;
  color: var(--pink-dark);
  font-weight: bold;
  opacity: 0.8;
}
</style>
