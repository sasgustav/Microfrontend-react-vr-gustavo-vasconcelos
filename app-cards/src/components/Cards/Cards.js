import React, { useState, useEffect } from 'react';
import { fetchProducts } from './services/productService';
import Modal from '../Modal/Modal';
import './Cards.css';

const Cards = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    };

    loadProducts();

    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const handleBuy = (product) => {
    const updatedCartItems = [...cartItems, product];
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="cards-container">
        {products.map((product) => (
          <div key={product.id} className="card">
            <img src={product.thumbnail} alt={product.title} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{product.title}</h3>
              <p className="card-description">{product.description}</p>
              <div className="card-bottom">
                <span className="card-price">{`R$ ${product.price}`}</span>
                <button className="card-button" onClick={() => handleBuy(product)}>COMPRAR</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} items={cartItems} />
      )}
    </>
  );
};

export default Cards;
