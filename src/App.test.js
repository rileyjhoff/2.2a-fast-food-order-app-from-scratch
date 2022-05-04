import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Order for text', () => {
  render(<App />);
  const textElement = screen.getByText(/Who is this/i);
  expect(textElement).toBeInTheDocument();
});
