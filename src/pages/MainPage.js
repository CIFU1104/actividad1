import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";
import Cart from "../components/Cart";
import EmptyState from "../components/EmptyState";
import '../styles/index.css';


const booksMock = [
  { id: 1, title: "React para principiantes", author: "John Doe", price: 10 },
  { id: 2, title: "JavaScript avanzado", author: "Jane Smith", price: 15 },
  { id: 3, title: "CSS creativo", author: "Alice Brown", price: 20 },
  { id: 4, title: "Python para principiantes", author: "Juan Cifuentes", price: 25 },
  { id: 5, title: "Java para principiantes", author: "Diego Buitrago", price: 30 }
];

const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = booksMock.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="main-page">
      <header>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </header>
      <div className="book-list">
        {filteredBooks.length ? (
          filteredBooks.map((book) => <BookCard key={book.id} book={book} />)
        ) : (
          <EmptyState message="No se encontraron libros." />
        )}
      </div>
      <Cart />
    </div>
  );
};

export default MainPage;
