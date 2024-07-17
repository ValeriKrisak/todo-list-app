import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faSave } from "@fortawesome/free-solid-svg-icons";
import StatusBox from "@/components/StatusBox";
import PriorityBadge from "@/components/PriorityBadge";
import DateBadge from "@/components/DateBadge";
import UpdateTask from "./UpdateTask";
import { useTodoListContext } from "@/context/TodoListContext";
import {
  unixToDateInput,
  dateInputToUnix,
  calculateDaysOverdue,
} from "@/utils/dateFormatter";
import { validateDate } from "@/utils/validation";

export default function TodoItem({ item }) {
  const {
    handleEditTask,
    handleDeleteTask,
    handleToggleEditing,
  } = useTodoListContext();
  const [text, setText] = useState(item.text);
  const [updatedPriority, setUpdatedPriority] = useState(item.priority);
  const [updatedDueDate, setUpdatedDueDate] = useState(
    unixToDateInput(item.dueDate)
  );
  const [editing, setEditing] = useState(false);
  const [dateError, setDateError] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleBlur = () => {
    const dateValidationError = validateDate(updatedDueDate);
    if (dateValidationError) {
      setDateError(dateValidationError);
      return;
    }

    handleEditTask(item.id, text, dateInputToUnix(updatedDueDate));
    setDateError("");
  };

  const handleToggle = () => {
    if (editing) {
      const dateValidationError = validateDate(updatedDueDate);
      if (dateValidationError) {
        setDateError(dateValidationError);
        return;
      }
    }
    setEditing(!editing);
    handleToggleEditing(
      item.id,
      text,
      updatedPriority,
      dateInputToUnix(updatedDueDate)
    );
    setDateError("");
  };

  const handlePriorityChange = (e) => {
    const editPriorityValue = e.target.value;
    setUpdatedPriority(editPriorityValue);
  };

  const handleDueDateChange = (e) => {
    setUpdatedDueDate(e.target.value);
    const dateValidationError = validateDate(e.target.value);
    if (dateValidationError) {
      setDateError(dateValidationError);
    } else {
      setDateError("");
    }
  };

  const daysOverdue = calculateDaysOverdue(updatedDueDate);

  return (
    <div className="flex justify-center items-center w-full mb-1">
      <div className="w-full flex items-center">
        <StatusBox itemId={item.id} initstatus={item.taskStatus} />
        <div className="ml-5 w-11/12">
          {!editing ? (
            <>
              <p
                className={`${
                  item.taskStatus === "done" ? "line-through" : ""
                }`}
              >
                {text}
              </p>
              <div className="flex text-justify text-sm items-center">
                <PriorityBadge priority={updatedPriority} />
                <DateBadge datebadge={dateInputToUnix(updatedDueDate)} />
                {daysOverdue > 0 && item.taskStatus !== "done" && (
                  <div className="text-red-400">
                    This task is {daysOverdue} day{daysOverdue > 1 ? "s" : ""}{" "}
                    overdue.
                  </div>
                )}
              </div>
            </>
          ) : (
            <UpdateTask
              text={text}
              priority={updatedPriority}
              dueDate={updatedDueDate}
              onTextChange={handleTextChange}
              onPriorityChange={handlePriorityChange}
              onDueDateChange={handleDueDateChange}
              onBlur={handleBlur}
            />
          )}
          {dateError && (
            <div className="text-red-300 text-center">{dateError}</div>
          )}
        </div>
      </div>
      <div className="flex justify-center">
        {editing ? (
          <button
            className="bg-blue-500 text-white rounded size-7 px-1 pb-0.5"
            onClick={handleToggle}
          >
            <FontAwesomeIcon icon={faSave} />
          </button>
        ) : (
          <button
            className="bg-teal-500 text-white rounded size-7 px-1 pb-0.5 disabled:bg-slate-500"
            onClick={handleToggle}
            disabled={item.taskStatus === "done"}
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>
        )}
        <button
          className="bg-red-300 text-white rounded size-7 px-1 pb-0.5 ml-1"
          onClick={() => handleDeleteTask(item.id)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
}
