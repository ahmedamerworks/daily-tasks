import { useEffect, useRef, useState } from "react";
import "./tasks.css";

interface Todo {
  id: string;
  title: string;
  completed: boolean;
  number: number;
  dateCreated: string;
}

type Todos = Array<Todo>;

const Tasks = () => {
  const [newItem, setNewItem] = useState<string>("");
  const [todos, setTodos] = useState<Todos>([]);
  const [showList, setShowList] = useState<boolean>(true);

  function handleSubmit(e: React.ChangeEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (!newItem) {
      alert("Input field must not be empty!");
      return;
    }
    setTodos((currentTodos): Todos => {
      const timeHolder = new Date().toLocaleTimeString();
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title: newItem,
          completed: false,
          number: currentTodos.length,
          dateCreated: timeHolder,
        },
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
          onChange={(e) => {
            setNewItem(e.target.value);
            setShowList(true);
          }}
          type="text"
          className="form-input"
          placeholder="Do the dishes..."
        />
        <button className="phone-hide_btn btn" type="submit">
          Add Task
        </button>
      </form>
      <div className="form-btns">
        <button
          className="btn"
          onClick={() => (showList ? setShowList(false) : setShowList(true))}
        >
          {showList ? "Hide List!" : "Show List!"}
        </button>
        <button className="btn" onClick={() => setTodos([])}>
          Delete All Tasks!!!
        </button>{" "}
      </div>
      <ul className={showList ? "tasks-list" : "tasks-list_hidden"}>
        {todos.map((todo: Todo) => {
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
        {todos.length === 0 && "No Tasks Created"}
      </ul>
    </>
  );
};

export default Tasks;
