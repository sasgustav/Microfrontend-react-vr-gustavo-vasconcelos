import React from 'react';
import './Footer.css';
import logo from '../../../assets/logo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img src={logo} alt="VR Benefícios" className="footer-logo" />
        <p className="footer-text">© 2024 VR Benefícios - Todos os direitos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
