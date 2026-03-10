import React, { useCallback, useReducer } from "react";
import { ThemeContext, useTheme } from "../contexts/ThemeContext";
import { Button } from "react-bootstrap";

const initialState = { isOn: false };

function reducer(state, action) {
  switch (action.type) {
    case "toggle":
      return { isOn: !state.isOn };
    case "turnOn":
      return { isOn: true };
    case "turnOff":
      return { isOn: false };
    default:
      return state;
  }
}
function LightSwitch() {
  const [state, dispatch] = useReducer(reducer, initialState);
    const {theme, toggleTheme} = useTheme();

  const toggle = () => dispatch({ type: "toggle" });
  const turnOn = () => dispatch({ type: "turnOn" });
  const turnOff = () => dispatch({ type: "turnOff" });

  const buttonStyle = {
    margin: "5px",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px"
  };
  return (
    <div style={{ padding: "20px", backgroundColor: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff", borderRadius: "10px" }}>
      <h2>Công tắc đèn</h2>
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>
        Đèn đang: {state.isOn ? "BẬT" : "TẮT"}
      </p>
      <Button  style={{ ...buttonStyle, backgroundColor: theme === "light" ? "#007bff" : "#6c757d", color: "#fff" }} onClick={toggle}>
        Toggle
      </Button>
      <Button  style={{ ...buttonStyle, backgroundColor: theme === "light" ? "#28a745" : "#218838", color: "#fff" }} onClick={turnOn}>
        Turn On
      </Button>
      <Button  style={{ ...buttonStyle, backgroundColor: theme === "light" ? "#dc3545" : "#c82333", color: "#fff" }} onClick={turnOff}>
        Turn Off
      </Button>
    </div>
  );
}
export default LightSwitch;