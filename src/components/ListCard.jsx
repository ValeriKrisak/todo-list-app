import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { formatDateCardList } from "@/utils/dateFormatter";

export default function ListCard({ item, onShowList }) {
  return (
    <div className="block rounded bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 ">
      <div className="md:min-h-14">
        <h1 className="mb-4 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {item.listName}
        </h1>
      </div>
      <div className="mb-4 mt-5">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faUser} />
          <p className="ml-2"> {item.user}</p>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faCalendarDay} />
          <p className="ml-2">{formatDateCardList(item.createdAt)}</p>
        </div>
      </div>

      <button
        type="button"
        className="rounded border-2 p-2 w-full hover:bg-slate-100 dark:hover:bg-gray-700"
        onClick={() => onShowList(item.id)}
      >
        Show ToDo List
      </button>
    </div>
  );
}
