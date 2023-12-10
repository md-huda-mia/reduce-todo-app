// src/App.js
import React, { useState } from "react";

import "./TodoApp.css";
import useTodo from "../Hooks/useTodo";
import FormTodo from "./Form/FormTodo";
import TodoList from "./TodoList/TodoList";

const TodoApp = () => {
  const { todos, addTodo, toggleTodo, editTodo, deleteTodo, removeAllTodos } =
    useTodo();
  const [newTodo, setNewTodo] = useState("");
  const [editingTodo, setEditingTodo] = useState(null);

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      if (editingTodo) {
        editTodo(editingTodo, newTodo);
        setEditingTodo(null);
      } else {
        addTodo(newTodo);
      }
      setNewTodo("");
    }
  };

  const handleEditTodo = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    setNewTodo(todoToEdit.text);
    setEditingTodo(id);
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="todo_app">
      <h1>Task Management Application</h1>
      <div className="input_box">
        <FormTodo
          submitHandler={submitHandler}
          newTodo={newTodo}
          setNewTodo={setNewTodo}
          editingTodo={editingTodo}
          handleAddTodo={handleAddTodo}></FormTodo>
      </div>
      <TodoList
        handleEditTodo={handleEditTodo}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
        todos={todos}></TodoList>

      {todos.length > 0 && (
        <button className="allDeleteBtn" onClick={removeAllTodos}>
          delete
        </button>
      )}
    </div>
  );
};

export default TodoApp;
