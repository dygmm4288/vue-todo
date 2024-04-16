<script lang="ts" setup>
import type { Todo } from "../types/todo.type";

const { todo } = defineProps<{ todo: Todo }>();
</script>

<template>
  <li>
    <p>{{ todo.description }}</p>
    <button>{{ todo.isDone ? "working" : "done" }}</button>
    <button>remove</button>
  </li>
</template>
