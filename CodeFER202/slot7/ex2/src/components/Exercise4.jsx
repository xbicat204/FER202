import { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        { id: Date.now(), text: action.text },
      ];

    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.id);

    default:
      return state;
  }
}

function Exercise4() {
  const [tasks, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") return;
    dispatch({ type: "ADD_TASK", text: input });
    setInput("");
  };

  return (
    <div className="exercise4-container">
      <div className="exercise4-card">
        <h2>Exercise 4: Todo List</h2>

        <div className="todo-input">
          <input
            placeholder="Enter a new task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleAdd}>Add</button>
        </div>

        <ul className="todo-list">
          {tasks.map((task) => (
            <li key={task.id}>
              <span className="todo-text">{task.text}</span>
              <button
                onClick={() =>
                  dispatch({ type: "DELETE_TASK", id: task.id })
                }
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Exercise4;
