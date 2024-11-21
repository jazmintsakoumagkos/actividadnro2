import { render, screen } from '@testing-library/react';
import App from './App';

test('renders product list header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Lista de Productos/i);
  expect(headerElement).toBeInTheDocument();
});