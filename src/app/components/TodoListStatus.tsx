import React from "react";

type TodoListStatusProps = {
  totalNum: number;
  totalCompletedNum: number;
  totalUncompletedNum: number;
  percentCompleted: number;
};

const TodoListStatus = (props: TodoListStatusProps) => {
  return (
    <ul className="font-bold">
      <li>Total items : {props.totalNum}</li>
      <li>Items Completed : {props.totalCompletedNum}</li>
      <li>Items not Completed : {props.totalUncompletedNum}</li>
      <li>Percent completed : {props.percentCompleted}%</li>
    </ul>
  );
};

export default TodoListStatus;
