import './Navbar.css';
import { assets } from '../../assets/assets';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('home');
  
  return (
    <div className="navbar">
      <Link to="/">
        <img className="logo" src={assets.logo} alt="Logo" />
      </Link>
      <ul className="navbar-menu">
        <Link to="/" className={menu === 'home' ? 'active' : ''} onClick={() => setMenu('home')}>Home</Link>
        <a href="/#explore-menu" className={menu === 'menu' ? 'active' : ''} onClick={() => setMenu('menu')}>Menu</a>
        <a href="/#app-download" className={menu === 'mobile-app' ? 'active' : ''} onClick={() => setMenu('mobile-app')}>Mobile-app</a>
        <a href="/#footer" className={menu === 'contact-us' ? 'active' : ''} onClick={() => setMenu('contact-us')}>Contact-us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-cart-icon">
          <Link to="/cart"><img src={assets.basket_icon} alt="Basket" /></Link>
          <div className="dot"></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
