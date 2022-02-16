<script setup lang="ts">
import { computed } from 'vue';
import { listType } from '../App.vue';
interface Props {
  list: listType[]
}
const props = defineProps<Props>()
const emit = defineEmits(['changeDone', 'delTodo', 'checkAll'])
// const changeFn = (id:number) => { 
//   emit('changeDone',id)
//  }
// 计算全选状态 - ✨升级成带set的计算属性，提高代码可阅读性
const isCheckAll = computed({
  get: () => {
    return props.list.every((item) => item.done) && props.list.length > 0
  },
  set: (val) => {
    emit('changeDone', val)
  }
})


</script>

<template>
  <section class="main">
    <input
      id="toggle-all"
      class="toggle-all"
      type="checkbox"
      :checked="isCheckAll"
      @change="emit('checkAll', !isCheckAll)"
    />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li :class="{ completed: item.done }" v-for="item in list" :key="item.id">
        <div class="view">
          <input class="toggle" type="checkbox" v-model="item.done" />
          <label>{{ item.name }}</label>
          <button class="destroy" @click="emit('delTodo', item.id)"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template" />
      </li>
    </ul>
  </section>
</template>

<style lang="less" scoped></style>
