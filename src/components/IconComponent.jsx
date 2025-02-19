import React from 'react';
import '../assets/styles/SearchBar.css';
import elctric from '../assets/images/electric.png';


const IconComponent = () => {
  return (
    <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',margin:'5px'}}>
      <img src={elctric} style={{width:'10px',height:'10px',objectFit:'cover'}}/>
      <p style={{fontWeight:600,fontSize:'14px'}}>
      Electric
Automatic
      </p>
    </div>
  );
};

export default IconComponent;