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
          tasks: [],
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
      <TodoList listId={listId} />
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {!loading ? (
          <>
            {data.map((item) => (
              <ListCard key={item.id} item={item} onShowList={handleShowList} />
            ))}
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </main>
  );
}
