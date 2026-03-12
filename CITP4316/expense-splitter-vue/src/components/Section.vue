<template>
  <section class="section">
    <h2>{{ title }}</h2>
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'Section',
  props: {
    title: String
  }
}
</script>

<style scoped>
.section {
  margin-top: 20px;
}
.section h2 {
  margin-bottom: 10px;
}
</style>
