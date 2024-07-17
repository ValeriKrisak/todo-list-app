"use client";
import React, { useState, useEffect } from "react";
import TodoList from "@/components/TodoList";
import ListCard from "@/components/ListCard";
import LoadingSpinner from "@/components/LoadingSpinner";
import { fetchAllData } from "@/utils/fetchData";
import { TodoListProvider } from "@/context/TodoListContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [listId, setListId] = useState(1);
  const [darkMode, setDarkMode] = useState(false);

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

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24 sm:w-full dark:bg-slate-800 dark:text-gray-200 text-slate-800">
      <button
        className="fixed top-4 right-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded"
        onClick={toggleDarkMode}
      >
        {darkMode ? (
          <FontAwesomeIcon icon={faSun} />
        ) : (
          <FontAwesomeIcon icon={faMoon} />
        )}
      </button>

      {loading ? (
        <LoadingSpinner loading={loading} />
      ) : (
        <TodoListProvider listId={listId}>
          <div className="w-full mb-4">
            <TodoList />
          </div>

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
        </TodoListProvider>
      )}
    </main>
  );
}
