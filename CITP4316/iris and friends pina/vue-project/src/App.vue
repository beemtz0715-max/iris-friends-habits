<template>
  <header class="app-header">
    <img src="/src/assets/logo.png" alt="Iris & Friends Logo" class="logo" />
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

h1 {
  color: var(--pink-dark);
  margin-top: 10px;
}
</style>
