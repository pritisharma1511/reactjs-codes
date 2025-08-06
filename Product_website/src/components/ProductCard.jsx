import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">{product.price}</p>
      <p className="rating">⭐ {product.rating}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
