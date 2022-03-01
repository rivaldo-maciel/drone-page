import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { NavBar, Logo, MenuIcon, CloseIcon } from './style.js';
import mobileContext from '../../context/mobileContext.js';

function Header() {
  const { showMenu, setShowMenu } = useContext(mobileContext);

  return (
    <header>
      <div className="logo-content">
        <Logo />
      </div>
      <button
        className="btn-menu"
        type="button"
        onClick={() => setShowMenu((prevState) => !prevState)}
      >
        {
          showMenu ? <CloseIcon /> : <MenuIcon />
        }
      </button>
      <NavBar>
        <Link to="/">Home</Link>
        <Link to="/about">Sobre Nós</Link>
        <Link to="/products">Produtos</Link>
        <Link to="/contact">Contato</Link>
      </NavBar>
    </header>
  );
};

export default Header;