import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Librería</h1>
      <nav>
        <Link to="/main">Inicio</Link>
        <div></div>
        <div></div>
        <Link to="/checkout">Checkout</Link>
      </nav>
    </header>
  );
};

export default Header;