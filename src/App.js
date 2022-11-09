import "./App.css";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import TodoItem from "./components/TodoItem";
import AddTodoForm from "./components/AddTodoForm";
import EditForm from "./components/EditForm";

function App() {

  const localTodos = () => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  };

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(localTodos);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function inputChangeHandler(e) {
    setTodo(e.target.value);
  }

  function editInputChangeHandler(e) {
    setCurrentTodo({...currentTodo, text: e.target.value})
  }

  const submitClickHandler = (event) => {
    event.preventDefault();
    if (todo !== "") {
      setTodos([...todos, { id: nanoid(), text: todo }]);
    }
    setTodo("");
  };

  const editFormSubmit = (e) => {
    e.preventDefault();
    handleUpdateTodo(currentTodo.id, currentTodo);
  };

  const deleteClickHandler = (id) => {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(removeItem);
  };

  const handleUpdateTodo = (id, updatedTodo) => {
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    setIsEditing(false);
    setTodos(updatedItem);
  };

  const editClickHandler = (todo) => {
    setIsEditing(true);
    setCurrentTodo({ ...todo });
  };

  return (
    <>
      {isEditing ? (
        <EditForm
          currentTodo={currentTodo}
          setIsEditing={setIsEditing}
          editInputChangeHandler={editInputChangeHandler}
          editFormSubmit={editFormSubmit}
        />
      ) : (
        <AddTodoForm todo={todo} inputChangeHandler={inputChangeHandler} submitClickHandler={submitClickHandler} />
      )}
      <div>
        <ol>
          {todos.map((todo) => (
            <TodoItem
              todo={todo}
              editClickHandler={editClickHandler}
              deleteClickHandler={deleteClickHandler}
            />
          ))}
        </ol>
      </div>
    </>
  );
}

export default App;
