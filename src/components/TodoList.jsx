import TodoItem from "./TodoItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import useTodoList from "@/hooks/useTodoList";

export default function TodoList({ listId }) {
  const {
    listData,
    tasks,
    newTask,
    newTaskError,
    setNewTaskError,
    setNewTask,
    handleAddTask,
    handleEditTask,
    handleDeleteTask,
    handleToggleEditing,
    handleStatusChange,
  } = useTodoList(listId);

  return (
    <div className="items-center md:w-full border-2 shadow-sm p-6 rounded bg-blue-50 dark:bg-transparent">
      <div className="pt-5 pb-5 text-center bg-neutral-50 dark:bg-slate-600 border-2 rounded">
        <h1 className="text-xl font-medium">{listData.listName}</h1>
        <p className="pt-4 text-base sm:mx-2 mx-2 md:mx-1">
          {listData.listDesc}
        </p>
        <div className="mt-4 w-full">
          <input
            className="pl-2 border-2 rounded w-2/3 dark:text-gray-100 dark:bg-slate-400"
            value={newTask}
            onChange={(e) => {
              setNewTask(e.target.value);
              setNewTaskError("");
            }}
          />
          <button
            className="ml-2 bg-teal-300 rounded size-7 px-1 pb-0.5 text-white"
            onClick={handleAddTask}
          >
            <FontAwesomeIcon icon={faAdd} />
          </button>
          {newTaskError && <p className="text-red-200">{newTaskError}</p>}
        </div>
      </div>
      <>
        {tasks.length <= 0 ? (
          <p>Please create some tasks for your this ToDo List</p>
        ) : (
          <div className="pt-4">
            {tasks.map((task) => (
              <TodoItem
                key={task.id}
                item={task}
                onEditItem={handleEditTask}
                onDeleteItem={handleDeleteTask}
                onToggleEditing={handleToggleEditing}
                onChangeStatus={handleStatusChange}
              />
            ))}
          </div>
        )}
      </>
    </div>
  );
}
