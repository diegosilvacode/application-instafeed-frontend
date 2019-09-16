import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';
import logo from '../assets/logo.svg';
import camera from '../assets/camera.svg';

function Header() {
  return (
    <header id="main-header">
      <div className="header-content">
        <Link to="/">
          <img src={logo} alt="instafeed logo" />
        </Link>
        <Link to="/new">
          <img src={camera} alt="publicar" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
