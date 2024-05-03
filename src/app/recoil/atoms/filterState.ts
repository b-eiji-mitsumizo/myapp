import { FilterState } from "@/app/types/FilterState";
import { atom } from "recoil";

// フィルターの状態
export const todoListFilterState = atom<FilterState>({
  key: "TodoListFilter",
  default: FilterState.SHOW_ALL,
});
