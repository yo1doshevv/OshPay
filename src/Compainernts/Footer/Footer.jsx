import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Biz haqimizda</h3>
          <p>Bizning restoranimiz mazali milliy taomlar bilan sizni xushnud qiladi!</p>
        </div>
        <div className="footer-section">
          <h3>Foydali havolalar</h3>
          <ul>
            <li><a href="#home">Bosh sahifa</a></li>
            <li><a href="#menu">Menyu</a></li>
            <li><a href="#contact">Bog'lanish</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Biz bilan bog'laning</h3>
          <p>Telefon: +998 90 123 45 67</p>
          <p>Email: info@oshmarkazi.uz</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Payosh. Barcha huquqlar himoyalangan.</p>
      </div>
    </footer>
  );
};

export default Footer;
