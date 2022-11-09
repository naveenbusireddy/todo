import React from "react";

function AddTodoForm({ todo, inputChangeHandler, submitClickHandler }) {
  return (
    <div>
      <h2> Add Todo</h2>
      <label htmlFor="todo">Add Todo:</label>
      <input
        name="todo"
        type="text"
        value={todo}
        placeholder="Create new Todo"
        onChange={inputChangeHandler}
      />
      <button onClick={submitClickHandler}>Add</button>
    </div>
  );
}

export default AddTodoForm;
