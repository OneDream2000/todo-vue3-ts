<script setup lang="ts">
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
import TodoFooter from './components/TodoFooter.vue'
import { ref, watch } from 'vue';
export interface listType {
  id: number,
  name: string,
  done: boolean,
}
// 提供数据
const list = ref<listType[]>(JSON.parse(localStorage.getItem('todos') || '[]'))
// 子传父，修改单选框
const changeDone = (id: number) => {
  list.value.forEach(item => { if (item.id === id) { item.done = !item.done } return item })
}
//  删除
const delTodo = (id: number) => {
  list.value = list.value.filter((item) => item.id !== id)
}
//  添加
const addTodo = (name: string) => {
  list.value.unshift({
    id: Date.now(),
    name,
    done: false,
  })
}
// 全选
const checkAll = (value: boolean) => {
  list.value.forEach((item) => item.done = value)
}
// watch 监视存到本地
watch(list,(value) => {
  localStorage.setItem('todos',JSON.stringify(value))
},{
  deep:true
})
</script>

<template>
  <section class="todoapp">
    <TodoHeader @addTodo="addTodo" ></TodoHeader>
    <TodoMain :list="list" @checkAll="checkAll" @changeDone="changeDone" @delTodo="delTodo"></TodoMain>
    <TodoFooter :list="list" ></TodoFooter>
  </section>
</template>

<style></style>
