<script lang="ts" setup>
import { useTodo } from "../provide/todo.provide";
import { Todo } from "../types/todo.type";

const { todo } = defineProps<{ todo: Todo }>();
const { removeTodo, toggleTodo } = useTodo();
</script>

<template>
  <li>
    <p>{{ todo.description }}</p>
    <button @click="toggleTodo(todo.id)">
      {{ todo.isDone ? "working" : "done" }}
    </button>
    <button @click="removeTodo(todo.id)">remove</button>
  </li>
</template>
