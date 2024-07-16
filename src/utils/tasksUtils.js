import api from "./api";

export const addTask = async (tasks, newTask, listId) => {
    try {
        const response = await api.post(`/todolists/${listId}/tasks`, { text: newTask, taskStatus: 'new', taskListId: listId });
        return [...tasks, response.data];
    } catch (error) {
        console.error("Error adding task:", error);
        throw error;
    }
};


export const updateTask = async (tasks, listId, id, newText) => {
    try {
        const taskToUpdate = tasks.find(task => task.id === id);
        const response = await api.put(`/todolists/${listId}/tasks/${id}`, { ...taskToUpdate, text: newText, editing: !taskToUpdate.editing });

        const updatedTasks = tasks.map(task => task.id === id ? response.data : task);

        return updatedTasks;
    } catch (error) {
        console.error("Error updating task:", error);
        throw error;
    }
};

export const updateStatus = async (tasks, id, newStatus, listId) => {
    try {
        const taskToUpdate = tasks.find(task => task.id === id);
        const response = await api.put(`/todolists/${listId}/tasks/${id}`, { ...taskToUpdate, taskStatus: newStatus, editing: false });
        return tasks.map(task => task.id === id ? response.data : task);
    } catch (error) {
        console.error("Error updating status:", error);
        throw error;
    }
};

export const deleteTask = async (tasks, id, listId) => {
    try {
        await api.delete(`/todolists/${listId}/tasks/${id}`);
        return tasks.filter(task => task.id !== id);
    } catch (error) {
        console.error("Error deleting task:", error);
        throw error;
    }
};

export const toggleEditing = async (tasks, id, listId, newText) => {
    try {
        const taskToToggle = tasks.find(task => task.id === id);
        const response = await api.put(`/todolists/${listId}/tasks/${id}`, { ...taskToToggle, editing: !taskToToggle.editing, text: newText });
        return tasks.map(task => task.id === id ? response.data : task);
    } catch (error) {
        console.error("Error toggling editing:", error);
        throw error;
    }
};
