import React from 'react';
import './NotFoundProducts.css';
import { FaBoxOpen } from 'react-icons/fa';

const NotFoundProducts = () => {
    return (
        <div className="not-found-container">
            <FaBoxOpen size={50} color="#666" />
            <h2>Produtos Não Encontrados</h2>
            <p>Não foi possível carregar os produtos. Por favor, tente novamente mais tarde.</p>
        </div>
    );
};

export default NotFoundProducts;
