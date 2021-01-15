import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import PokemonEncyclopedia from './components/PokemonEncyclopedia';
import './index.scss';

ReactDOM.render(
  <HashRouter>
    <PokemonEncyclopedia />
  </HashRouter>,
  document.getElementById('root')
);
