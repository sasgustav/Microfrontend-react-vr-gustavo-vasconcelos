import React, { useState, useTransition } from 'react';
import './Header.css';
import logo from '../../../assets/logo.svg';
import { FiShoppingBag, FiMenu, FiHome, FiLayout, FiBox, FiCreditCard } from 'react-icons/fi';
import { Suspense } from 'react';

const Modal = React.lazy(() => import('appCards/Modal'));

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const toggleModal = () => {
    startTransition(() => {
      setIsModalOpen(!isModalOpen);
    });
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
      <h1 className='gustavo-vasconcelos'>Gustavo Vasconcelos :.</h1>
      <div className="cart-icon-container" onClick={toggleModal}>
        <div className="cart-icon-background">
          <FiShoppingBag className="cart-icon" />
        </div>
      </div>
      {isModalOpen && (
        <Suspense fallback={<div>Carregando...</div>}>
          <Modal onClose={toggleModal} />
        </Suspense>
      )}
      {isMenuOpen && (
        <nav className="header-menu">
          <ul>
            <li><a href="http://localhost:3000/" target="_blank" rel="noopener noreferrer"><FiHome />APP Central</a></li>
            <li><a href="http://localhost:3001/" target="_blank" rel="noopener noreferrer"><FiLayout />APP Header</a></li>
            <li><a href="http://localhost:3002/" target="_blank" rel="noopener noreferrer"><FiBox />APP Footer</a></li>
            <li><a href="http://localhost:3003/" target="_blank" rel="noopener noreferrer"><FiCreditCard />APP Cards</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
