import React from 'react';
import '../assets/styles/SearchBar.css';
import search from '../assets/images/search.png';


const IconComponent = () => {
  return (
    <div style={{display:'flex',flexDirection:'row'}}>
      <img src={search} style={{width:'20px',height:'20px'}}/>
      <p style={{fontWeight:600,fontSize:'14px'}}>
      Electric
Automatic
      </p>
    </div>
  );
};

export default IconComponent;