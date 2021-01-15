import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PokemonList from './PokemonList';
import MyPokemon from './MyPokemon';
import Menu from './Menu';
import Footer from './Footer';

const PokemonEncyclopedia = () => {
  return (
    <div>
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
