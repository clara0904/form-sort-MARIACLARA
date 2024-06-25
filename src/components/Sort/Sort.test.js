import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Sort from './Sort';

describe('Sort Component', () => {
  const items = [
    { name: 'Produto A', value: 100 },
    { name: 'Produto B', value: 50 },
    { name: 'Produto C', value: 75 }
  ];

  test('renders sorted items correctly', () => {
    render(<Sort items={items} />);

    const productNameA = screen.getByText('Produto A');
    const productNameB = screen.getByText('Produto B');
    const productNameC = screen.getByText('Produto C');

    expect(productNameA).toBeInTheDocument();
    expect(productNameB).toBeInTheDocument();
    expect(productNameC).toBeInTheDocument();

    const productValues = screen.getAllByRole('cell', { name: /(\d+)/ });
    const sortedValues = items.map(item => item.value).sort((a, b) => a - b);

    productValues.forEach((valueElement, index) => {
      expect(parseInt(valueElement.textContent)).toBe(sortedValues[index]);
    });
  });

  test('calls onBack function when button is clicked', () => {
    const mockOnBack = jest.fn();
    render(<Sort items={items} onBack={mockOnBack} />);

    const addButton = screen.getByRole('button', { name: 'Adicionar novo produto' });
    fireEvent.click(addButton);

    expect(mockOnBack).toHaveBeenCalledTimes(1);
  });
});

