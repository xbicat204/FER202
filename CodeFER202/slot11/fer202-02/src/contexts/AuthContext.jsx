import { createContext, useReducer, useContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

const initialState = {
  user: null,
  loading: false,
  error: null,
  isAuthenticated: false
};

function authReducer(state, action) {
  switch (action.type) {

    case "LOGIN_START":
      return { ...state, loading: true, error: null };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null,
        isAuthenticated: true
      };

    case "LOGIN_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
        isAuthenticated: false
      };

    case "LOGOUT":
      return initialState;

    case "CLEAR_ERROR":
      return { ...state, error: null };

    case "RESTORE_USER":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true
      };

    default:
      return state;
  }
}

export function AuthProvider({ children }) {

  const [state, dispatch] = useReducer(authReducer, initialState);

  // restore user khi reload
  useEffect(() => {

    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      dispatch({
        type: "RESTORE_USER",
        payload: JSON.parse(savedUser)
      });
    }

  }, []);

  const login = async (usernameOrEmail, password) => {

    dispatch({ type: "LOGIN_START" });

    // validate
    if (!usernameOrEmail.trim()) {
      dispatch({
        type: "LOGIN_FAILURE",
        payload: "Username or Email is required"
      });
      return { ok: false };
    }

    if (!password.trim()) {
      dispatch({
        type: "LOGIN_FAILURE",
        payload: "Password is required"
      });
      return { ok: false };
    }

    try {

      const res = await axios.get("http://localhost:3001/accounts");

      const account = res.data.find(
        acc =>
          (acc.username === usernameOrEmail ||
           acc.email === usernameOrEmail) &&
          acc.password === password
      );

      // sai account
      if (!account) {
        dispatch({
          type: "LOGIN_FAILURE",
          payload: "Invalid username/email or password"
        });
        return { ok: false };
      }

      // account locked
      if (account.status === "locked") {
        dispatch({
          type: "LOGIN_FAILURE",
          payload: "Your account has been locked"
        });
        return { ok: false };
      }

      // login success
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: account
      });

      localStorage.setItem("user", JSON.stringify(account));

      return { ok: true, user: account };

    } catch (error) {

      dispatch({
        type: "LOGIN_FAILURE",
        payload: "Server error"
      });

      return { ok: false };
    }
  };

  const logout = () => {

    localStorage.removeItem("user");

    dispatch({ type: "LOGOUT" });

  };

  const clearError = () => dispatch({ type: "CLEAR_ERROR" });

  return (

    <AuthContext.Provider
      value={{
        ...state,
        login,
        logout,
        clearError
      }}
    >
      {children}
    </AuthContext.Provider>

  );
}

export const useAuth = () => useContext(AuthContext);