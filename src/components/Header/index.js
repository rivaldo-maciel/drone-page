import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { NavBar, Logo } from './style.js';

function Header() {
  return (
    <header>
      <div className="logo-content">
        <Logo />
      </div>
      <NavBar>
        <Link to="/">Home</Link>
        <Link>Sobre Nós</Link>
        <Link>Produtos</Link>
        <Link>Contato</Link>
      </NavBar>
    </header>
  );
};

export default Header;