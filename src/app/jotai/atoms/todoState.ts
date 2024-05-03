import { FilterState } from "@/app/types/FilterState";
import { Todo } from "@/app/types/Todo";
import { get } from "http";
import { PrimitiveAtom, atom } from "jotai";
import { selectAtom } from "jotai/utils";

export const filterAtom = atom(FilterState.SHOW_ALL);

export const todosAtom = atom<PrimitiveAtom<Todo>[]>([]);

export const filteredAtom = atom<PrimitiveAtom<Todo>[]>((get) => {
  const filter = get(filterAtom);
  const todos = get(todosAtom);
  if (filter === FilterState.SHOW_ALL) return todos;
  else if (filter === FilterState.SHOW_COMPLETED)
    return todos.filter((atom) => get(atom).isComplete);
  else return todos.filter((atom) => !get(atom).isComplete);
});

export type RemoveFn = (item: PrimitiveAtom<Todo>) => void;
