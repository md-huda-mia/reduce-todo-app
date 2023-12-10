import React from "react";
import empty from "../../assets/icons8-empty-64.png";
const TodoList = ({ handleEditTodo, deleteTodo, toggleTodo, todos }) => {
  return (
    <>
      <ul className="text_list">
        {todos.length > 0 ? (
          todos.map((todo) => (
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
          ))
        ) : (
          <>
            <img src={empty} alt="" />
            <p className="empty">empty your task</p>
          </>
        )}
      </ul>
    </>
  );
};

export default TodoList;
