import { FilterState } from "@/app/types/FilterState";
import { atom } from "recoil";

// フィルターの状態
export const todoListFilterState = atom<FilterState>({
  // キーを一意に作成する必要がある。
  key: "TodoListFilter",
  default: FilterState.SHOW_ALL,
});
