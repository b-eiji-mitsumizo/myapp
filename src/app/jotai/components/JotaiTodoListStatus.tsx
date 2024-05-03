import TodoListStatus from "@/app/components/TodoListStatus";
import { todoListStatsAtom } from "@/app/jotai/selectors/todoFilterSelector";
import { useAtom } from "jotai";
import React from "react";

export const JotaiTodoListStatus = () => {
  return <TodoListStatus {...useAtom(todoListStatsAtom)[0]} />;
};
