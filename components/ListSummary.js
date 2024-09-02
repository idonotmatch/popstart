import React from 'react';
import { useList } from '../context/ListContext';
import Link from 'next/link';

const ListSummary = () => {
  const { list } = useList();

  const parsePrice = (price) => {
    if (typeof price === 'number') {
      return price;
    }
    if (typeof price === 'string') {
      return parseFloat(price.replace(/[^0-9.-]+/g, ''));
    }
    return 0; // Default to 0 if price is undefined or in an unexpected format
  };

  const totalItems = list.items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = list.items.reduce((sum, item) => sum + parsePrice(item.price) * item.quantity, 0);

  return (
    <div className="list-summary">
      <Link href="/list" className="list-summary-link">
        <div className="list-summary-content">
          <span className="list-summary-items">{totalItems} item{totalItems !== 1 ? 's' : ''}</span>
          <span className="list-summary-price">${totalPrice.toFixed(2)}</span>
        </div>
      </Link>
    </div>
  );
};

export default ListSummary;