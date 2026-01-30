import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: Math.max(0, state.count - 1) };

    case "SET_INPUT":
      return { count: Math.max(0, action.value) };

    default:
      return state;
  }
}

function Exercise1() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="exercise-card">
      <h2>Exercise 1: Quantity</h2>

      <div className="counter-box">
        <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>

        <input
          type="number"
          value={state.count}
          onChange={(e) =>
            dispatch({
              type: "SET_INPUT",
              value: Number(e.target.value),
            })
          }
        />

        <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      </div>
    </div>
  );
}

export default Exercise1;
