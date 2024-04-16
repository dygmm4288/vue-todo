<script setup lang="ts">
import { defineComponent } from "vue";
defineComponent({ name: "TodoList" });

const todos = [
  { id: 1, description: "hello", isDone: false },
  { id: 2, description: "world", isDone: true },
  { id: 3, description: "vue", isDone: false },
];
</script>

<template>
  <ul>
    <li v-for="todo in todos">
      <p>{{ todo.description }}</p>
      <button>{{ todo.isDone ? "working" : "done" }}</button>
      <button>remove</button>
    </li>
  </ul>
</template>
