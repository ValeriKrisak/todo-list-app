export default function LoadingSpinner({ loading }) {
  return (
    <div className="justify-items-center">
      <div role="status" className="flex items-center">
        <div className="w-12 h-12 relative">
          <svg
            aria-hidden="true"
            className={`w-full h-full text-blue-300 ${
              loading ? "animate-pulse" : ""
            }`}
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="50"
              cy="50"
              r="48"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              d="M50 2
            a 48 48 0 0 1 0 96
            a 48 48 0 0 1 0 -96"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              style={{
                strokeDasharray: loading ? "150" : "0",
                transition: "stroke-dasharray 2s ease",
              }}
            />
          </svg>
        </div>
        {loading && <span className="ml-4">Loading...</span>}
      </div>
    </div>
  );
}
