import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import LoginForm from "./components/LoginForm";
import AccountList from "./pages/AccountList";
import AccountDetail from "./pages/AccountDetail";
import SignUp from "./pages/SignUp";
import "bootstrap/dist/css/bootstrap.min.css";
import ExpensesList from "./pages/ExpensesList";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Navigate to="/login" />} />

          <Route path="/login" element={<LoginForm />} />

          <Route path="/signup" element={<SignUp />} />

          {/* Home */}
          <Route path="/home" element={<AccountList />} />

          {/* Account pages */}
          <Route path="/accounts" element={<AccountList />} />
          <Route path="/accounts/:id" element={<AccountDetail />} />
          <Route path="/expenses" element={<ExpensesList />} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;