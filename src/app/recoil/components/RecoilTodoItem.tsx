import TodoItem from "@/app/components/TodoItem";
import { todoListState } from "@/app/recoil/atoms/todoState";
import { Todo } from "@/app/types/Todo";
import React, { ChangeEvent } from "react";
import { useRecoilState } from "recoil";

type TodoItemProps = {
  item: Todo;
};

function replaceItemAtIndex(arr: Todo[], index: number, newValue: Todo) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr: Todo[], index: number) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

const RecoilTodoItem = (props: TodoItemProps) => {
  const { item } = props;
  // 対象のタスク一覧
  const [todoList, setTodoList] = useRecoilState<Todo[]>(todoListState);
  // 対象タスクのインデックスを取得する。findIndexは配列の既存メソッド
  const index = todoList.findIndex((listItem) => listItem === item);

  // タスクの完了を制御
  function toggleCompleted(): void {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });
    setTodoList(newList);
  }

  // タスクの削除
  function deleteItem(): void {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
  }

  return (
    <TodoItem
      item={item}
      toggleCompleted={toggleCompleted}
      deleteItem={deleteItem}
    />
  );
};

export default RecoilTodoItem;
