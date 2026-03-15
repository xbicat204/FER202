import { useReducer } from "react";

const initialState = {
  name: "",
  price: "",
  category: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "RESET_FORM":
      return initialState;

    default:
      return state;
  }
}

function Exercise3() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="exercise-3-wrapper">
      <div className="exercise-3-card">
        <h2>Exercise 3: Product Form (useReducer)</h2>

        <div className="product-form">
          <input
            type="text"
            placeholder="Product Name"
            value={state.name}
            onChange={(e) =>
              dispatch({
                type: "CHANGE_INPUT",
                field: "name",
                value: e.target.value,
              })
            }
          />

          <input
            type="number"
            placeholder="Price"
            min="0"
            value={state.price}
            onChange={(e) =>
              dispatch({
                type: "CHANGE_INPUT",
                field: "price",
                value: e.target.value,
              })
            }
          />

          <select
            value={state.category}
            onChange={(e) =>
              dispatch({
                type: "CHANGE_INPUT",
                field: "category",
                value: e.target.value,
              })
            }
          >
            <option value="">-- Select category --</option>
            <option value="Food">Food</option>
            <option value="Drink">Drink</option>
            <option value="Other">Other</option>
          </select>

          <button
            className="reset-btn"
            onClick={() => dispatch({ type: "RESET_FORM" })}
          >
            Reset
          </button>
        </div>

        <div className="product-preview">
          <h4>Preview state:</h4>
          <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}

export default Exercise3;
