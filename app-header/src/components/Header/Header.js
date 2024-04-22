import React, { useState } from 'react';
import './Header.css';
import logo from '../../../assets/logo.svg';
import { FiShoppingBag } from 'react-icons/fi';

const Modal = React.lazy(() => import('appCards/Modal'));

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <h1 className='gustavo-vasconcelos'>Gustavo Vasconcelos</h1>
      <div className="cart-icon-container">
        <div className="cart-icon-background">
          <FiShoppingBag className="cart-icon" />
        </div>
      </div>
      {isModalOpen && <Modal onClose={toggleModal} />}
    </header>
  );
};

export default Header;
