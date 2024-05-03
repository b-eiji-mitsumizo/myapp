"use client";

import TodoListStatus from "@/app/components/TodoListStatus";
import { todoListStatsAtom } from "@/app/jotai/selectors/todoFilterSelector";
import { useAtomValue } from "jotai";
import React from "react";

export const JotaiTodoListStatus = () => {
  return <TodoListStatus {...useAtomValue(todoListStatsAtom)} />;
};
