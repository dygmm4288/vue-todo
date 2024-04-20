import { reactive } from "vue";
import { Todo } from "../types/todo.type";

interface StoreState {
  todos: Todo[];
  loading: boolean;
  error: Error | null;
}

const store = reactive<StoreState>({
  todos: [],
  loading: false,
  error: null,
});

export const addTodo = (title: string) => {
  const newTodo = {
    id: Date.now(),
    title,
    completed: false,
    userId: 1,
  } as Todo;
  store.todos.push(newTodo);
};

export const removeTodo = (id: number | string) => {
  const index = store.todos.findIndex((todo) => todo.id === id);

  if (index === -1) return;

  store.todos.splice(index, 1);
};
export const toggleTodo = (id: number | string) => {
  const todo = store.todos.find((todo) => todo.id === id);

  if (!todo) return;

  todo.completed = !todo.completed;
};
export const fetchTodos = async () => {
  store.loading = true;
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    store.todos = data;
    console.log(data);
  } catch (error) {
    store.error = error as Error;
  } finally {
    store.loading = false;
  }
};

export default store;
