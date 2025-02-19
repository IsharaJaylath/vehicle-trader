import React from 'react';
import '../assets/styles/ProductView.css';
import carMain from '../assets/images/carmain.png';

const ProductView = () => {
  return (
    <div className="product-view">
      {/* Left Section: Small Product Thumbnails */}
      <div className="product-thumbnails">
        <img src={carMain} alt="Product Thumbnail" />
        <img src={carMain} alt="Product Thumbnail" />
        <img src={carMain} alt="Product Thumbnail" />
        <img src={carMain} alt="Product Thumbnail" />
      </div>
      
      {/* Middle Section: Large Product Image */}
      <div className="product-main-image">
        <img src={carMain} alt="Product" />
      </div>
      
      {/* Right Section: Product Details */}
      <div className="product-details">
        <p className='product-title'>Renault Symbioz</p>
        <p className='product-subtitle'>1.6 E-TECH techno Auto Euro 6 (s/s) 5dr</p>
        <div style={{display:'flex',flexDirection:'row',gap:'10px'}}>
        <p className='product-subtitle'>For sale by Roshan</p>
        <p className='product-subtitle'>For sale by Roshan</p>
        </div>
        <p className='product-price'>Price: $99.99</p>
        <p className='product-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductView;
