import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { name, price, rating, image } = product;

  return (
    <div className="product-card">
      <img
        src={image}
        alt={name}
        className="product-image"
      />
      <div className="product-info">
        <h3>{name}</h3>
        <p>{price}</p>
        <p>⭐ {rating}</p>
      </div>
    </div>
  );
};

export default ProductCard;
