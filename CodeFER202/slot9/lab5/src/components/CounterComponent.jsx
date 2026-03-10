import React, { useReducer } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { Button, Card } from "react-bootstrap";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

function CounterComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { theme, toggleTheme } = useTheme();

  const buttonStyle = {
    margin: "5px",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px"
  };

  const containerStyle = {
    padding: "20px",
    border: "1px solid #ccc",
    backgroundColor: theme === "light" ? "#ffffff" : "#333",
    color: theme === "light" ? "#000000" : "#ffffff",
    borderRadius: "10px"
  };

  return (
    <div style={containerStyle}>
      <h2>Bộ đếm đa năng</h2>

      <p style={{ fontSize: "24px", fontWeight: "bold" }}>
        Giá trị hiện tại: {state.count}
      </p>

      {/* Toggle Theme */}
      <button
        style={{
          ...buttonStyle,
          backgroundColor: theme === "light" ? "#007bff" : "#6c757d",
          color: "#fff"
        }}
        onClick={toggleTheme}
      >
        {theme === "light" ? "Chuyển sang Dark" : "Chuyển sang Light"}
      </button>

      <div>
        <button
          onClick={() => dispatch({ type: "increment" })}
          style={{
            ...buttonStyle,
            backgroundColor: theme === "light" ? "#28a745" : "#6c757d",
            color: "#fff"
          }}
        >
          Tăng (+1)
        </button>

        <button
          onClick={() => dispatch({ type: "decrement" })}
          style={{
            ...buttonStyle,
            backgroundColor: theme === "light" ? "#dc3545" : "#6c757d",
            color: "#fff"
          }}
        >
          Giảm (-1)
        </button>

        <button
          onClick={() => dispatch({ type: "reset" })}
          style={{
            ...buttonStyle,
            backgroundColor: theme === "light" ? "#ffc107" : "#6c757d",
            color: theme === "light" ? "#000" : "#fff"
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default CounterComponent;