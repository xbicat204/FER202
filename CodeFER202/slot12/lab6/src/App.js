import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import LoginForm from "./components/LoginForm";
import ExpenseDashboard from "./pages/ExpenseDashboard";

import "bootstrap/dist/css/bootstrap.min.css";

function PrivateRoute({ children }) {

  const user = useSelector((state) => state.auth.user);

  return user ? children : <Navigate to="/login" />;
}

function App() {

  return (
    <BrowserRouter>

      <Routes>

        {/* default */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* login */}
        <Route path="/login" element={<LoginForm />} />

        {/* dashboard protected */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <ExpenseDashboard />
            </PrivateRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;