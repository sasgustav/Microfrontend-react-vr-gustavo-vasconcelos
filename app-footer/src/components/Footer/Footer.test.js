import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Componente Footer', () => {
    it('deve renderizar o logo', () => {
        render(<Footer />);
        const logoImage = screen.getByRole('img', { name: /vr benefícios/i });
        expect(logoImage).toBeInTheDocument();
    });

    it('deve exibir o texto correto no rodapé', () => {
        render(<Footer />);
        const footerText = screen.getByText(/© 2024 vr benefícios - todos os direitos reservados/i);
        expect(footerText).toBeInTheDocument();
    });
});
