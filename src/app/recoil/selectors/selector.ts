import { selector } from "recoil";
import { FilterState } from "@/app/types/FilterState";
import { todoListFilterState } from "@/app/recoil/atoms/filterState";
import { todoListState } from "@/app/recoil/atoms/todoState";

export const fileterdTodoListState = selector({
  key: "FilterdTodoList",
  get: ({ get }) => {
    const fileter = get(todoListFilterState);
    const list = get(todoListState);

    switch (fileter) {
      case FilterState.SHOW_COMPLETED:
        return list.filter((item) => item.isComplete);
      case FilterState.SHOW_UNCOMPLETED:
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

export const todoListStatsState = selector({
  key: "TodoListStats",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted =
      totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});
