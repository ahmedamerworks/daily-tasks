import { useState } from "react";
import "./tasks.css";
import { todo } from "node:test";

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

type Todos = Array<Todo>;

const Tasks = () => {
  const [newItem, setNewItem] = useState<string>("");
  const [todos, setTodos] = useState<Todos>([]);

  function handleSubmit(e: React.ChangeEvent<HTMLFormElement>): void {
    e.preventDefault();

    setTodos((currentTodos): Todos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });

    setNewItem("");
  }

  function toggleTodo(id: string, completed: boolean) {
    setTodos((currentTodos): Todos => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  function deleteTodo(id: string) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          className="form-input"
          placeholder="Do the dishes..."
        />
        <button className="btn" type="submit">
          Add Task
        </button>
        {/* <button className="btn" onClick={() => {}}>Delete All Tasks</button> */}
      </form>
      <h1>Task List</h1>
      <ul className="tasks-list">
        {todos.length === 0 && "No Tasks Created"}
        {todos.map((todo) => {
          return (
            <li className="list-item" key={todo.id}>
              <label>
                <input
                  className="list-checkbox"
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                ></input>
              </label>
              {todo.title}
              <button onClick={() => deleteTodo(todo.id)} className="btn">
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Tasks;
