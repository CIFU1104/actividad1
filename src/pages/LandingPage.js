import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/index.css';

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate('/main'), 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="landing-page">
      <h1>Bienvenido a nuestra Librería</h1>
      <p>Serás redirigido a la página principal en 5 segundos...</p>
    </div>
  );
};

export default LandingPage;