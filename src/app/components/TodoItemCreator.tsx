import React from "react";

type TodoItemCreatorProps = {
  inputValue: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addItem: () => void;
};

const TodoItemCreator = ({
  inputValue,
  onChange,
  addItem,
}: TodoItemCreatorProps) => {
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
