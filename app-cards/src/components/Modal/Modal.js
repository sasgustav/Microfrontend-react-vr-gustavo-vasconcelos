import React, { useEffect, useState, useRef } from 'react';
import './Modal.css';

const Modal = ({ onClose }) => {
  const modalRef = useRef();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setItems(cartItems);

    const handleStorageChange = () => {
      const updatedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      setItems(updatedItems);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handlePurchase = () => {
    localStorage.removeItem('cartItems');
    alert('O carrinho foi limpo. Sua compra foi concluída!');
    onClose();
    window.location.reload();
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="modal-backdrop">
      <div className="modal-content" ref={modalRef}>
        <div className="modal-header">
          <h2 className="modal-title">Compras ({items.length})</h2>
          <button className="close-button" onClick={onClose}>X</button>
        </div>
        <ul className="modal-items">
          {items.map((item, index) => (
            <li key={index} className="modal-item">
              <img src={item.thumbnail} alt={item.title} />
              <div className="modal-item-info">
                <span className="item-name">{item.title}</span>
                <span className="item-price">{`R$ ${item.price.toFixed(2)}`}</span>
              </div>
            </li>
          ))}
        </ul>
        <div className="modal-actions">
          <button className="modal-action-cancel" onClick={onClose}>CANCELAR</button>
          <button className="modal-action" onClick={handlePurchase}>
            Concluir compras
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
