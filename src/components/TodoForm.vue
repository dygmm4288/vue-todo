<script lang="ts" setup>
import { defineComponent, ref } from "vue";

defineComponent({ name: "TodoForm" });
const emit = defineEmits<{ "add-todo": [string] }>();

const text = ref("");

const submit = () => {
  emit("add-todo", text.value);
  text.value = "";
};
</script>

<template>
  <form @submit.prevent="submit">
    <input type="text" placeholder="write your todo" v-model="text" />
  </form>
</template>
