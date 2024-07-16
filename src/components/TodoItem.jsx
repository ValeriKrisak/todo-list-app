import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faSave } from "@fortawesome/free-solid-svg-icons";

import StatusBox from "@/components/StatusBox";

/* const DEFAULT_TASK = "w-4 h-4";

const DONE_TASK =
  "w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded accent-teal-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600";
const FAILD_TASK =
  "w-4 h-4 text-red-600 bg-red-100 border-red-300 rounded accent-red-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600";
 */
export default function TodoItem({
  item,
  onEditItem,
  onDeleteItem,
  onChangeText,
  onSaveEditing,
}) {
  function statusUpdate() {}

  return (
    <div className="flex justify-center items-center w-full mb-1">
      <div className="w-full flex items-center">
        {/* <input type="checkbox" onChange={toggleCheckbox} /> */}
        <StatusBox status={item.taskStatus} />

        {!item.editing ? (
          <p className="ml-5">{item.text}</p>
        ) : (
          <input
            placeholder="text"
            className="min-w-full bg-transparent border-b border-teal-500 ml-5"
            onChange={(e) => onChangeText(item.id, e.target.value)}
          />
        )}
      </div>
      <div className="flex justify-center">
        {!item.editing ? (
          <button
            className="bg-blue-300 text-white rounded size-7 px-1 pb-0.5"
            onClick={() => onEditItem(item.id)}
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>
        ) : (
          <button
            className="bg-teal-500 text-white rounded size-7 px-1 pb-0.5"
            onClick={() => onSaveEditing(item.id)}
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
