<script lang="ts" setup>
import { defineComponent, inject, ref } from "vue";
import { TODO_KEY } from "../provide/todo.provide";

defineComponent({ name: "TodoForm" });

const { addTodo } = inject(TODO_KEY)!;

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
