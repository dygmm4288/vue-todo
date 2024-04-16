<script lang="ts" setup>
import { defineComponent } from "vue";
import TodoForm from "./components/TodoForm.vue";
import TodoList from "./components/TodoList.vue";
import { registerTodo } from "./provide/todo.provide";

defineComponent({ name: "App", components: { TodoForm, TodoList } });
registerTodo();
</script>

<template>
  <section>
    <h1>What is your focus on today</h1>
    <TodoForm />
    <TodoList />
  </section>
</template>
