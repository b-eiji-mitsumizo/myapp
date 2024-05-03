import TodoItem from "@/app/components/TodoItem";
import { todosAtom } from "@/app/jotai/atoms/todoState";
import { Todo } from "@/app/types/Todo";
import { PrimitiveAtom, atom, useAtom, useSetAtom } from "jotai";

type TodoItemProps = {
  atom: PrimitiveAtom<Todo>;
};

export const JotaiTodoItem = ({ atom }: TodoItemProps) => {
  const [item, setItem] = useAtom(atom);
  const setTodos = useSetAtom(todosAtom); // atomに設定する

  const toggleCompleted = () => {
    setItem((oldItem) => ({ ...oldItem, isComplete: !oldItem.isComplete }));
  };

  const deleteItem = (event: React.MouseEvent<HTMLButtonElement>) => {
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
