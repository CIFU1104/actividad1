import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";
import Cart from "../components/Cart";
import EmptyState from "../components/EmptyState";
import "../styles/index.css";

const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:8080/books");
        if (!response.ok) {
          throw new Error("Error al obtener los libros");
        }
        const data = await response.json();
        setBooks(data);
      } catch (err) {
        console.error("Error al cargar los libros:", err);
        setError("No se pudieron cargar los libros.");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="main-page">
      <header>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </header>
      <div className="book-list">
        {loading ? (
          <p>Cargando libros...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : filteredBooks.length > 0 ? (
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
