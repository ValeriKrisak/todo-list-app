export default function UpdateTask({
  text,
  priority,
  dueDate,
  onTextChange,
  onPriorityChange,
  onDueDateChange,
  onBlur,
}) {
  return (
    <>
      <input
        type="text"
        className="w-full bg-transparent border-b border-teal-500"
        value={text}
        onChange={onTextChange}
        onBlur={onBlur}
      />
      <select
        className="w-1/2 bg-blue-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500  p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
        value={priority}
        onChange={onPriorityChange}
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <input
        type="date"
        className="w-1/2 bg-blue-50 "
        value={dueDate}
        onChange={onDueDateChange}
      />
    </>
  );
}
