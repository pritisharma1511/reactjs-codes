import React from 'react';
import ProductCard from './ProductCard';
import "./ProductList.css";


const products = [
  { id: 1, name: "Smartphone", price: "₹14,999", rating: 4.3, image: "/images/product1.jpg" },
  { id: 2, name: "Headphones", price: "₹1,999", rating: 4.0, image: "/images/product2.jpg" },
  { id: 3, name: "Shoes", price: "₹2,499", rating: 4.5, image: "/images/product3.jpg" },
  { id: 4, name: "Backpack", price: "₹799", rating: 4.1, image: "/images/product4.jpg" },
  { id: 5, name: "Wrist Watch", price: "₹1,299", rating: 4.2, image: "/images/product5.jpg" },
  { id: 6, name: "Bluetooth Speaker", price: "₹1,499", rating: 4.4, image: "/images/product6.jpg" },
  { id: 7, name: "DSLR Camera", price: "₹37,999", rating: 4.6, image: "/images/product7.jpg" },
  { id: 8, name: "Gaming Mouse", price: "₹999", rating: 4.3, image: "/images/product8.jpg" },
  { id: 9, name: "Fitness Band", price: "₹1,899", rating: 4.1, image: "/images/product9.jpg" },
  { id: 10, name: "LED Monitor", price: "₹7,999", rating: 4.5, image: "/images/product10.jpg" },
  { id: 11, name: "Laptop", price: "₹54,999", rating: 4.7, image: "/images/product11.jpg" },
  { id: 12, name: "Air Conditioner", price: "₹32,499", rating: 4.3, image: "/images/product12.jpg" }
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;