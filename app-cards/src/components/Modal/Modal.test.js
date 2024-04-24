import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Modal from './Modal';

const mockClose = jest.fn();
const mockReload = jest.fn();

beforeEach(() => {
  jest.spyOn(window, 'alert').mockImplementation(() => {});
  jest.spyOn(window.location, 'reload').mockImplementation(mockReload);
  localStorage.clear();
  mockClose.mockClear();
});

afterEach(cleanup);

describe('Modal Component', () => {
  it('deve carregar e exibir itens do localStorage', () => {
    const items = [{ title: 'Item 1', price: 100, thumbnail: 'url1' }];
    localStorage.setItem('cartItems', JSON.stringify(items));
    const { getByText } = render(<Modal onClose={mockClose} />);
    expect(getByText('Item 1')).toBeInTheDocument();
  });

  it('deve fechar o modal ao clicar fora do conteúdo', () => {
    const { getByText, container } = render(<Modal onClose={mockClose} />);
    const modalContent = container.querySelector('.modal-content');
    fireEvent.mouseDown(container.firstChild);
    expect(modalContent).not.toContainElement(modalContent);
    expect(mockClose).toHaveBeenCalled();
  });

  it('deve limpar o carrinho e fechar o modal ao clicar em "Concluir compras"', () => {
    const items = [{ title: 'Item 1', price: 100, thumbnail: 'url1' }];
    localStorage.setItem('cartItems', JSON.stringify(items));
    const { getByText } = render(<Modal onClose={mockClose} />);
    fireEvent.click(getByText('Concluir compras'));
    expect(localStorage.getItem('cartItems')).toBeNull();
    expect(window.alert).toHaveBeenCalledWith('O carrinho foi limpo. Sua compra foi concluída!');
    expect(mockClose).toHaveBeenCalled();
    expect(mockReload).toHaveBeenCalled();
  });

  it('deve fechar o modal ao clicar no botão "Cancelar"', () => {
    const { getByText } = render(<Modal onClose={mockClose} />);
    fireEvent.click(getByText('CANCELAR'));
    expect(mockClose).toHaveBeenCalled();
  });
});
