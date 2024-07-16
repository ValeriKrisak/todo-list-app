export const addTask = (tasks, newTask) => {
    return [
        ...tasks,
        { id: Date.now(), text: newTask, editing: false, taskStatus: 'new' }
    ];
};

export const updateTask = (tasks, id, newText) => {
    return tasks.map(task => task.id === id ? { ...task, text: newText, editing: !task.editing } : task);
};

export const deleteTask = (tasks, id) => {
    return tasks.filter(task => task.id !== id);
};

export const toggleEditing = (tasks, id) => {
    return tasks.map(task => task.id === id ? { ...task, editing: !task.editing } : task);
};
