import { defineStore } from 'pinia';

const useTodosStore = defineStore('todos', {
  // 状态
  state() {
    return {
      list: [
        { id: 1, content: '吃饭', done: true },
        { id: 2, content: '睡觉', done: false },
        { id: 3, content: '打代码', done: false },
      ],
    };
  },
  // 计算
  getters: {
    isCheckAll():boolean{
      return this.list.length>0 && this.list.every(item=>item.done)
    },
    // 剩余数量
    surplusCount():number{
      return this.list.filter(item=>!item.done).length
    }
  },
  // 函数
  actions: {
    // 修改任务状态
    changeDone(id: number) {
      const todo = this.list.find((item) => item.id === id);
      if (todo) {
        todo.done = !todo.done;
      }
    },
    // 删除
    delTodo(id: number) {
      this.list = this.list.filter((item) => item.id !== id);
    },
    // 添加
    addTodo(content: string) {
      this.list.unshift({
        id: Date.now(),
        content,
        done: false,
      });
    },
    // 全选
    changeCheckAll(isCheckAll:boolean){
      this.list.forEach((item) => {
        item.done = isCheckAll
      })
    },
    // 清空已完成
    clearTodos(){
      this.list = this.list.filter((item) => !item.done)
    }
  },
});

export default useTodosStore;
