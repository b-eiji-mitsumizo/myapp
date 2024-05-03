import React, { useState } from "react";
import { atom, useAtom, useSetAtom } from "jotai";
import { todosAtom } from "@/app/jotai/atoms/todoState";
import { Todo } from "@/app/types/Todo";
import { title } from "process";
import TodoItemCreator from "@/app/components/TodoItemCreator";

let id = 0;
function getId() {
  return id++;
}

const JotaiTodoItemCreator = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const setTodoList = useSetAtom(todosAtom);

  const addItem = () => {
    setTodoList((prev) => [
      ...prev,
      atom<Todo>({ id: getId(), title, isComplete: false }),
    ]);

    setInputValue(""); // Reset input field after adding item
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
