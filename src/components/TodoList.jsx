import TodoItem from "./TodoItem";
import NewTask from "@/components/NewTask";

import { useTodoListContext } from "@/context/TodoListContext";

export default function TodoList() {
  const { listData, tasks } = useTodoListContext();

  return (
    <div className="items-center md:w-full border-2 shadow-sm p-6 rounded bg-blue-50 dark:bg-transparent">
      <div className="pt-5 pb-5 text-center bg-neutral-50 dark:bg-slate-600 border-2 rounded">
        <h1 className="text-xl font-medium">{listData.listName}</h1>
        <p className="pt-4 text-base sm:mx-2 mx-2 md:mx-1">
          {listData.listDesc}
        </p>
        <NewTask />
      </div>
      <>
        {tasks.length <= 0 ? (
          <p>Please create some tasks for your this ToDo List</p>
        ) : (
          <div className="pt-4">
            {tasks.map((task) => (
              <TodoItem key={task.id} item={task} />
            ))}
          </div>
        )}
      </>
    </div>
  );
}
