import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function StatusBox({ status }) {
  return (
    <>
      {/* <button className="bg-stone-200 text-white rounded size-6 px-1 pb-0.5"></button> */}
      {status === "new" ? (
        <button className="bg-teal-400 text-white rounded size-6 px-1 pb-0.5">
          <FontAwesomeIcon icon={faCheck} />
        </button>
      ) : (
        <button className="bg-red-400 text-white rounded size-6 px-1 pb-0.5">
          <FontAwesomeIcon icon={faTimes} />
        </button>
      )}
    </>
  );
}
