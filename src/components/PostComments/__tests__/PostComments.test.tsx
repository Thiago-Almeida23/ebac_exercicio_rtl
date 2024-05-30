import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PostComments from '../index';

test('deve permitir a inserção de dois comentários', () => {
  render(<PostComments />);

  const inputComentario = screen.getByTestId('input-comentario');
  const botaoAdicionar = screen.getByTestId('adicionar-comentario');

  fireEvent.change(inputComentario, { target: { value: 'Primeiro comentário' } });
  fireEvent.click(botaoAdicionar);

  fireEvent.change(inputComentario, { target: { value: 'Segundo comentário' } });
  fireEvent.click(botaoAdicionar);

  const comentarios = screen.getAllByTestId('comentario');
  expect(comentarios.length).toBe(2);
  expect(comentarios[0].textContent).toBe('Primeiro comentário');
  expect(comentarios[1].textContent).toBe('Segundo comentário');
});
