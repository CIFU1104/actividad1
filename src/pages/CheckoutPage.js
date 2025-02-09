import React from "react";
import useCart from "../hooks/useCart";
import OrderSummary from "../components/OrderSummary";
import EmptyState from "../components/EmptyState";
import { useNavigate } from "react-router-dom";
import '../styles/index.css';

const CheckoutPage = () => {
  const { cart, checkout } = useCart();
  const navigate = useNavigate();

  const handleCheckout = async () => {
    await checkout();
    navigate("/main");
  };

  return (
    <div className="checkout-page">
      <h2>Resumen de tu compra</h2>
      {cart.length === 0 ? (
        <EmptyState message="No hay artículos en el carrito." />
      ) : (
        <>
          <OrderSummary cart={cart} />
          <button onClick={handleCheckout}>Confirmar y pagar</button>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;
