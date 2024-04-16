<script setup lang="ts">
import { defineComponent } from "vue";
import { useTodo } from "../provide/todo.provide";
import TodoItem from "./TodoItem.vue";
defineComponent({ name: "TodoList", components: { TodoItem } });

const { todos } = useTodo();
</script>

<template>
  <ul>
    <TodoItem v-for="todo in todos" :todo="todo" />
  </ul>
</template>
