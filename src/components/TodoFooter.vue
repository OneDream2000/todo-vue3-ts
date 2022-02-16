<script setup lang="ts">
import useStore from '../store';
  const {todos} = useStore()

</script>

<template>
  <footer class="footer">
    <span class="todo-count"><strong>{{todos.surplusCount}}</strong> item left</span>
    <ul class="filters">
      <li v-for="item in todos.filters" @click="todos.updateActive(item)">
        <a :class="{selected:item === todos.active}"  href="#/">{{item}}</a>
      </li>
      <!-- <li>
        <a href="#/active">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li> -->
    </ul>
    <button class="clear-completed" @click="todos.clearTodos">Clear completed</button>
  </footer>
</template>

<style lang="less" scoped></style>
