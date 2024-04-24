import { render, screen, fireEvent } from '@testing-library/react';
import BackToTop from './BackToTop';

describe('Componente BackToTop', () => {
    test('não deve ser visível quando a rolagem for inferior a 300px', () => {
        render(<BackToTop />);
        const button = screen.queryByText('↑ Topo');
        expect(button).toBeNull();
    });

    test('deve ser visível e rolar para o topo quando clicado', () => {
        window.scrollTo = jest.fn();
        window.pageYOffset = 500;

        render(<BackToTop />);
        const button = screen.getByText('↑ Topo');
        expect(button).toBeInTheDocument();

        fireEvent.click(button);
        expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
    });
});
