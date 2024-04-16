<script lang="ts">
import TodoForm from "./components/TodoForm.vue";

export default {
  name: "App",
  setup() {},
  components: {
    TodoForm,
  },
};
</script>

<template>
  <section>
    <h1>What is your focus on today</h1>
    <TodoForm />
  </section>
</template>
