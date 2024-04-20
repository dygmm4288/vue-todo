<script lang="ts" setup>
import { defineComponent, onBeforeMount } from "vue";
import TodoForm from "./components/TodoForm.vue";
import TodoList from "./components/TodoList.vue";
import store, { fetchTodos } from "./store/todo";

defineComponent({ name: "App", components: { TodoForm, TodoList } });

onBeforeMount(() => {
  fetchTodos();
});
</script>

<template>
  <div v-if="store.loading">Loading...</div>
  <section>
    <h1>What is your focus on today</h1>
    <TodoForm />
    <TodoList />
  </section>
</template>
