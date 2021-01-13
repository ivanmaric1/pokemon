import React from 'react';
import SearchAndSort from './SearchAndSort';
import './PokemonList.scss';

const PokemonList = () => {
  return (
    <div className="PokemonList">
      <SearchAndSort />
      <p>PokemonList</p>
    </div>
  );
};

export default PokemonList;
