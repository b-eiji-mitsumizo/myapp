import React from "react";

type TodoItemCreatorProps = {
  inputValue: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addItem: () => void;
};

const TodoItemCreator = (props: TodoItemCreatorProps) => {
  return (
    <div className="flex flex-wrap justify-start gap-5">
      <input
        type="text"
        value={props.inputValue}
        onChange={props.onChange}
        className="p-3"
      />
      <button
        className={`p-2 rounded-md ${
          props.inputValue === "" ? "bg-gray-400" : "bg-lime-300 shadow-md"
        }`}
        disabled={props.inputValue === ""}
        onClick={props.addItem}
      >
        Add
      </button>
    </div>
  );
};

export default TodoItemCreator;
