import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";
import '../styles/index.css';

const BookPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [booksMock, setBooksMock] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/books")
      .then(response => response.json())
      .then(data => setBooksMock(data))
      .catch(error => console.error("Error al cargar los libros:", error));
  }, []);

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
