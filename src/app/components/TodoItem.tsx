import { Todo } from "@/app/types/Todo";
import React from "react";

type TodoItemProps = {
  item: Todo;
  toggleCompleted: () => void;
  deleteItem: () => void;
};

const TodoItem = ({ item, toggleCompleted, deleteItem }: TodoItemProps) => {
  return (
    <>
      <div className="flex flex-wrap items-center gap-4 text-xl my-5 bg-white rounded-lg shadow-lg p-4 hover:bg-gray-50 transition-colors">
        <input
          type="checkbox"
          checked={item.isComplete}
          onChange={toggleCompleted}
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
    </>
  );
};

export default TodoItem;
