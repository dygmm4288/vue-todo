<script lang="ts" setup>
import store from "../store/todo";
import { Todo } from "../types/todo.type";

const { todo } = defineProps<{ todo: Todo }>();
</script>

<template>
  <li>
    <p>{{ todo.description }}</p>
    <button @click="store.toggleTodo(todo.id)">
      {{ todo.isDone ? "working" : "done" }}
    </button>
    <button @click="store.removeTodo(todo.id)">remove</button>
  </li>
</template>
