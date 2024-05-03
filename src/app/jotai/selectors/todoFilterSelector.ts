import { filterAtom } from "@/app/jotai/atoms/filterState";
import { todosAtom } from "@/app/jotai/atoms/todoState";
import { FilterState } from "@/app/types/FilterState";
import { Todo } from "@/app/types/Todo";
import { PrimitiveAtom, atom } from "jotai";

// Todoリストの状態を計算するためのもの。(RecoilでいうSelector)
export const todoListStatsAtom = atom((get) => {
  const todoList = get(todosAtom);
  const totalNum = todoList.length;

  const totalCompletedNum = todoList.filter(
    (todoAtom) => get(todoAtom).isComplete
  ).length;
  const totalUncompletedNum = totalNum - totalCompletedNum;
  const percentCompleted =
    totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;

  return {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted,
  };
});

// フィルターリングした結果のTodoリストを返却するためのもの
export const fileterdTodoListState = atom<PrimitiveAtom<Todo>[]>((get) => {
  const filter = get(filterAtom);
  const todos = get(todosAtom);
  if (filter === FilterState.SHOW_ALL) {
    return todos;
  } else if (filter === FilterState.SHOW_COMPLETED) {
    return todos.filter((atom) => get(atom).isComplete);
  } else {
    return todos.filter((atom) => !get(atom).isComplete);
  }
});
