import React from "react";

const Footer = () => {
  return (
    <footer className="miFooter">
      <p>Powered by Sarquis Agustin</p>
      <img className="miFooterDH" src="./images/DH.png" alt="DH-logo" />
      <div>
        <img
          className="miFooterIcons"
          src="./images/ico-facebook.png"
          alt="Facebook logo"
        />
        <img
          className="miFooterIcons"
          src="./images/ico-instagram.png"
          alt="Instagram logo"
        />
        <img
          className="miFooterIcons"
          src="./images/ico-whatsapp.png"
          alt="Whatsapp logo"
        />
      </div>
    </footer>
  );
};

export default Footer;