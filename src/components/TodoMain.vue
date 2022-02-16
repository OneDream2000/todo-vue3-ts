<script setup lang="ts">
import useStore from '../store/index.ts';
const { todos } = useStore()
</script>


<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" :checked="todos.isCheckAll" @change="todos.changeCheckAll(!todos.isCheckAll)" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li :class="{completed:item.done}"    v-for="item in todos.list"  :key="item.id">
        <div class="view">
          <input class="toggle" type="checkbox" :checked="item.done" @change="todos.changeDone(item.id)" />
          <label>{{ item.content }}</label>
          <button class="destroy" @click="todos.delTodo(item.id)"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template" />
      </li>
    </ul>
  </section>
</template>

<style lang="less" scoped></style>
