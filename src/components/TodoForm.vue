<script lang="ts" setup>
import { defineComponent, ref } from "vue";

defineComponent({ name: "TodoForm" });

const text = ref("");
const submit = () => {
  alert(text.value);
};
</script>

<template>
  <form @submit.prevent="submit">
    <input type="text" placeholder="write your todo" v-model="text" />
  </form>
</template>
