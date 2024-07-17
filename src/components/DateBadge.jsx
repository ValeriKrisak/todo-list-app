export default function DateBadge({ datebadge }) {
  const timestamp = datebadge;
  const date = new Date(timestamp * 1000);

  const formattedDate = date.toLocaleString("en-US", {
    timeZone: "UTC",
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return <div className="m-1 p-0.5">{formattedDate}</div>;
}
