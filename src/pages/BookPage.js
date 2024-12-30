// src/pages/BookPage.js
import React from "react";
import { useParams } from "react-router-dom";
import useCart from "../hooks/useCart";
import { useNavigate } from "react-router-dom";
import '../styles/index.css';


const booksMock = [
  { id: 1, title: "React para principiantes", author: "John Doe", description: "Un libro introductorio sobre React." , price: 10},
  { id: 2, title: "JavaScript avanzado", author: "Jane Smith", description: "Profundiza en conceptos avanzados de JavaScript." , price: 15},
  { id: 3, title: "CSS creativo", author: "Alice Brown", description: "Diseña interfaces atractivas con CSS." , price: 20},
  { id: 4, title: 'Python para principiantes', author: 'Juan Cifuentes', description: 'Aprende a los fundamentos basicos de Pyhton.', price: 25 },
  { id: 5, title: 'Java para principiantes', author: 'Diego Buitrago', description: 'Da tus primeros pasos en el desarrollo con Java.' , price: 30}
];

const BookPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleaddToCart = (book) => {
    alert("¡El libro fue agregado al Carrito!");
    addToCart(book);
    navigate("/main");
  };

  const book = booksMock.find((book) => book.id === parseInt(id));

  if (!book) return <p>Libro no encontrado.</p>;

  return (
    <div className="book-page">
      <div className="book-page-container">
        <h2>{book.title}</h2>
        <p>Autor: {book.author}</p>
        <p>{book.description}</p>
        <button onClick={() => handleaddToCart(book)}>Añadir al carrito</button>
      </div>
    </div>
  );
};

export default BookPage;
