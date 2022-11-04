import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const clickHandler = () => {
    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={clickHandler}>Add</button>
      <div>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </div>
    </>
  );
}

export default App;
