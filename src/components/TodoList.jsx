"use client";
import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import {
  addTask,
  updateTask,
  deleteTask,
  toggleEditing,
} from "@/utils/tasksUtils";
import { fetchListData } from "@/utils/fetchData";

export default function TodoList({ listId }) {
  const [listData, setListData] = useState();
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    if (listId) {
      const getData = async () => {
        try {
          const result = await fetchListData(listId);
          setListData(result);
          setTasks(result.tasks);
        } catch (error) {
          console.error("Error fetching todo list:", error);
        } finally {
          //setLoading(false);
          console.log("loaded");
        }
      };

      getData();
    }
  }, [listId]);

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks(addTask(tasks, newTask));
      setNewTask("");
    }
  };

  const handleEditTask = (id, newText) => {
    setTasks(updateTask(tasks, id, newText));
  };

  const handleDeleteTask = (id) => {
    setTasks(deleteTask(tasks, id));
  };

  const handleChange = (id, newText) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task))
    );
  };

  const handleToggleEditing = (id) => {
    setTasks(toggleEditing(tasks, id));
  };

  return (
    <div className="items-center md:w-2/3 border-2 shadow-sm p-6 rounded">
      <div className="pt-5 pb-5 text-center bg-neutral-50 dark:bg-slate-600 border-2 rounded">
        <h1 className="text-xl font-medium">{listData.listName}</h1>
        <p className="pt-4 text-base">{listData.listDesc}</p>
        <div className="mt-4 w-full">
          <input
            className="pl-2 border-2 rounded w-2/3 dark:text-gray-100 dark:bg-slate-400"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            className="ml-2 bg-teal-300 rounded size-7 px-1 pb-0.5 text-white"
            onClick={handleAddTask}
          >
            <FontAwesomeIcon icon={faAdd} />
          </button>
        </div>
      </div>
      <div className="pt-4">
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            item={task}
            onEditItem={handleEditTask}
            onDeleteItem={handleDeleteTask}
            onSaveEditing={handleToggleEditing}
            onChangeText={handleChange}
          />
        ))}
      </div>
    </div>
  );
}
