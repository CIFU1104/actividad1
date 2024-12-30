import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import '../styles/index.css';

const booksMock = [
  { id: 1, title: 'React para principiantes', author: 'John Doe', description: 'Un libro para aprender React desde cero.', price: 10},
  { id: 2, title: 'JavaScript avanzado', author: 'Jane Smith', description: 'Domina JavaScript con este libro avanzado.', price: 15},
  { id: 3, title: 'CSS creativo', author: 'Alice Brown', description: 'Aprende a diseñar con CSS de manera creativa.', price: 20 },
  { id: 4, title: 'Python para principiantes', author: 'Juan Cifuentes', description: 'Aprende a los fundamentos basicos de Pyhton.' , price: 25},
  { id: 5, title: 'Java para principiantes', author: 'Diego Buitrago', description: 'Da tus primeros pasos en el desarrollo con Java.' , price: 30}
];

const BookDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const book = booksMock.find(b => b.id === parseInt(id));

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
