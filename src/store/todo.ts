import { reactive, watch } from "vue";
import { Todo } from "../types/todo.type";

const LOCAL_STORAGE_TODO_KEY = "todos";

const localTodos = JSON.parse(
  localStorage.getItem(LOCAL_STORAGE_TODO_KEY) as string,
);

const store = reactive({
  todos: (localTodos || []) as Todo[],
  addTodo(description: string) {
    const newTodo = {
      id: Date.now(),
      description,
      isDone: false,
    };
    this.todos.push(newTodo);
  },
  removeTodo(id: number | string) {
    const index = this.todos.findIndex((todo) => todo.id === id);

    if (index === -1) return;

    this.todos.splice(index, 1);
  },
  toggleTodo(id: number | string) {
    const todo = this.todos.find((todo) => todo.id === id);

    if (!todo) return;

    todo.isDone = !todo.isDone;
  },
});

watch(store.todos, () => {
  localStorage.setItem(LOCAL_STORAGE_TODO_KEY, JSON.stringify(store.todos));
});

export default store;
