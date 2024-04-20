<script lang="ts" setup>
import { removeTodo, toggleTodo } from "../store/todo";
import { Todo } from "../types/todo.type";

const { todo } = defineProps<{ todo: Todo }>();
</script>

<template>
  <li>
    <p>{{ todo.title }}</p>
    <button @click="toggleTodo(todo.id)">
      {{ todo.completed ? "working" : "done" }}
    </button>
    <button @click="removeTodo(todo.id)">remove</button>
  </li>
</template>
