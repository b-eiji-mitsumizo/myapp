import TodoListFilter from "@/app/components/TodoListFilter";
import { filterAtom } from "@/app/jotai/atoms/filterState";
import { useAtom } from "jotai";

export const JotaiTodoListFilter = () => {
  // フィルター状態を取得する
  const [filter, setFilter] = useAtom(filterAtom);

  return <TodoListFilter filter={filter} set={setFilter} />;
};
