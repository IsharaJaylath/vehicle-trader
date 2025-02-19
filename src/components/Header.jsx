import React from 'react';
import '../assets/styles/Header.css';
import CategorySelect from './CategorySelect';
import SearchBar from './SearchBar';
import Logo from '../assets/images/Logo.png';
import logout from '../assets/images/logout.png';
import Heart from '../assets/images/heart.png';
import User from '../assets/images/user.png'

const Header = () => {
  return (
    <header className="header">
        <div className="header-top">
          <p style={{paddingLeft: '10px',paddingRight:'10px'}} className="header-title">Welcome to Vehicle Trader</p>
          <div style={{ display: 'flex', alignItems: 'center' ,paddingLeft: '10px',paddingRight:'10px',gap:2}}>
            <img src={logout} alt="Header" className="logout-img" style={{ marginRight: '10px' }}/>
            <a className='header-subtitle' href="/login">Login</a>
            <p className='header-subtitle'>/</p>
            <a className='header-subtitle' href="/signup">Signup</a>
          </div>
        </div>
      <div className="header-content">
        <img src={Logo} alt="Header" className="logo-img" />
        <div className='header-search'>
        <CategorySelect />
        <SearchBar />
        </div>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',height:'20px'}}>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
        <img src={Heart} alt="Header" className="logout-img" style={{ marginRight: '10px' }}/>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <p className='sub-text' href="/login">Login</p>
        <p className='sub-text-subtitle' href="/login">My Account</p>
        </div>
        </div>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
        <img src={User} alt="Header" className="logout-img" style={{ marginRight: '10px' }}/>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'20px'}}>
        <p className='sub-text' href="/login">Login</p>
        <p className='sub-text-subtitle' href="/login">My Account</p>
        </div>
        </div>
        </div>
      </div>
      <div className="header-bottom">
        <nav style={{ margin: '10px', gap: '10px', display: 'flex', flexWrap: 'wrap' }} className="nav-links">
          <a className='header-subtitle nav-link' href="/used-cars">Used Cars</a>
          <a className='header-subtitle nav-link' href="/new-cars">New Cars</a>
          <a className='header-subtitle nav-link' href="/sell-your-car">Sell Your Car</a>
          <a className='header-subtitle nav-link' href="/value-your-car">Value Your Car</a>
          <a className='header-subtitle nav-link' href="/car-reviews">Car Reviews</a>
          <a className='header-subtitle nav-link' href="/car-leasing">Car Leasing</a>
          <a className='header-subtitle nav-link' href="/electric-cars">Electric Cars</a>
          <a className='header-subtitle nav-link' href="/buy-car-online">Buy a Car Online</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;