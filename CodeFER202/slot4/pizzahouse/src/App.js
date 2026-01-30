import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBarSearch from "./components/layout/NavBarSearch";
import Banner from "./components/layout/Banner";
import OurMenu from "./components/menu/OurMenu";
import BookTable from "./components/book/BookTable";
import Footer from "./components/layout/Footer";

import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <>
        {/* Navbar luôn hiển thị */}
        <NavBarSearch />

        {/* Nội dung theo route */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <HomePage />
              </>
            }
          />

          <Route path="/menu" element={<OurMenu />} />
          <Route path="/book" element={<BookTable />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        {/* Footer */}
        <Footer
          myprofile={{
            avatar: "/avatar.jpg",
            name: "Tong Phuc Khiem",
            role: "Frontend Developer",
            email: "khiemtong2004@gmail.com",
            phone: "0356693933",
          }}
        />
      </>
    </Router>
  );
}

export default App;
