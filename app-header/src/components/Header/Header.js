import React, { useState } from 'react';
import './Header.css';
import logo from '../../../assets/logo.svg';
import { FiShoppingBag } from 'react-icons/fi';
import { FiMenu } from 'react-icons/fi';

const Modal = React.lazy(() => import('appCards/Modal'));

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <div className="menu-icon-container" onClick={toggleMenu}>
          <FiMenu className="menu-icon" />
        </div>
      </div>
      <h1 className='gustavo-vasconcelos'>Gustavo Vasconcelos</h1>
      <div className="cart-icon-container" onClick={toggleModal}>
        <div className="cart-icon-background">
          <FiShoppingBag className="cart-icon" />
        </div>
      </div>
      {isModalOpen && <Modal onClose={toggleModal} />}
      {isMenuOpen && (
        <nav className="header-menu">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
