import React from "react";
import "./Footer.css";
import avatar from "../../assets/faker.jpeg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-profile">

        <img
          src={avatar}
          alt="Profile"
          className="footer-avatar"
        />

        <h3 className="footer-name">Tong Phuc Khiem</h3>
        <p className="footer-role">Frontend Developer</p>

        <p className="footer-info">khiemtong2004@gmail.com</p>
        <p className="footer-info">📞 0356693933</p>

      </div>
    </footer>
  );
}

export default Footer;
