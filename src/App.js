import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MainPage from './pages/MainPage';
import BookPage from './pages/BookPage';
import CheckoutPage from './pages/CheckoutPage';
import Header from './components/Header';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/book/:id" element={<BookPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="*" element={<Navigate replace to="/"></Navigate>} />
      </Routes>
    </Router>
  );
};

export default App;