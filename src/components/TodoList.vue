<script setup lang="ts">
import { defineComponent } from "vue";
import { Todo } from "../types/todo.type";
import TodoItem from "./TodoItem.vue";
defineComponent({ name: "TodoList", components: { TodoItem } });

const { todos } = defineProps<{ todos: Todo[] }>();
</script>

<template>
  <ul>
    <TodoItem v-for="todo in todos" :todo="todo" />
  </ul>
</template>
