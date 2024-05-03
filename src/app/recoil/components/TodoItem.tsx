import { todoListState } from "@/app/recoil/atoms/todoState";
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

const TodoItem = (props: TodoItemProps) => {
  const { item } = props;
  // 対象のタスク一覧
  const [todoList, setTodoList] = useRecoilState<Todo[]>(todoListState);
  // 対象タスクのインデックスを取得する。findIndexは配列の既存メソッド
  const index = todoList.findIndex((listItem) => listItem === item);

  // タスクの完了を制御
  function toggleItemCompletion(event: ChangeEvent<HTMLInputElement>): void {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  }

  // タスクの削除
  function deleteItem(event: React.MouseEvent<HTMLButtonElement>): void {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
  }

  return (
    <div className="flex flex-wrap items-center gap-4 text-xl my-5 bg-white rounded-lg shadow-lg p-4 hover:bg-gray-50 transition-colors">
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
        className="w-5 h-5 text-blue-500 rounded-full border-gray-300 focus:ring-blue-500"
      />
      <p
        className={`flex-1 text-gray-800 ${
          item.isComplete ? "line-through" : ""
        }`}
      >
        {item.title}
      </p>
      <button
        onClick={deleteItem}
        className="p-2 rounded-md bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 shadow-md text-white text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18.75l12-12m0 12L6 6.75"
          />
        </svg>
      </button>
    </div>
  );
};

export default TodoItem;
