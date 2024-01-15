// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/reviews">Reviews</Link>
      </nav>
      <h1>My Web</h1>
      <Link to="/cart">
        <i className="fas fa-shopping-cart"></i> Cart
      </Link>
    </header>
    
  );
};

export default Header;
