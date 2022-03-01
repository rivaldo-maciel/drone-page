import React, { useContext } from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import mobileContext from '../../context/mobileContext.js';

function MobileMenu() {
  const { setShowMenu } = useContext(mobileContext);
  return (
    <nav className="nav-menu-mobile">
      <div>
        <Link to="/" onClick={() => setShowMenu((prevState) => !prevState)}>Home</Link>
        <Link to="/about" onClick={() => setShowMenu((prevState) => !prevState)}>Sobre Nós</Link>
        <Link to="/products" onClick={() => setShowMenu((prevState) => !prevState)}>Produtos</Link>
        <Link to="/contact" onClick={() => setShowMenu((prevState) => !prevState)}>Contato</Link>
      </div>
    </nav>
  );
}

export default MobileMenu;