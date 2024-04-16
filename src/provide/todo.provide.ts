import { InjectionKey } from "vue";
import { Todo } from "../types/todo.type";

export const TODO_KEY = Symbol("todo-provide") as InjectionKey<{
  todos: Todo[];
  addTodo: (description: string) => void;
  toggleTodo: (id: string | number) => void;
  removeTodo: (id: string | number) => void;
}>;
