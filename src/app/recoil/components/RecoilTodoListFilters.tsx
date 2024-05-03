"use client";

import { todoListFilterState } from "@/app/recoil/atoms/filterState";
import { useRecoilState } from "recoil";
import TodoListFilter from "@/app/components/TodoListFilter";
import { FilterState } from "@/app/types/FilterState";

const RecoilTodoListFilters = () => {
  const [filter, setFilter] = useRecoilState<FilterState>(todoListFilterState);
  return <TodoListFilter filter={filter} set={setFilter} />;
};

export default RecoilTodoListFilters;
