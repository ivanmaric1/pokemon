import React, { Component } from 'react';
import axios from 'axios';
import SearchAndSort from './SearchAndSort';
import Loader from './Loader';
import Pokemon from './Pokemon';
import './MyPokemon.scss';

interface State {
  myPokemons: any;
  dataLoaded: boolean;
  filter: string;
}

class MyPokemon extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      myPokemons: [],
      dataLoaded: false,
      filter: '',
    };
  }

  componentDidMount() {
    const pokemons: any = [];
    if (localStorage.getItem('mypokemon')) {
      const localS: any = localStorage.getItem('mypokemon');
      const mypokemons = JSON.parse(localS);
      mypokemons.forEach((pokemon: any) => {
        axios(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((res) =>
          pokemons.push(res.data)
        );
      });
    }
    setTimeout(() => {
      this.setState({ myPokemons: pokemons, dataLoaded: true });
    }, 300);
  }

  addToMyPokemon = (id: string) => {
    console.log('fake');
  };
  removeFromMyPokemon = (id: string) => {
    const storageData: any = localStorage.getItem('mypokemon');
    const collection = JSON.parse(storageData).filter(
      (pokemon: any) => pokemon !== id
    );
    localStorage.setItem('mypokemon', JSON.stringify(collection));
    window.location.reload(false);
  };

  changeFilter = (str: string) => {
    this.setState({ filter: str });
  };

  renderMyPokemons = () => {
    let pokemonsForRender: any = [];
    this.state.myPokemons.forEach((pokemon: any) => {
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
          removeFromMyPokemon={this.removeFromMyPokemon}
          stats={pokemon.stats}
          moves={pokemon.moves}
        />
      );
    });

    if (this.state.filter) {
      pokemonsForRender = pokemonsForRender.filter((item: any) =>
        item.props.name.toLowerCase().includes(this.state.filter.toLowerCase())
      );
    }
    return pokemonsForRender;
  };

  render() {
    return (
      <div className="MyPokemon">
        <SearchAndSort changeFilter={this.changeFilter} />
        <div className="MyPokemon-render">
          {this.state.dataLoaded ? (
            <div className="MyPokemon-render-pokemons">
              {this.renderMyPokemons()}
            </div>
          ) : (
            <div className="MyPokemon-render-loader">
              <Loader />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default MyPokemon;
