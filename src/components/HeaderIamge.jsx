import React from 'react';
import carImage from '../assets/images/headercar.png'; // Car image
import logoImage from '../assets/images/Logo2.png'; // Logo image
import '../assets/styles/Header.css';

const HeaderImage = () => {
  return (
    <div className="header-image">
      <img src={carImage} alt="Car" className="car-image" />
      <img src={logoImage} alt="Logo" className="logo-image" />
    </div>
  );
};

export default HeaderImage;