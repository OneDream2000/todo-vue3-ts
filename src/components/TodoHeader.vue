<script setup lang="ts">
import { ref } from 'vue'
import useStore from '../store'
const {todos} =useStore()
  const todoName = ref('')
  const addTodo = () => { 
    if(!todoName.value) return alert('待办不能为空')
    todos.addTodo(todoName.value)
    todoName.value =''
   }
</script>

<template>
  <header class="header">
    <h1>todos</h1>
    <input class="new-todo" v-model="todoName" @keyup.enter="addTodo" placeholder="What needs to be done?" autofocus />
  </header>
</template>

<style lang="less" scoped></style>
