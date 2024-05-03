"use client";

import React, { useState } from "react";
import { atom, useSetAtom } from "jotai";
import { todosAtom } from "@/app/jotai/atoms/todoState";
import { Todo } from "@/app/types/Todo";
import TodoItemCreator from "@/app/components/TodoItemCreator";

const JotaiTodoItemCreator = () => {
  // 入力されたTodo名はuseStateで管理する
  const [inputValue, setInputValue] = useState<string>("");
  // todoのリスト群をAtomから取得
  const setTodoList = useSetAtom(todosAtom);

  // 対象の入力されたTodoを登録する。
  const addItem = () => {
    // 登録するときは、atom<Todo>として登録すること。ここがrecoilと異なるところ。
    setTodoList((prev) => [
      ...prev,
      atom<Todo>({ id: getId(), title: inputValue, isComplete: false }),
    ]);

    // 入力項目は空文字に設定する。
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

export default JotaiTodoItemCreator;
