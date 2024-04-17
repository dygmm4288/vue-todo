<script setup lang="ts">
import { defineComponent } from "vue";
import store from "../store/todo";
import TodoItem from "./TodoItem.vue";
defineComponent({ name: "TodoList", components: { TodoItem } });

const { todos } = store;
</script>

<template>
  <ul>
    <TodoItem v-for="todo in todos" :todo="todo" />
  </ul>
</template>
