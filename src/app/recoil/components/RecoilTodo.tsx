"use client";

import RecoilTodoItem from "@/app/recoil/components/RecoilTodoItem";
import RecoilTodoItemCreator from "@/app/recoil/components/RecoilTodoItemCreator";
import RecoilTodoListFilters from "@/app/recoil/components/RecoilTodoListFilters";
import RecoilTodoListStatus from "@/app/recoil/components/RecoilTodoListStatus";
import { fileterdTodoListState } from "@/app/recoil/selectors/selector";
import React from "react";
import { useRecoilValue } from "recoil";

const RecoilTodo = () => {
  const todoList = useRecoilValue(fileterdTodoListState);

  return (
    <div className="container mx-auto mt-10">
      <div className="shadow-lg w-1/3 mb-10 p-5">
        <RecoilTodoListStatus />
      </div>
      <div className="mb-10">
        <RecoilTodoListFilters />
      </div>
      <RecoilTodoItemCreator />
      <div className="max-h-96 overflow-y-auto my-10">
        <h2 className="text-2xl font-bold">Todo List</h2>
        <div className="flex flex-wrap -mx-2">
          {todoList.map((todoItem, index) => (
            <div className="w-full sm:w-1/2 md:w-1/3 px-2 my-2" key={index}>
              <RecoilTodoItem item={todoItem} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecoilTodo;
