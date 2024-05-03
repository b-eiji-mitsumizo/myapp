import { JotaiTodoItem } from "@/app/jotai/components/JotaiTodoItem";
import JotaiTodoItemCreator from "@/app/jotai/components/JotaiTodoItemCreator";
import { JotaiTodoListFilter } from "@/app/jotai/components/JotaiTodoListFilters";
import { JotaiTodoListStatus } from "@/app/jotai/components/JotaiTodoListStatus";
import { fileterdTodoListState } from "@/app/jotai/selectors/todoFilterSelector";
import { useAtomValue } from "jotai";
import React from "react";

const JotaiTodo = () => {
  // 対象のフィルターでフィルタリングされたTODOリスト
  const todoList = useAtomValue(fileterdTodoListState);

  return (
    <div className="container mx-auto mt-10">
      <div className="shadow-lg w-1/3 mb-10 p-5">
        <JotaiTodoListStatus />
      </div>
      <div className="mb-10">
        <JotaiTodoListFilter />
      </div>
      <JotaiTodoItemCreator />
      <div className="max-h-96 overflow-y-auto my-10">
        <h2 className="text-2xl font-bold">Todo List</h2>
        <div className="flex flex-wrap -mx-2">
          {todoList.map((todoItem, index) => (
            <div className="w-full sm:w-1/2 md:w-1/3 px-2 my-2" key={index}>
              <JotaiTodoItem atom={todoItem} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JotaiTodo;
