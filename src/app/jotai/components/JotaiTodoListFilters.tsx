import TodoListFilter from "@/app/components/TodoListFilter";
import { filterAtom } from "@/app/jotai/atoms/todoState";
import { FilterState } from "@/app/types/FilterState";
import { useAtom } from "jotai";

export const JotaiTodoListFilter = () => {
  const [filter, set] = useAtom(filterAtom);
  return <TodoListFilter filter={filter} set={set} />;
};
