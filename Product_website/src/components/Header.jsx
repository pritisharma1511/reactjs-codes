import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">ShopEase</h1>
      <input type="text" className="search" placeholder="Search for products..." />
    </header>
  );
};

export default Header;
