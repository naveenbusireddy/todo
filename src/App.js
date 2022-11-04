import "./App.css";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

function App() {
  // state to keep track of the value in the input
  const [input, setInput] = useState("");

  // Getting local storage todos and setting into todos track
  const localTodos = () => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      // return the parsed JSON object back to Javascript object
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  };

  // state to keep track of todos
  const [todos, setTodos] = useState(localTodos);

  useEffect(() => {
    // localstorage only support storing strings as keys and values.
    // JSON.stringify will convert the object into a JSON string.
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Function to create a new object on add button
  const clickHandler = (event) => {
    //prevent the browser default behavior or refreshing the page.
    event.preventDefault();

    //Don't submit if the input is an empty string
    if (input !== "") {
      setTodos([...todos, { id: nanoid(), input: input }]);
    }
    setInput("");
  };

  function deleteClickHandler(id) {
    
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(removeItem);
  }

  return (
    <>
      <input
        type="text"
        value={input}
        placeholder="Create new Todo"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={clickHandler}>Add</button>
      <div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.input}
              <button onClick={() => deleteClickHandler(todo.id)}>Del</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
