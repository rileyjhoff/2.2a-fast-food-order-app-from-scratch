import { render, screen } from '@testing-library/react';
import OrderDisplay from './components/OrderDisplay';

test('renders Order for text', () => {
  render(<OrderDisplay />);
  const textElement = screen.getByText(/Order for/i);
  expect(textElement).toBeInTheDocument();
});
