"use client";

import Header from "@/app/components/Header";
import TodoItem from "@/app/recoil/components/TodoItem";
import TodoItemCreator from "@/app/recoil/components/TodoItemCreator";
import TodoListFilters from "@/app/recoil/components/TodoListFilters";
import TodoListStatus from "@/app/recoil/components/TodoListStatus";
import { fileterdTodoListState } from "@/app/recoil/selectors/selector";
import React from "react";
import { useRecoilValue } from "recoil";

const page = () => {
  const todoList: Todo[] = useRecoilValue(fileterdTodoListState);

  return (
    <div className="pt-16">
      <Header name="Recoil" />
      <div className="container mx-auto mt-10">
        <div className="shadow-lg w-1/3 mb-10 p-5">
          <TodoListStatus />
        </div>
        <div className="mb-10">
          <TodoListFilters />
        </div>
        <TodoItemCreator />
        <div className="max-h-96 overflow-y-auto my-10">
          <h2 className="text-2xl font-bold">Todo List</h2>
          <div className="flex flex-wrap -mx-2">
            {todoList.map((todoItem) => (
              <div className="w-full sm:w-1/2 md:w-1/3 px-2 my-2">
                <TodoItem key={todoItem.id} item={todoItem} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
