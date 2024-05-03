import TodoItem from "@/app/components/TodoItem";
import { todoListState } from "@/app/recoil/atoms/todoState";
import { Todo } from "@/app/types/Todo";
import { useRecoilState } from "recoil";

type TodoItemProps = {
  item: Todo;
};

const RecoilTodoItem = ({ item }: TodoItemProps) => {
  // 対象のタスク一覧
  const [todoList, setTodoList] = useRecoilState<Todo[]>(todoListState);

  // 対象タスクのインデックスを取得する。findIndexは配列の既存メソッド
  const index = todoList.findIndex((listItem) => listItem === item);

  // タスクの完了を切り替え
  const toggleCompleted = () => {
    setTodoList([
      ...todoList.slice(0, index),
      { ...item, isComplete: !item.isComplete },
      ...todoList.slice(index + 1),
    ]);
  };

  // タスクの削除
  const deleteItem = () => {
    setTodoList([...todoList.slice(0, index), ...todoList.slice(index + 1)]);
  };

  return (
    <TodoItem
      item={item}
      toggleCompleted={toggleCompleted}
      deleteItem={deleteItem}
    />
  );
};

export default RecoilTodoItem;
