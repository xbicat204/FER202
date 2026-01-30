import { useReducer } from "react";

const initialState = {
  isShowModal: false,
  isConfirmed: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "OPEN_MODAL":
      return { ...state, isShowModal: true };

    case "CLOSE_MODAL":
      return { ...state, isShowModal: false };

    case "CONFIRM_ORDER":
      return { isShowModal: false, isConfirmed: true };

    default:
      return state;
  }
}

function Exercise2() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="exercise-card">
      <h2>Exercise 2: Order Confirmation</h2>

      <button onClick={() => dispatch({ type: "OPEN_MODAL" })}>
        Place Order
      </button>

      {state.isConfirmed && (
        <p className="success-text">✅ Order confirmed successfully!</p>
      )}

      {state.isShowModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h4>Confirm your order?</h4>

            <button
              className="btn-confirm"
              onClick={() => dispatch({ type: "CONFIRM_ORDER" })}
            >
              Confirm
            </button>

            <button
              className="btn-cancel"
              onClick={() => dispatch({ type: "CLOSE_MODAL" })}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Exercise2;
