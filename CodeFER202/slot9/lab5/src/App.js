import { Routes, Route } from "react-router-dom";
import { useTheme } from "./contexts/ThemeContext";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import DangKy from "./components/DangKy";
import Users from "./components/User";
import Post from "./components/Post";
import CounterComponent from "./components/CounterComponent";
import LightSwitch from "./components/LightSwitch";

import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Quiz from "./pages/Quiz";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const { theme } = useTheme();

  const appStyle = {
    backgroundColor: theme === "light" ? "#ffffff" : "#1e1e1e",
    color: theme === "light" ? "#000000" : "#ffffff",
    minHeight: "100vh",
    transition: "all 0.3s ease"
  };

  return (
    <div style={appStyle}>
      <Navbar />

  
      <div style={{ padding: "10px" }}>
        <LightSwitch />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/users" element={<Users />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/register" element={<DangKy />} />
        <Route path="/counter" element={<CounterComponent />} />

        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </div>
  );
}

export default App;