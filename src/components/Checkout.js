import React from 'react';
import { useCart } from '../hooks/useCart';
import '../styles/index.css';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    alert('Pedido realizado con éxito');
    clearCart();
    navigate('/main');
  };

  return (
    <div className="checkout">
      <h2>Resumen de compra</h2>
      {cartItems.map(item => (
        <div key={item.id} className="checkout-item">
          <p>{item.title}</p>
        </div>
      ))}
      <button onClick={handleCheckout}>Realizar pedido</button>
    </div>
  );
};

export default Checkout;