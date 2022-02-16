<script setup lang="ts">
import { ref } from 'vue';
  const content = ref('')
  const emit = defineEmits(['addTodo'])
  const add = () => { 
    if (!content.value) return
    emit('addTodo',content.value)
   }
</script>

<template>
  <header class="header">
    <h1>todos</h1>
    <input class="new-todo" @keyup.enter="add" v-model="content" placeholder="What needs to be done?" autofocus />
  </header>
</template>

<style lang="less" scoped></style>
