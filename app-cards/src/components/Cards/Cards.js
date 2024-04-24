import React, { useState, useEffect } from 'react';
import { fetchProducts } from './services/productService';
import Modal from '../Modal/Modal';
import Spinner from '../Spinner/Spinner';
import NotFoundProducts from '../NotFoundProducts/NotFoundProducts';
import { toast, ToastContainer } from 'react-toastify';
import './Cards.css';
import 'react-toastify/dist/ReactToastify.css';

const Cards = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        setError(error.message);
        toast.error("Houve um problema ao carregar os produtos.");
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  useEffect(() => {
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
      <ToastContainer />
      {isLoading ? (
        <Spinner />
      ) : error || products.length === 0 ? (
        <NotFoundProducts />
      ) : (
        <div className="cards-container">
          {products.map((product) => (
            <div key={product.id} className="card">
              <img src={product.thumbnail} alt={product.title} className="card-image" />
              <div className="card-content">
                <h3 className="card-title">{product.title}</h3>
                <p className="card-description">{product.description}</p>
                <div className="card-bottom">
                  <span className="card-price">{`R$ ${product.price.toFixed(2)}`}</span>
                  <button className="card-button" onClick={() => handleBuy(product)}>COMPRAR</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {isModalOpen && <Modal onClose={handleCloseModal} items={cartItems} />}
    </>
  );
};

export default Cards;
