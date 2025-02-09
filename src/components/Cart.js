import React from "react";
import useCart from "../hooks/useCart";
import "../styles/index.css";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="cart">
      <h2>Carrito</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        cart.map((item, index) => (
          <div key={`${item.id}-${index}`} className="cart-item">
            <p>{item.title}</p>
            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
