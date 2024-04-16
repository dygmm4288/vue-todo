<script lang="ts" setup>
import { inject } from "vue";
import { TODO_KEY } from "../provide/todo.provide";
import { Todo } from "../types/todo.type";

const { todo } = defineProps<{ todo: Todo }>();
const { toggleTodo, removeTodo } = inject(TODO_KEY)!;
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
