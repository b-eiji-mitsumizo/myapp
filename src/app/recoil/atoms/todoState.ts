import { atom } from "recoil";

// Todoリストの状態
export const todoListState = atom<Todo[]>({
  key: "TodoList",
  default: [],
});
