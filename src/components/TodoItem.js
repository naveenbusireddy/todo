import { nanoid } from "nanoid";
import React from "react";

function TodoItem({ todo, editClickHandler, deleteClickHandler }) {
  return (
    <>
      <li key={todo.id}>
        {todo.text}
        <button onClick={() => editClickHandler(todo)}>Edit</button>
        <button onClick={() => deleteClickHandler(todo.id)}>Del</button>
      </li>
      
    </>
  );
}

export default TodoItem;
