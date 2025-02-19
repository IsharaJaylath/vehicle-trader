import React from 'react';
import '../assets/styles/CategorySelect.css';

const CategorySelect = () => {
  return (
    <select className="category-select">
      <option value="all">All Categories</option>
      <option value="cars">Cars</option>
      <option value="bikes">Bikes</option>
      <option value="trucks">Trucks</option>
    </select>
  );
};

export default CategorySelect;