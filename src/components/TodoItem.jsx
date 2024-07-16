import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faSave } from "@fortawesome/free-solid-svg-icons";
import StatusBox from "@/components/StatusBox";
import { useState } from "react";

export default function TodoItem({
  item,
  onEditItem,
  onDeleteItem,
  onToggleEditing,
  onChangeStatus,
}) {
  const [text, setText] = useState(item.text);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleBlur = () => {
    onEditItem(item.id, text);
  };

  return (
    <div className="flex justify-center items-center w-full mb-1">
      <div className="w-full flex items-center">
        <StatusBox
          initstatus={item.taskStatus}
          onStatusChange={(newStatus) => onChangeStatus(item.id, newStatus)}
        />

        {!item.editing ? (
          <p className="ml-5">{text}</p>
        ) : (
          <input
            type="text"
            className="w-11/12 bg-transparent border-b border-teal-500 ml-5"
            value={text}
            onChange={handleTextChange}
            onBlur={handleBlur}
          />
        )}
      </div>
      <div className="flex justify-center">
        {!item.editing ? (
          <button
            className="bg-blue-300 text-white rounded size-7 px-1 pb-0.5"
            onClick={() => onToggleEditing(item.id)}
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>
        ) : (
          <button
            className="bg-teal-500 text-white rounded size-7 px-1 pb-0.5"
            onClick={() => onToggleEditing(item.id)}
          >
            <FontAwesomeIcon icon={faSave} />
          </button>
        )}
        <button
          className="bg-red-300 text-white rounded size-7 px-1 pb-0.5 ml-1"
          onClick={() => onDeleteItem(item.id)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
}
