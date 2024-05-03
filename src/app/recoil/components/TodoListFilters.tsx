import { FilterState } from "@/app/recoil/types/FilterState";
import { todoListFilterState } from "@/app/recoil/atoms/filterState";
import React, { ChangeEvent } from "react";
import { useRecoilState } from "recoil";

const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState<FilterState>(todoListFilterState);

  function updateFilter(event: ChangeEvent<HTMLSelectElement>): void {
    setFilter(event.target.value as FilterState);
  }

  return (
    <>
      <label htmlFor="filterTodo" className="mr-5">
        Filter :
      </label>
      <select value={filter} onChange={updateFilter} id="filterTodo">
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

export default TodoListFilters;
