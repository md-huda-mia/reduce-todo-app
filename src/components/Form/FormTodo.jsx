import React from "react";

const FormTodo = ({
  submitHandler,
  newTodo,
  setNewTodo,
  editingTodo,
  handleAddTodo,
}) => {
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button type="submit" onClick={handleAddTodo}>
        {editingTodo ? "Edit" : "Add"} Task
      </button>
    </form>
  );
};

export default FormTodo;
