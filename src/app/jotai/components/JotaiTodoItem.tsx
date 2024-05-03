import TodoItem from "@/app/components/TodoItem";
import { todosAtom } from "@/app/jotai/atoms/todoState";
import { Todo } from "@/app/types/Todo";
import { PrimitiveAtom, useAtom, useSetAtom } from "jotai";

type TodoItemProps = {
  atom: PrimitiveAtom<Todo>;
};
// 各Todoアイテムを示す
export const JotaiTodoItem = ({ atom }: TodoItemProps) => {
  // 対象のTodo
  const [item, setItem] = useAtom<Todo>(atom);
  // Todoの全体のリスト
  const setTodos = useSetAtom(todosAtom); // atomに設定する

  // Todoの状態を更新
  const toggleCompleted = () => {
    // 対象Todoの完了フラグを逆にする。 itemはtodosAtomの一部であるため、itemが更新されれば、自動でtodoAtomsが変更される。
    setItem((oldItem) => ({ ...oldItem, isComplete: !oldItem.isComplete }));
  };

  // 対象のTodoをtodosAtomから削除する
  const deleteItem = () => {
    // 対象のTodo以外をtodosに設定する
    setTodos((prev) => prev.filter((item) => item !== atom));
  };

  return (
    <TodoItem
      item={item}
      toggleCompleted={toggleCompleted}
      deleteItem={deleteItem}
    />
  );
};
