<script lang="ts" setup>
import { defineComponent, ref } from "vue";
import store from "../store/todo";
defineComponent({ name: "TodoForm" });

const text = ref("");

const submit = () => {
  store.addTodo(text.value);
  text.value = "";
};
</script>

<template>
  <form @submit.prevent="submit">
    <input type="text" placeholder="write your todo" v-model="text" />
  </form>
</template>
