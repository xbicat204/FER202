import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Exercise1 from "./components/Exercise1";
import Exercise2 from "./components/Exercise2";
import Exercise3 from "./components/Exercise3";
import Exercise4 from "./components/Exercise4";
import "bootstrap/dist/css/bootstrap.min.css";
import TestUseState from "./components/TestUseState";
function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#0d1117",
          color: "white",
        }}
      >
        <NavBar />

        <div className="container py-4">
          <Routes>
            <Route path="/" element={<Navigate to="/ex1" replace />} />
            <Route path="/ex1" element={<Exercise1 />} />
            <Route path="/ex2" element={<Exercise2 />} />
            <Route path="/ex3" element={<Exercise3 />} />
            <Route path="/ex4" element={<Exercise4 />} />
            <Route path="/test" element={<TestUseState />} />
          </Routes> 
        </div>
      </div>
    </BrowserRouter>

  ); 
}

export default App;
