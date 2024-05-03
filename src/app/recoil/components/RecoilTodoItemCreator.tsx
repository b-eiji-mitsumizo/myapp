"use client";

import TodoItemCreator from "@/app/components/TodoItemCreator";
import { todoListState } from "@/app/recoil/atoms/todoState";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";

const RecoilTodoItemCreator = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        title: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <TodoItemCreator
      inputValue={inputValue}
      onChange={onChange}
      addItem={addItem}
    />
  );
};

export default RecoilTodoItemCreator;
