import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.png';
import './Menu.scss';

const Menu = () => {
  useEffect(() => {
    renderCouner();
  }, []);

  const renderCouner = () => {
    if (localStorage.getItem('mypokemon')) {
      const storageData: any = localStorage.getItem('mypokemon');
      const collection = JSON.parse(storageData);
      return collection.length;
    } else {
      return 0;
    }
  };

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
          <span className="Menu-counter">{renderCouner()}</span>
        </NavLink>
      </ul>
    </div>
  );
};

export default Menu;
