"use client";

import Header from "@/app/components/Header";
import RecoilTodo from "@/app/recoil/components/RecoilTodo";
import RecoilTodoItem from "@/app/recoil/components/RecoilTodoItem";
import RecoilTodoItemCreator from "@/app/recoil/components/RecoilTodoItemCreator";
import RecoilTodoListFilters from "@/app/recoil/components/RecoilTodoListFilters";
import RecoilTodoListStatus from "@/app/recoil/components/RecoilTodoListStatus";
import { fileterdTodoListState } from "@/app/recoil/selectors/selector";
import { Todo } from "@/app/types/Todo";
import React from "react";
import { useRecoilValue } from "recoil";

const page = () => {
  const todoList: Todo[] = useRecoilValue(fileterdTodoListState);

  return (
    <>
      <Header name="Recoil" />
      <RecoilTodo />
    </>
  );
};

export default page;
