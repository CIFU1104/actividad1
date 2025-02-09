import { useState, useEffect } from "react";
import '../styles/index.css';

const useCart = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = (book) => {
    setCart((prevCart) => [...prevCart, book]);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const checkout = async () => {
    try {
      for (const item of cart) {
        const response = await fetch("http://localhost:8080/books/insert", { // URL relativa
          mode:'no-cors',
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ "bookTitle" : item.title}),
        });
  
        if (!response.ok) {
          alert(`Error al comprar el libro: ${item.title}`);
          return;
        }
      }
  
      alert("Pedido realizado con éxito");
      clearCart();
    } catch (error) {
      console.error("Error en checkout:", error);
    }
  };

  return { cart, addToCart, removeFromCart, clearCart, checkout };
};

export default useCart;