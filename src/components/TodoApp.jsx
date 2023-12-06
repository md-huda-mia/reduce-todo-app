// src/App.js
import React, { useState } from "react";
import "./TodoApp.css";
import useTodo from "../Hooks/useTodo";

const TodoApp = () => {
  const { todos, addTodo, toggleTodo, editTodo, deleteTodo } = useTodo();
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

  return (
    <div className="todo_app">
      <h1>ToDo App</h1>
      <div className="input_box">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleAddTodo}>
          {editingTodo ? "Edit" : "Add"} Todo
        </button>
      </div>
      <ul className="text_list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
              onClick={() => toggleTodo(todo.id)}>
              {todo.text}
            </span>
            <div className="box-btn">
              <button onClick={() => handleEditTodo(todo.id)}>Edit</button>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
