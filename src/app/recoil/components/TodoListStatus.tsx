import { todoListStatsState } from "@/app/recoil/selectors/selector";
import React from "react";
import { useRecoilValue } from "recoil";

const TodoListStatus = () => {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState);

  return (
    <ul className="font-bold">
      <li>Total items : {totalNum}</li>
      <li>Items Completed : {totalCompletedNum}</li>
      <li>Items not Completed : {totalUncompletedNum}</li>
      <li>Percent completed : {percentCompleted}%</li>
    </ul>
  );
};

export default TodoListStatus;
