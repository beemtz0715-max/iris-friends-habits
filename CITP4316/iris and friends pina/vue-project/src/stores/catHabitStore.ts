import { defineStore } from 'pinia'

export const useCatHabitStore = defineStore('catHabitStore', {
  state: () => ({
    habits: []
  }),

  getters: {
    totalHabits: (state) => state.habits.length,
    completedHabits: (state) => state.habits.filter(h => h.completed).length,
    catMood: (state) => {
      const done = state.habits.filter(h => h.completed).length
      if (done === 0) return "😾 Grumpy"
      if (done < state.habits.length) return "😺 Content"
      return "😻 Very Happy"
    }
  },

  actions: {
    addHabit(name: string) {
      this.habits.push({
        id: Date.now(),
        name,
        completed: false
      })
    },

    toggleHabit(id: number) {
      const habit = this.habits.find(h => h.id === id)
      if (habit) habit.completed = !habit.completed
    }
  }
})
