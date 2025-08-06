import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const stars =
    "★".repeat(Math.floor(product.rating)) +
    "☆".repeat(5 - Math.floor(product.rating));

  return (
    <div className="product-card">
      {/* Image will enlarge on hover using CSS */}
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-details">
        <h3>{product.name}</h3>
        <p className="price">{product.price}</p>
        <p className="rating">
          {stars} ({product.rating})
        </p>
        <button className="buy-btn">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductCard;
