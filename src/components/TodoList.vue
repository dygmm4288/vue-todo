<script setup lang="ts">
import { defineComponent } from "vue";
import { Todo } from "../types/todo.type";
import TodoItem from "./TodoItem.vue";
defineComponent({ name: "TodoList", components: { TodoItem } });
const emit = defineEmits<{
  "remove-todo": [number | string];
  "toggle-todo": [number | string];
}>();

const { todos } = defineProps<{ todos: Todo[] }>();

const removeTodo = (id: number | string) => {
  emit("remove-todo", id);
};

const toggleTodo = (id: number | string) => {
  emit("toggle-todo", id);
};
</script>

<template>
  <ul>
    <TodoItem
      v-for="todo in todos"
      :todo="todo"
      @remove-todo="removeTodo"
      @toggle-todo="toggleTodo" />
  </ul>
</template>
