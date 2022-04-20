import { render, screen } from '@testing-library/react';
import App from './App';

test('renders react component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Moster, Inc\./i);
  expect(linkElement).toBeInTheDocument();
});
