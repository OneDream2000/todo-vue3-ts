<script setup lang="ts">
import { listType } from '../App.vue';
interface Props{
  list:listType[]
}
const {list:[]} = defineProps<Props>()
const emit = defineEmits(['changeDone'])
const changeFn = (id:number) => { 
  emit('changeDone',id)
 }
</script>

<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li :class="{completed:item.done}" v-for="item in list" :key="item.id">
        <div class="view">
          <input class="toggle" type="checkbox" :checked="item.done" @change="changeFn(item.id)"/>
          <label>{{item.name}}</label>
          <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template" />
      </li>
    </ul>
  </section>
</template>

<style lang="less" scoped></style>
