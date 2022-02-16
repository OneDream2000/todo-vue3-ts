<script setup lang="ts">
import { computed } from 'vue';
import { listType } from '../App.vue';
interface Props{
  list:listType[]
}
const props = defineProps<Props>()
const leftCount = computed(() => { 
  return props.list.filter((item) =>  item.done ).length
 })
</script>

<template>
  <footer class="footer">
    <span class="todo-count"><strong>{{leftCount}}</strong> item left</span>
    <ul class="filters">
      <li>
        <a class="selected" href="#/">All</a>
      </li>
      <li>
        <a href="#/active">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li>
    </ul>
    <button class="clear-completed">Clear completed</button>
  </footer>
</template>

<style lang="less" scoped></style>
