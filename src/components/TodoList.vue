<script setup lang="ts">
import { defineComponent, inject } from "vue";
import { TODO_KEY } from "../provide/todo.provide";
import TodoItem from "./TodoItem.vue";
defineComponent({ name: "TodoList", components: { TodoItem } });

const { todos } = inject(TODO_KEY)!;
</script>

<template>
  <ul>
    <TodoItem v-for="todo in todos" :todo="todo" />
  </ul>
</template>
