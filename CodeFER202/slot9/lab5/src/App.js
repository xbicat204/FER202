import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import News from "./pages/News";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Quiz from "./pages/Quiz";
import DangKy from "./components/DangKy";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/register" element={<DangKy />} />
      </Routes>
    </>
  );
}

export default App;