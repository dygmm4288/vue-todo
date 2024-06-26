import { InjectionKey, Ref, inject, provide, ref, watch } from "vue";
import { Todo } from "../types/todo.type";

const LOCAL_STORAGE_TODO_KEY = "todos";

export const TODO_KEY = Symbol("todo-provide") as InjectionKey<{
  todos: Todo[];
  addTodo: (description: string) => void;
  toggleTodo: (id: string | number) => void;
  removeTodo: (id: string | number) => void;
}>;

export const useTodo = () => {
  const data = inject(TODO_KEY);
  if (!data) throw new Error("Inject require Provide");
  return data;
};

export const registerTodo = () => {
  const localTodos = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_TODO_KEY) as string,
  );

  const todos: Ref<Todo[]> = ref(localTodos || []);

  watch(todos.value, () => {
    localStorage.setItem(LOCAL_STORAGE_TODO_KEY, JSON.stringify(todos.value));
  });

  const addTodo = (description: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      description,
      isDone: false,
    };

    todos.value.push(newTodo);
  };

  const findIndex = <T extends { id: string | number }>(
    arr: T[],
    id: string | number,
  ): number => {
    return arr.findIndex((item) => item.id === id);
  };

  const removeTodo = (id: number | string) => {
    const index = findIndex(todos.value, id);

    if (index === -1) return;

    todos.value.splice(index, 1);
  };

  const toggleTodo = (id: number | string) => {
    const index = findIndex(todos.value, id);

    if (index === -1) return;

    todos.value[index].isDone = !todos.value[index].isDone;
  };

  return provide(TODO_KEY, {
    todos: todos.value,
    addTodo,
    removeTodo,
    toggleTodo,
  });
};
