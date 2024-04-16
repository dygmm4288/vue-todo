<script lang="ts" setup>
import { Ref, defineComponent, ref } from "vue";
import TodoForm from "./components/TodoForm.vue";
import TodoList from "./components/TodoList.vue";
import { Todo } from "./types/todo.type";

defineComponent({ name: "App", components: { TodoForm, TodoList } });

const todos: Ref<Todo[]> = ref([]);

const addTodo = (description: string) => {
  const newTodo: Todo = {
    id: Date.now(),
    description,
    isDone: false,
  };

  todos.value.push(newTodo);
};

const findIndex = <T extends { id: string | number }>(
  arr: T[],
  id: string | number,
): number => {
  return arr.findIndex((item) => item.id === id);
};

const removeTodo = (id: number | string) => {
  const index = findIndex(todos.value, id);
  if (index === -1) return;

  todos.value.splice(index, 1);
};

const toggleTodo = (id: number | string) => {
  const index = findIndex(todos.value, id);

  if (index === -1) return;

  todos.value[index].isDone = !todos.value[index].isDone;
};
</script>

<template>
  <section>
    <h1>What is your focus on today</h1>
    <TodoForm @add-todo="addTodo" />
    <TodoList
      :todos="todos"
      @remove-todo="removeTodo"
      @toggle-todo="toggleTodo" />
  </section>
</template>
