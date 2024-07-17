export default function PriorityBadge({ priority }) {
  let badgeColor = "";
  switch (priority.toLowerCase()) {
    case "high":
      badgeColor = "bg-orange-300";
      break;
    case "medium":
      badgeColor = "bg-indigo-300";
      break;
    case "low":
      badgeColor = "bg-blue-300";
      break;
    default:
      badgeColor = "bg-gray-300";
      break;
  }

  return (
    <span
      className={`bg-inline-block bg- px-2 text-center font-semibold lowercase text-white dark:text-slate-700 rounded ${badgeColor}`}
    >
      {priority}
    </span>
  );
}
