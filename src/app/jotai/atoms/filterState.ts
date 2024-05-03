import { FilterState } from "@/app/types/FilterState";
import { atom } from "jotai";

// フィルターの状態
export const filterAtom = atom(FilterState.SHOW_ALL);
