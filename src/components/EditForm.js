import React from "react";

function EditForm({ currentTodo, editInputChangeHandler, setIsEditing, editFormSubmit }) {
  return (
    <div>
      <h2> Edit Todo</h2>
      <label htmlFor="updateTodo">Update Todo:</label>
      <input
        name="updateTodo"
        type="text"
        placeholder="Update Todo"
        value={currentTodo.text}
        onChange={editInputChangeHandler}
      />
      <button onClick={editFormSubmit}>Update</button>
      <button onClick={() => setIsEditing(false)}>Cancel</button>
    </div>
  );
}

export default EditForm;
