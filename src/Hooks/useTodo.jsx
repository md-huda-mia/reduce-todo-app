// useTodo.js
import { useEffect, useReducer } from "react";
import { todoReducer } from "../Reducer/todoReducer";

// getting the values of local storage
const getDatafromLS = () => {
  const data = localStorage.getItem("todos");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, getDatafromLS());

  const addTodo = (text) => {
    dispatch({ type: "ADD_TODO", payload: text });
  };

  const toggleTodo = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const editTodo = (id, text) => {
    dispatch({ type: "EDIT_TODO", payload: { id, text } });
  };

  const deleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };
  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
  };
};

export default useTodo;
