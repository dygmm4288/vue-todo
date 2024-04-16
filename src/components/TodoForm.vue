<script lang="ts" setup>
import { defineComponent, ref } from "vue";
import { useTodo } from "../provide/todo.provide";

defineComponent({ name: "TodoForm" });

const { addTodo } = useTodo();

const text = ref("");

const submit = () => {
  addTodo(text.value);
  text.value = "";
};
</script>

<template>
  <form @submit.prevent="submit">
    <input type="text" placeholder="write your todo" v-model="text" />
  </form>
</template>
