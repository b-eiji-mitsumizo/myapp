import { Todo } from "@/app/types/Todo";
import { PrimitiveAtom, atom } from "jotai";

// ToDoリストの状態
export const todosAtom = atom<PrimitiveAtom<Todo>[]>([]);
