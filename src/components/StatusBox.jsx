import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTimes,
  faSquare,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { useTodoListContext } from "@/context/TodoListContext";

const statusConfig = {
  new: { icon: faSquare, className: "bg-stone-200" },
  edited: { icon: faPen, className: "bg-blue-300" },
  done: { icon: faCheck, className: "bg-teal-400" },
  failed: { icon: faTimes, className: "bg-red-400" },
};

export default function StatusBox({ itemId, initstatus }) {
  const { handleStatusChange } = useTodoListContext();
  const [status, setStatus] = useState(initstatus);

  useEffect(() => {
    setStatus(initstatus);
  }, [initstatus]);

  const handleStatusUpdate = () => {
    const newStatus = getNextStatus(status);
    setStatus(newStatus);
    handleStatusChange(itemId, newStatus);
  };

  const getNextStatus = (currentStatus) => {
    switch (currentStatus) {
      case "new":
      case "edited":
        return "done";
      case "done":
        return "failed";
      default:
        return "new";
    }
  };

  const { icon, className } = statusConfig[status];

  return (
    <>
      <button
        className={`${className} text-white rounded size-6 px-1 pb-0.5`}
        onClick={handleStatusUpdate}
      >
        <FontAwesomeIcon icon={icon} />
      </button>
    </>
  );
}
