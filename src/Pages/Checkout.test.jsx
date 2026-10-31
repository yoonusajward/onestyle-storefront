import React, { useContext } from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import ShopContextProvider, { ShopContext } from '../Context/ShopContext';
import Checkout from './Checkout';

// CRA's older Jest resolver cannot resolve React Router 7 exports.
// Only Link is needed here; keep these form/cart tests independent of routing.
jest.mock('react-router-dom', () => ({
  Link: ({ to, children, ...props }) => <a href={to} {...props}>{children}</a>,
}), { virtual: true });

function DemoBag() {
  const { addToCart, getTotalCartItems } = useContext(ShopContext);
  return <><button onClick={() => { addToCart(1); addToCart(1); addToCart(13); }}>Add sample bag</button><output aria-label="Bag count">{getTotalCartItems()}</output><Checkout /></>;
}

function setup(withItems = true) {
  window.scrollTo = jest.fn();
  render(<ShopContextProvider><DemoBag /></ShopContextProvider>);
  if (withItems) fireEvent.click(screen.getByRole('button', { name: 'Add sample bag' }));
}

test('empty checkout points back to the collection', () => {
  setup(false);
  expect(screen.getByRole('heading', { name: /start with your bag/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /explore the collection/i })).toHaveAttribute('href', '/womens');
  expect(screen.queryByRole('button', { name: /place sample order/i })).not.toBeInTheDocument();
});

test('missing required delivery details cannot complete checkout', () => {
  setup();
  fireEvent.submit(screen.getByRole('button', { name: /place sample order/i }).closest('form'));
  expect(screen.queryByRole('heading', { name: /sample order is complete/i })).not.toBeInTheDocument();
  expect(screen.getByRole('status', { name: 'Bag count' })).toHaveTextContent('3');
});

test.each(['Demo card', 'Cash on delivery'])('%s confirms the sample order with matching totals and clears the bag', method => {
  setup();
  expect(screen.getByRole('button', { name: /place sample order/i })).toHaveTextContent('LKR 14,970.00');
  fireEvent.click(screen.getByRole('button', { name: /use sample details/i }));
  expect(screen.getByLabelText('Email address')).toHaveValue('alex@example.com');
  const form = screen.getByRole('button', { name: /place sample order/i }).closest('form');
  expect(form.checkValidity()).toBe(true);
  fireEvent.click(screen.getByRole('radio', { name: new RegExp(method, 'i') }));
  fireEvent.click(screen.getByRole('button', { name: /place sample order/i }));
  expect(screen.getByRole('heading', { name: /sample order is complete/i })).toHaveFocus();
  expect(screen.getByRole('status', { name: 'Bag count' })).toHaveTextContent('0');
  const summary = screen.getByRole('complementary', { name: 'Order summary' });
  expect(within(summary).getAllByText('LKR 14,970.00')).toHaveLength(2);
  expect(within(summary).getByText(/Qty 2/)).toBeInTheDocument();
  expect(screen.getByText(/no order will be shipped/i)).toBeInTheDocument();
  expect(screen.getByText(/OS-DEMO-/)).toBeInTheDocument();
});
