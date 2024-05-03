import { FilterState } from "@/app/types/FilterState";
import React from "react";

type TodoListFilterProps = {
  filter: any;
  set: any;
};

const TodoListFilter = ({ filter, set }: TodoListFilterProps) => {
  return (
    <>
      <label htmlFor="filterTodo" className="mr-5">
        Filter :
      </label>
      <select
        value={filter}
        onChange={(e) => set(e.target.value as FilterState)}
        id="filterTodo"
      >
        <option value={FilterState.SHOW_ALL}>{FilterState.SHOW_ALL}</option>
        <option value={FilterState.SHOW_COMPLETED}>
          {FilterState.SHOW_COMPLETED}
        </option>
        <option value={FilterState.SHOW_UNCOMPLETED}>
          {FilterState.SHOW_UNCOMPLETED}
        </option>
      </select>
    </>
  );
};

export default TodoListFilter;
