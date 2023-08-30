import { useState } from "react";
import "./main.css";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });

    setNewItem("");
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  // function displayTime() {
  //   const datetime = new Date().toLocaleString();
  //   document.getElementById("time").textContent = datetime;
  // }

  // function updateTime() {
  //   const timeDisplayed = document.getElementById("time");
  //   const dateString = new Date().toLocaleString();
  //   const formattedString = dateString.replace(",", "-");
  //   timeDisplayed.textContent = formattedString;
  // }

  // displayTime();
  // setInterval(updateTime, 1000);

  return (
    <>
      <span id="time"></span>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Daily Task</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item-input"
          />
        </div>
        <button className="form-button">Add</button>
      </form>
      <h1 className="list-title">Daily Tasks List</h1>
      <ul className="list">
        {todos.length === 0 && "No Tasks Created"}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                />
                {todo.title}
              </label>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="delete-button-list"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
