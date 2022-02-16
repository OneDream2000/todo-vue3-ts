import { defineStore } from 'pinia';
type List={
   id: number, content: string, done: boolean 
}
export type TodoState= 'All'| 'Active'| 'Completed'

const useTodosStore = defineStore('todos', {
  // 状态
  state() {
    return {
      list: JSON.parse(localStorage.getItem('todos') || '[]') as List[],
      filters: ['All', 'Active', 'Completed'],
      active:'All'
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
    },
    showList():List[]{
      if(this.active ==='Active'){
        return  this.list.filter((item) => !item.done)
      }
      if(this.active ==='Completed'){
        return  this.list.filter((item) => item.done)
      }
      return this.list
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
    },
    updateActive(active:TodoState){
      this.active = active
    }
  },
});

export default useTodosStore;
