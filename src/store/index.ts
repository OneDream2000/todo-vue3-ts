import useTodosStore from './modules/todos'

export default function useStore() {
  return {
    todos: useTodosStore(),
  }
}