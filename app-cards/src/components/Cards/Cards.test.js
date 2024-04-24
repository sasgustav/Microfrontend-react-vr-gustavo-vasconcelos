import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import Cards from './Cards';
import { fetchProducts } from './services/productService';
import Modal from '../Modal/Modal';

jest.mock('./services/productService', () => ({
  fetchProducts: jest.fn()
}));
jest.mock('../Modal/Modal', () => jest.fn(() => null));

describe('Componente Cards', () => {
    const mockProducts = [
        { id: 1, title: 'Produto 1', description: 'Descrição do Produto 1', price: 100, thumbnail: '/path/to/image1.jpg' },
        { id: 2, title: 'Produto 2', description: 'Descrição do Produto 2', price: 200, thumbnail: '/path/to/image2.jpg' }
    ];

    beforeEach(() => {
        fetchProducts.mockClear();
        fetchProducts.mockResolvedValue(mockProducts);
        localStorage.setItem('cartItems', JSON.stringify([]));
    });

    it('deve carregar e exibir produtos', async () => {
        render(<Cards />);
        await waitFor(() => {
            expect(fetchProducts).toHaveBeenCalled();
            mockProducts.forEach((prod) => {
                expect(screen.getByText(prod.title)).toBeInTheDocument();
                expect(screen.getByText(prod.description)).toBeInTheDocument();
                expect(screen.getByText(`R$ ${prod.price}`)).toBeInTheDocument();
            });
        });
    });

    it('deve adicionar produto ao carrinho e abrir o modal ao clicar em comprar', async () => {
        render(<Cards />);
        await waitFor(() => {
            const buyButtons = screen.getAllByText('COMPRAR');
            fireEvent.click(buyButtons[0]);
        });

        await waitFor(() => {
            expect(localStorage.getItem('cartItems')).toContain(JSON.stringify(mockProducts[0]));
            expect(Modal).toHaveBeenCalledWith(expect.objectContaining({
                isOpen: true,
                items: expect.arrayContaining([mockProducts[0]]),
            }), expect.anything());
        });
    });

    it('deve fechar o modal ao chamar handleCloseModal', async () => {
        render(<Cards />);
        await waitFor(() => {
            const buyButtons = screen.getAllByText('COMPRAR');
            fireEvent.click(buyButtons[0]);
        });

        await waitFor(() => {
            fireEvent.click(screen.getByText('X'));
            expect(Modal).toHaveBeenCalledWith(expect.objectContaining({
                isOpen: false,
            }), expect.anything());
        });
    });
});
