export default function ListCard({ item, onShowList }) {
  return (
    <div className="block rounded bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <h1 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        {item.listName}
      </h1>
      <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        {item.listDesc}
      </p>
      <div className="flex">
        <p>Tasks: {item.tasks.length}</p>
        <p>Complete: 0</p>
      </div>

      <button
        type="button"
        className="rounded border-2 p-2"
        onClick={() => onShowList(item.id)}
      >
        Show ToDo List
      </button>
    </div>
  );
}
