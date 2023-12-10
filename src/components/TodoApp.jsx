// src/App.js
import React, { useState } from "react";
import "./TodoApp.css";
import useTodo from "../Hooks/useTodo";

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
      <h1>ToDo App</h1>
      <div className="input_box">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button type="submit" onClick={handleAddTodo}>
            {editingTodo ? "Edit" : "Add"} Todo
          </button>
        </form>
      </div>

      <ul className="text_list">
        {todos.map((todo) => (
          <>
            <li key={todo.id}>
              <div className="todo_text">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
                <span
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                  onClick={() => toggleTodo(todo.id)}>
                  {todo.text}
                </span>
              </div>
              <div className="box-btn">
                <button onClick={() => handleEditTodo(todo.id)}>Edit</button>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              </div>
            </li>
          </>
        ))}
      </ul>
      {todos.length > 0 && (
        <button className="allDeleteBtn" onClick={removeAllTodos}>
          delete
        </button>
      )}
    </div>
  );
};

export default TodoApp;
