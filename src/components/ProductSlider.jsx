import React from 'react';
import '../assets/styles/ProductSlider.css';

const ProductSlider = () => {
  return (
    <div className="product-slider">
      <h2>Featured Products</h2>
      <div className="slider">
        <img src="https://via.placeholder.com/200x150" alt="Product" />
        <img src="https://via.placeholder.com/200x150" alt="Product" />
        <img src="https://via.placeholder.com/200x150" alt="Product" />
        <img src="https://via.placeholder.com/200x150" alt="Product" />
      </div>
    </div>
  );
};

export default ProductSlider;