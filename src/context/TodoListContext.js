import React, { createContext, useContext } from "react";
import useTodoList from "@/hooks/useTodoList";

const TodoListContext = createContext();

export const TodoListProvider = ({ children, listId }) => {
    const todoList = useTodoList(listId);

    return (
        <TodoListContext.Provider value={todoList}>
            {children}
        </TodoListContext.Provider>
    );
};

export const useTodoListContext = () => useContext(TodoListContext);