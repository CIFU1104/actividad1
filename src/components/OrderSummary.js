// src/components/OrderSummary.js
import React from "react";

const OrderSummary = ({ cart }) => {
  const total = cart.reduce((sum, book) => sum + (book.price || 0), 0);

  return (
    <div className="order-summary">
      <h3>Resumen del Pedido</h3>
      <ul>
        {cart.map((book, index) => (
          <li key={`${book.id}-${index}`}>
            {book.title} - ${book.price}
          </li>
        ))}
      </ul>
      <p>Total: ${total.toFixed(2)}</p>
    </div>
  );
};

export default OrderSummary;
