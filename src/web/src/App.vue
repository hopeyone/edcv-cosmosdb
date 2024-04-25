<template>
  <div>
    <h1>To-do Lists</h1>
    <TodoCanvas />
    <h1>CV Canvas</h1>
    <CVCanvas />
  </div>
</template>

<script lang="ts">
import TodoCanvas from './components/TodoCanvas.vue'
import CVCanvas from './components/CVCanvas.vue'

export default {
  components: {
    TodoCanvas,
    CVCanvas,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
