<script lang="ts" setup>
import { Ref, defineComponent, ref } from "vue";
import TodoForm from "./components/TodoForm.vue";
import TodoList from "./components/TodoList.vue";
import { Todo } from "./types/todo.type";

defineComponent({ name: "App", components: { TodoForm, TodoList } });

const todos: Ref<Todo[]> = ref([
  { id: 1, description: "hello", isDone: false },
  { id: 2, description: "world", isDone: true },
  { id: 3, description: "vue", isDone: false },
  { id: 4, description: "yiruma", isDone: true },
]);

const addTodo = (description: string) => {
  const newTodo: Todo = {
    id: Date.now(),
    description,
    isDone: false,
  };

  todos.value.push(newTodo);
};
</script>

<template>
  <section>
    <h1>What is your focus on today</h1>
    <TodoForm @add-todo="addTodo" />
    <TodoList :todos="todos" />
  </section>
</template>
