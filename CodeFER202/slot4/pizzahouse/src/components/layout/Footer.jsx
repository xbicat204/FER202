import React from "react";
import "./Footer.css";

function Footer({ myprofile }) {
  return (
    <footer className="footer">
      <div className="footer-profile">

        <img
          src={myprofile.avatar}
          alt="Profile"
          className="footer-avatar"
        />

        <h3 className="footer-name">{myprofile.name}</h3>
        <p className="footer-role">{myprofile.role}</p>

        <p className="footer-info">{myprofile.email}</p>
        <p className="footer-info">📞 {myprofile.phone}</p>

      </div>
    </footer>
  );
}

export default Footer;