export default function PriorityBadge({ priority }) {
  let badgeColor = "";
  switch (priority.toLowerCase()) {
    case "high":
      badgeColor = "bg-red-300";
      break;
    case "medium":
      badgeColor = "bg-amber-300";
      break;
    case "low":
      badgeColor = "bg-green-300";
      break;
    default:
      badgeColor = "bg-gray-300";
      break;
  }

  return (
    <span
      className={`inline-block px-2 text-center font-semibold lowercase text-white dark:text-slate-700 rounded ${badgeColor}`}
    >
      {priority}
    </span>
  );
}
