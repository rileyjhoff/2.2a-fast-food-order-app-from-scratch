import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Order for text', () => {
  render(<App />);
  const textElement = screen.getByText(/Order for/i);
  expect(textElement).toBeInTheDocument();
});
