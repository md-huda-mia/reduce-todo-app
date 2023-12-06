// useTodo.js
import { useReducer } from "react";
import { todoReducer } from "../Reducer/todoReducer";

const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);

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

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
  };
};

export default useTodo;
