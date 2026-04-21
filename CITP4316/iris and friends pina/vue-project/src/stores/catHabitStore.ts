import { defineStore } from 'pinia'

export const useCatHabitStore = defineStore('catHabits', {
  state: () => ({
    habits: [] as { id: number; name: string; done: boolean }[]
  }),

  getters: {
    totalHabits: (state) => state.habits.length,
    completedHabits: (state) => state.habits.filter(h => h.done).length,
    catMood: (state) => {
      const done = state.habits.filter(h => h.done).length
      if (done === 0) return "😾 Grumpy"
      if (done < state.habits.length) return "😺 Content"
      return "😻 Happy"
    }
  },

  actions: {
    addHabit(name: string) {
      this.habits.push({
        id: Date.now(),
        name,
        done: false
      })
    },

    toggleHabit(id: number) {
      const habit = this.habits.find(h => h.id === id)
      if (habit) habit.done = !habit.done
    },

    resetHabits() {
      this.habits = []
    }
  }
})
