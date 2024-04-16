<script lang="ts" setup>
import type { Todo } from "../types/todo.type";

const { todo } = defineProps<{ todo: Todo }>();
const emit = defineEmits<{
  "remove-todo": [number | string];
  "toggle-todo": [number | string];
}>();
</script>

<template>
  <li>
    <p>{{ todo.description }}</p>
    <button @click="emit('toggle-todo', todo.id)">
      {{ todo.isDone ? "working" : "done" }}
    </button>
    <button @click="emit('remove-todo', todo.id)">remove</button>
  </li>
</template>
