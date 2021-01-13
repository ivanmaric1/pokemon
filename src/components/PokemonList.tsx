import React, { Component } from 'react';
import SearchAndSort from './SearchAndSort';
import Pokemon from './Pokemon';
import Loader from './Loader';
import './PokemonList.scss';

interface Props {
  pokemons: any;
}

class PokemonList extends Component<Props, {}> {
  constructor(props: any) {
    super(props);
    this.state = {
      updated: false,
    };
  }

  addToMyPokemon = (id: string) => {
    if (!localStorage.getItem('mypokemon')) {
      localStorage.setItem('mypokemon', JSON.stringify([id]));
    } else {
      const storageData: any = localStorage.getItem('mypokemon');
      const collection = JSON.parse(storageData);
      collection.push(id);
      localStorage.setItem('mypokemon', JSON.stringify(collection));
    }
  };

  renderPokemons = () => {
    const pokemonsForRender: any[] = [];
    if (this.props.pokemons) {
      this.props.pokemons.forEach((pokemon: any) => {
        pokemonsForRender.push(
          <Pokemon
            name={pokemon.name}
            type={pokemon.types[0].type.name}
            img={pokemon.sprites.front_default}
            id={pokemon.id}
            key={pokemon.id}
            height={pokemon.height}
            weight={pokemon.weight}
            exp={pokemon.base_experience}
            addToMyPokemon={this.addToMyPokemon}
            stats={pokemon.stats}
            moves={pokemon.moves}
          />
        );
      });
    }
    return pokemonsForRender;
  };

  render() {
    console.log(this.props.pokemons);
    return (
      <div className="PokemonList">
        <SearchAndSort />
        <div className="PokemonList-render">
          {this.props.pokemons ? (
            <div className="PokemonList-render-pokemons">
              {this.renderPokemons()}
            </div>
          ) : (
            <div className="PokemonList-render-loader">
              <Loader />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default PokemonList;
