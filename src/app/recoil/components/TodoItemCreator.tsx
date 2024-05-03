import { todoListState } from "@/app/recoil/atoms/todoState";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";

let id = 0;
function getId() {
  return id++;
}

const TodoItemCreator = () => {
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
    <div className="flex flex-wrap justify-start gap-5">
      <input
        type="text"
        value={inputValue}
        onChange={onChange}
        className="p-3"
      />
      <button
        className={`p-2 rounded-md ${
          inputValue === "" ? "bg-gray-400" : "bg-lime-300 shadow-md"
        }`}
        disabled={inputValue === ""}
        onClick={addItem}
      >
        Add
      </button>
    </div>
  );
};

export default TodoItemCreator;
