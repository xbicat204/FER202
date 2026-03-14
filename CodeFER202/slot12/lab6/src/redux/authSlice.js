import { createSlice } from "@reduxjs/toolkit";

// lấy user từ localStorage nếu có
const savedUser = localStorage.getItem("user");

const initialState = {
  user: savedUser ? JSON.parse(savedUser) : null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

    loginSuccess: (state, action) => {

      state.user = action.payload;

      // lưu vào localStorage
      localStorage.setItem(
        "user",
        JSON.stringify(action.payload)
      );
    },

    logout: (state) => {

      state.user = null;

      localStorage.removeItem("user");
    }

  }
});

export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;