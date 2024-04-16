<script setup lang="ts">
import { defineComponent } from "vue";
import { Todo } from "../types/todo.type";
import TodoItem from "./TodoItem.vue";
defineComponent({ name: "TodoList", components: { TodoItem } });

const todos = [
  { id: 1, description: "hello", isDone: false },
  { id: 2, description: "world", isDone: true },
  { id: 3, description: "vue", isDone: false },
] as Todo[];
</script>

<template>
  <ul>
    <TodoItem v-for="todo in todos" :todo="todo" />
  </ul>
</template>
