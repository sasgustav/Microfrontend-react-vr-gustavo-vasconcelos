import React from 'react';
import { render, screen } from '@testing-library/react';
import Spinner from './Spinner';

describe('Spinner Component', () => {
  test('should render without crashing', () => {
    render(<Spinner />);
    const spinnerElement = screen.getByTestId('spinner-container');
    expect(spinnerElement).toBeInTheDocument();
  });
});
