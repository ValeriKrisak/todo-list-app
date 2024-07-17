import { useState, useEffect } from "react";
import { fetchListData, fetchList } from "@/utils/fetchData";
import {
    addTask,
    updateTask,
    deleteTask,
    toggleEditing,
    updateStatus,
} from "@/utils/tasksUtils";
import { validateInput } from '../utils/validation';

const useTodoList = (listId) => {
    const [listData, setListData] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [newPriority, setNewPriority] = useState("Medium");
    const [newDueDate, setNewDueDate] = useState(new Date);
    const [newTaskError, setNewTaskError] = useState("");

    useEffect(() => {
        if (listId) {
            const getData = async () => {
                try {
                    const result = await fetchListData(listId);
                    setTasks(result);
                } catch (error) {
                    console.error("Error fetching todo list:", error);
                }
            };

            getData();
        }
    }, [listId]);

    useEffect(() => {
        if (listId) {
            const getData = async () => {
                try {
                    const result = await fetchList(listId);
                    setListData(result);
                } catch (error) {
                    console.error("Error fetching todo list:", error);
                }
            };
            getData();
        }
    }, [listId]);


    const handleAddTask = async () => {
        if (newTask.trim() !== "") {
            try {
                const maxLength = 80;
                const validationError = validateInput(newTask, maxLength);

                if (validationError) {
                    setNewTaskError(validationError);
                    return;
                }

                const updatedTasks = await addTask(tasks, newTask, listId, newPriority, newDueDate);
                setTasks(updatedTasks);
                setNewTask("");
                setNewPriority("");
                setNewDueDate(new Date);
                setNewTaskError("");
            } catch (error) {
                console.error("Error adding task:", error);
            }
        }
    };

    const handleDeleteTask = async (id) => {
        try {
            const updatedTasks = await deleteTask(tasks, id, listId);
            setTasks(updatedTasks);
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };

    const handleEditTask = async (id, newText, editPriority, editDueDate) => {
        try {
            const maxLength = 80;
            const validationError = validateInput(newText, maxLength);

            if (validationError) {
                setNewTaskError(validationError);
                return;
            }

            const updatedTasks = await updateTask(tasks, listId, id, newText, editPriority, editDueDate);
            setTasks(updatedTasks);
            setNewTaskError("");
        } catch (error) {
            console.error("Error updating task:", error);
        }
    };

    const handleToggleEditing = async (id, newText, editPriority, editDueDate) => {
        try {
            const updatedTasks = await toggleEditing(tasks, id, listId, newText, editPriority, editDueDate);
            setTasks(updatedTasks);
        } catch (error) {
            console.error("Error toggling editing:", error);
        }
    };

    const handleStatusChange = async (id, newStatus) => {
        try {
            const updatedTasks = await updateStatus(tasks, id, newStatus, listId);
            setTasks(updatedTasks);
        } catch (error) {
            console.error("Error updating status:", error);
        }
    };

    return {
        listData,
        tasks,
        newTask,
        newTaskError,
        newPriority,
        newDueDate,
        setNewTask,
        setNewTaskError,
        setNewPriority,
        setNewDueDate,
        handleAddTask,
        handleEditTask,
        handleDeleteTask,
        handleToggleEditing,
        handleStatusChange,

    };
};

export default useTodoList;
