import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">

        {/* Logo */}
        <div className="logo">
          <Link to="/">Pizza House</Link>
        </div>

        {/* Menu */}
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/book">Book Table</Link></li>
          </ul>
        </nav>

        {/* Search */}
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <button type="button">🔍</button>
        </div>

      </div>
    </header>
  );
}

export default Header;
