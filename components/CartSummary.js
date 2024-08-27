import React from 'react';
import { useCart } from '../context/CartContext';
import Link from 'next/link';

const CartSummary = () => {
  const { cart } = useCart();

  const totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.items.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')) * item.quantity, 0);

  return (
    <div className="cart-summary">
      <Link href="/cart" className="cart-summary-link">
        <span>{totalItems} item{totalItems !== 1 ? 's' : ''}</span>
        <span>${totalPrice.toFixed(2)}</span>
      </Link>
    </div>
  );
};

export default CartSummary;