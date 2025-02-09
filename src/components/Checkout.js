import React from 'react';
import useCart from '../hooks/useCart';
import '../styles/index.css';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart, checkout } = useCart();
  const navigate = useNavigate();

  const handleCheckout = async () => {
    if (cart.length === 0) {
      alert("El carrito está vacío.");
      return;
    }
    
    await checkout();
    navigate('/main');
  };

  return (
    <div className="checkout">
      <h2>Resumen de compra</h2>
      {cart.length === 0 ? (
        <p>No hay artículos en el carrito.</p>
      ) : (
        cart.map(item => (
          <div key={item.id} className="checkout-item">
            <p>{item.title}</p>
          </div>
        ))
      )}
      <button onClick={handleCheckout} disabled={cart.length === 0}>
        Realizar pedido
      </button>
    </div>
  );
};

export default Checkout;
