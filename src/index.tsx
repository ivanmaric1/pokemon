import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import PokemonEncyclopedia from './components/PokemonEncyclopedia';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <PokemonEncyclopedia />
  </BrowserRouter>,
  document.getElementById('root')
);
