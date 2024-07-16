"use client";
import React, { useState, useEffect } from "react";
import TodoList from "@/components/TodoList";
import ListCard from "@/components/ListCard";
import { fetchAllData } from "@/utils/fetchData";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [listId, setListId] = useState(1);
  useEffect(() => {
    const fetchListsData = async () => {
      try {
        const data = await fetchAllData({
          user: "string",
          listName: "string",
          listDesc: "string",
          id: "number",
        });
        setData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchListsData();
  }, []);

  const handleShowList = (id) => {
    setListId(id);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24 sm:w-full">
      {!loading ? (
        <div className="w-full mb-4">
          <TodoList listId={listId} />
        </div>
      ) : (
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
              <span className="sr-only">Loading...</span>
            </div>
            {loading && <span className="ml-4">Loading...</span>}
          </div>
        </div>
      )}
      {!loading && (
        <div className="p-3 text-center border-2 rounded bg-blue-50 dark:bg-transparent">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-4 p-4">
            <>
              {data.map((item) => (
                <ListCard
                  key={item.id}
                  item={item}
                  onShowList={handleShowList}
                />
              ))}
            </>
          </div>
        </div>
      )}
    </main>
  );
}
