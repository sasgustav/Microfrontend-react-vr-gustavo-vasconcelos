import React, { useEffect, useRef } from 'react';
import './Modal.css';

const Modal = ({ items, onClose }) => {
    const modalRef = useRef();

    const handleClose = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClose();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClose);
        return () => {
            document.removeEventListener('mousedown', handleClose);
        };
    }, []);

    return (
        <div className="modal-backdrop">
            <div className="modal-content" ref={modalRef}>
                <div className="modal-header">
                    <h2 className="modal-title">Compras</h2>
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
                    <button className="modal-action-cancel" onClick={onClose}>Cancelar</button>
                    <button className="modal-action" onClick={() => {}}>Concluir compras</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
