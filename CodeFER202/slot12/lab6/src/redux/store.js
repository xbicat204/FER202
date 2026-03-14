import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import expenseReducer from "./expenseSlice";

const savedUser = localStorage.getItem("user");

const preloadedState = {
  auth: {
    user: savedUser ? JSON.parse(savedUser) : null
  }
};

const store = configureStore({
  reducer: {
    auth: authReducer,
    expenses: expenseReducer
  },
  preloadedState
});

export default store;