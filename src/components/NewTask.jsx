import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { useTodoListContext } from "@/context/TodoListContext";
import { unixToDateInput, dateInputToUnix } from "@/utils/dateConversion";

export default function NewTask() {
  const {
    newTask,
    newTaskError,
    setNewTaskError,
    setNewTask,
    handleAddTask,
    newPriority,
    setNewPriority,
    newDueDate,
    setNewDueDate,
  } = useTodoListContext();

  const onSetNewPriority = (e) => {
    const newPriorityValue = e.target.value;
    setNewPriority(newPriorityValue);
  };

  const onSetNewDueDate = (e) => {
    const newDueDateValue = dateInputToUnix(e.target.value);
    setNewDueDate(newDueDateValue);
  };

  return (
    <div className="rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
      <div className="-mx-3 md:flex mb-2">
        <div className="md:w-full px-3 mb-6 md:mb-0">
          {newTaskError && (
            <p className="text-red-500 italic">{newTaskError}</p>
          )}
          <input
            placeholder="Add new task"
            className="appearance-none block w-full bg-grey-lighter text-grey-darker dark:text-white dark:bg-slate-500 border border-red rounded py-3 px-4 mb-3"
            value={newTask}
            onChange={(e) => {
              setNewTask(e.target.value);
              setNewTaskError("");
            }}
          />
        </div>
      </div>
      <div className="-mx-3 md:flex mb-2">
        <div className="md:w-1/3 px-3 mb-6 md:mb-0">
          <div className="relative">
            <select
              className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker  dark:text-white dark:bg-slate-500 py-3 px-4 pr-8 rounded"
              value={newPriority}
              onChange={onSetNewPriority}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
        </div>
        <div className="md:w-1/3 px-3 mb-6 md:mb-0">
          <input
            className="appearance-none block w-full bg-grey-lighter text-grey-darker  dark:text-white dark:bg-slate-500 border border-grey-lighter rounded py-3 px-4"
            type="date"
            value={unixToDateInput(newDueDate)}
            onChange={onSetNewDueDate}
          />
        </div>
        <div className="md:w-1/3 px-3 mb-6 md:mb-0">
          <button
            className="w-full bg-teal-500 rounded text-white py-3 hover:bg-teal-300 disabled:bg-slate-200"
            onClick={handleAddTask}
            disabled={newTask.length <= 0}
          >
            <FontAwesomeIcon size={"lg"} icon={faAdd} />
          </button>
        </div>
      </div>
    </div>
  );
}
