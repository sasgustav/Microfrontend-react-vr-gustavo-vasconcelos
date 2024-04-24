import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Header from './Header';

const SuspenseWrapper = ({ children }) => (
  <React.Suspense fallback={<div>Carregando...</div>}>{children}</React.Suspense>
);

jest.mock('appCards/Modal', () => () => <div>Modal Content</div>);

describe('Header Component', () => {
  afterEach(cleanup);

  it('deve mostrar o logo e o título', () => {
    const { getByAltText, getByText } = render(
      <SuspenseWrapper>
        <Header />
      </SuspenseWrapper>
    );
    expect(getByAltText('Logo')).toBeInTheDocument();
    expect(getByText('Gustavo Vasconcelos')).toBeInTheDocument();
  });

  it('deve abrir o modal ao clicar no ícone do carrinho', () => {
    const { getByText, getByClassName } = render(
      <SuspenseWrapper>
        <Header />
      </SuspenseWrapper>
    );
    fireEvent.click(getByClassName('cart-icon'));
    expect(getByText('Modal Content')).toBeInTheDocument();
  });

  it('deve fechar o modal quando solicitado', () => {
    const { getByText, queryByText, getByClassName } = render(
      <SuspenseWrapper>
        <Header />
      </SuspenseWrapper>
    );
    fireEvent.click(getByClassName('cart-icon'));
    fireEvent.click(getByText('Modal Content'));
    expect(queryByText('Modal Content')).not.toBeInTheDocument();
  });
});
