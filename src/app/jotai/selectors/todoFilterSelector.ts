import { filterAtom, todosAtom } from "@/app/jotai/atoms/todoState";
import { todoListFilterState } from "@/app/recoil/atoms/filterState";
import { todoListState } from "@/app/recoil/atoms/todoState";
import { FilterState } from "@/app/types/FilterState";
import { atom } from "jotai";

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

export const fileterdTodoListState = atom((get) => {
  const fileter = get(filterAtom);
  const list = get(todosAtom);

  switch (fileter) {
    case FilterState.SHOW_COMPLETED:
      return list.filter((todoAtom) => get(todoAtom).isComplete);
    case FilterState.SHOW_UNCOMPLETED:
      return list.filter((todoAtom) => !get(todoAtom).isComplete);
    default:
      return list;
  }
});
