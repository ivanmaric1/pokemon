import React from 'react';
import SearchAndSort from './SearchAndSort';
import './MyPokemon.scss';

const MyPokemon = () => {
  return (
    <div className="MyPokemon">
      <SearchAndSort />
      <p>My Pokemon</p>
    </div>
  );
};

export default MyPokemon;
