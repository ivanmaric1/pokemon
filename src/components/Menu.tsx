import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.png';
import './Menu.scss';

const Menu = () => {
  return (
    <div className="Menu">
      <NavLink exact to="/">
        <img src={logo} alt="Logo" className="Menu-logo" />
      </NavLink>

      <ul className="Menu-list">
        <NavLink exact to="/" activeClassName="Menu-active">
          Pokemon List
        </NavLink>
        <NavLink to="/my" activeClassName="Menu-active">
          My Pokemon
        </NavLink>
      </ul>
    </div>
  );
};

export default Menu;
