// Form.test.js

import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Form from './Form';

describe('Form Component', () => {
  test('allows user to fill out form and submit', async () => {
    render(<Form />);

    userEvent.type(screen.getByPlaceholderText('Digite o nome do produto'), 'Produto Teste');
    userEvent.type(screen.getByPlaceholderText('Digite a descrição do produto'), 'Descrição do Produto Teste');
    userEvent.type(screen.getByPlaceholderText('Digite o valor do produto'), '50');
    
    userEvent.click(screen.getByLabelText('Sim'));

    await act(async () => {
      userEvent.click(screen.getByRole('button', { name: 'Enviar' }));
    });

    
  });
});
