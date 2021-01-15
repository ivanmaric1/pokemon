import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import PokemonList from './PokemonList';
import MyPokemon from './MyPokemon';
import Menu from './Menu';
import Footer from './Footer';
import './PokemonEncyclopedia.scss';

const PokemonEncyclopedia = () => {
  return (
    <div className="PokemonEncyclopedia">
      <Menu />
      <Switch>
        <Route exact path="/" component={PokemonList} />
        <Route path="/my" component={MyPokemon} />
      </Switch>
      <Footer />
    </div>
  );
};

export default PokemonEncyclopedia;
