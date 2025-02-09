import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import '../styles/index.css';

const BookDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/books/${id}`)
      .then(response => response.json())
      .then(data => setBook(data))
      .catch(error => console.error("Error al cargar el libro:", error));
  }, [id]);

  if (!book) return <p>Libro no encontrado</p>;

  return (
    <div className="book-detail">
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <p>{book.description}</p>
      <p>{book.price}</p>
      <button onClick={() => addToCart(book)}>Añadir al carrito</button>
    </div>
  );
};

export default BookDetail;