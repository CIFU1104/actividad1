import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css';

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      {books.map(book => (
        <div key={book.id} className="book-item">
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <Link to={`/book/${book.id}`}>Ver detalles</Link>
        </div>
      ))}
    </div>
  );
};

export default BookList;