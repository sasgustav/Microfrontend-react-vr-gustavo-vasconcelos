import React from 'react';
import './Modal.css';

const Modal = ({ items, onClose }) => {
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">Compras</h2>
          <button className="close-button" onClick={onClose}>X</button>
        </div>
        <ul className="modal-items">
          {items.map((item, index) => (
            <li key={index} className="modal-item">
              <img src={item.thumbnail} alt={item.title} />
              <div className="modal-item-info">
                <div className="item-name">{item.title}</div>
                <div className="item-price">{`R$ ${item.price}`}</div>
              </div>
            </li>
          ))}
        </ul>
        <div className="modal-actions">
          <button className="modal-action" onClick={onClose}>Cancelar</button>
          <button className="modal-action" onClick={() => {}}>Concluir compras</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
