import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTimes,
  faSquare,
  faPen,
} from "@fortawesome/free-solid-svg-icons";

export default function StatusBox({ initstatus, onStatusChange }) {
  const [status, setStatus] = useState(initstatus);

  useEffect(() => {
    setStatus(initstatus);
  }, [initstatus]);

  const handleStatusChange = () => {
    const newStatus = getNextStatus(status);
    setStatus(newStatus);
    onStatusChange(newStatus);
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

  return (
    <>
      {status === "new" && (
        <button
          className="bg-stone-200 text-white rounded size-6 px-1 pb-0.5 accent-stone-200"
          onClick={handleStatusChange}
        >
          <FontAwesomeIcon icon={faSquare} />
        </button>
      )}
      {status === "edited" && (
        <button
          className="bg-blue-300 text-white rounded size-6 px-1 pb-0.5 accent-blue-200"
          onClick={handleStatusChange}
        >
          <FontAwesomeIcon icon={faPen} />
        </button>
      )}
      {status === "done" && (
        <button
          className="bg-teal-400 text-white rounded size-6 px-1 pb-0.5"
          onClick={handleStatusChange}
        >
          <FontAwesomeIcon icon={faCheck} />
        </button>
      )}
      {status === "failed" && (
        <button
          className="bg-red-400 text-white rounded size-6 px-1 pb-0.5"
          onClick={handleStatusChange}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      )}
    </>
  );
}
