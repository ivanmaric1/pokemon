import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PokemonList from './PokemonList';
import MyPokemon from './MyPokemon';
import Menu from './Menu';
import './PokemonEncyclopedia.scss';

const PokemonEncyclopedia = () => {
  return (
    <div className="PokemonEncyclopedia">
      <Menu />
      <Switch>
        <Route exact path="/" component={PokemonList} />
        <Route path="/my" component={MyPokemon} />
      </Switch>
    </div>
  );
};

export default PokemonEncyclopedia;
