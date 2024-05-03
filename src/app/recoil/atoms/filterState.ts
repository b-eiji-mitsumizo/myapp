import { FilterState } from "@/app/recoil/types/FilterState";
import { atom } from "recoil";

// フィルターの状態
export const todoListFilterState = atom<FilterState>({
  key: "TodoListFilter",
  default: FilterState.SHOW_ALL,
});
