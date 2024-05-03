import TodoListStatus from "@/app/components/TodoListStatus";
import { todoListStatsState } from "@/app/recoil/selectors/selector";
import React from "react";
import { useRecoilValue } from "recoil";

const RecoilTodoListStatus = () => {
  return <TodoListStatus {...useRecoilValue(todoListStatsState)} />;
};

export default RecoilTodoListStatus;
