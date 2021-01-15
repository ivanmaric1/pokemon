import React, { Component } from 'react';
import SearchAndSort from './SearchAndSort';
import Pokemon from './Pokemon';
import Loader from './Loader';
import axios from 'axios';
import './PokemonList.scss';

interface State {
  pokemons: any;
  dataLoaded: boolean;
  filter: string;
  sortAbc: string;
  sortType: string;
  sortBest: string;
}

class PokemonList extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      pokemons: [],
      dataLoaded: false,
      filter: '',
      sortAbc: '',
      sortType: '',
      sortBest: '',
    };
  }

  componentDidMount() {
    const pokemons: any = [];
    axios('https://pokeapi.co/api/v2/pokemon?limit=200"').then((respond: any) =>
      respond.data.results.forEach((pokemon: any) => {
        axios(`${pokemon.url}`).then((res) => pokemons.push(res.data));
      })
    );
    setTimeout(() => {
      this.setState({ pokemons: pokemons, dataLoaded: true });
    }, 2000);
  }

  //Dodaj u MyPokemon
  addToMyPokemon = (id: string) => {
    if (!localStorage.getItem('mypokemon')) {
      localStorage.setItem('mypokemon', JSON.stringify([id]));
    } else {
      const storageData: any = localStorage.getItem('mypokemon');
      const collection = JSON.parse(storageData);
      collection.push(id);
      localStorage.setItem('mypokemon', JSON.stringify(collection));
    }
    window.location.reload();
  };

  //Obriši iz MyPokemon
  removeFromMyPokemon = (id: string) => {
    const storageData: any = localStorage.getItem('mypokemon');
    const collection = JSON.parse(storageData).filter(
      (pokemon: any) => pokemon !== id
    );
    localStorage.setItem('mypokemon', JSON.stringify(collection));
    window.location.reload(false);
  };

  //Promjena search inputa
  changeFilter = (str: string) => {
    this.setState({ filter: str });
  };

  //Promjena selecta po abecedi
  setFilterSort = (str: string) => {
    this.setState({ sortAbc: str });
  };

  //Promjena selecta prema typeu
  setFilterType = (str: string) => {
    this.setState({ sortType: str });
  };

  //Promjena selecta prema najboljim ocjenama
  setFilterBest = (str: string) => {
    this.setState({ sortBest: str });
  };

  renderPokemons = () => {
    let pokemonsForRender: any[] = [];
    if (this.state.pokemons) {
      this.state.pokemons.forEach((pokemon: any) => {
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
            order={pokemon.order}
          />
        );
      });
    }
    pokemonsForRender = pokemonsForRender.sort((a: any, b: any) =>
      a.props.name.localeCompare(b.props.name)
    );
    if (this.state.sortAbc) {
      if (this.state.sortAbc === 'az') {
        pokemonsForRender = pokemonsForRender.sort((a: any, b: any) =>
          a.props.name.localeCompare(b.props.name)
        );
      } else {
        pokemonsForRender = pokemonsForRender.sort((a: any, b: any) =>
          b.props.name.localeCompare(a.props.name)
        );
      }
    }
    if (this.state.sortType) {
      pokemonsForRender = pokemonsForRender.filter(
        (item: any) => item.props.type === this.state.sortType
      );
    }
    if (this.state.sortBest) {
      if (this.state.sortBest === 'hp') {
        pokemonsForRender = pokemonsForRender.sort(
          (a: any, b: any) =>
            b.props.stats[0].base_stat - a.props.stats[0].base_stat
        );
      }
      if (this.state.sortBest === 'attack') {
        pokemonsForRender = pokemonsForRender.sort(
          (a: any, b: any) =>
            b.props.stats[1].base_stat - a.props.stats[1].base_stat
        );
      }
      if (this.state.sortBest === 'defense') {
        pokemonsForRender = pokemonsForRender.sort(
          (a: any, b: any) =>
            b.props.stats[2].base_stat - a.props.stats[2].base_stat
        );
      }
      if (this.state.sortBest === 'specialA') {
        pokemonsForRender = pokemonsForRender.sort(
          (a: any, b: any) =>
            b.props.stats[3].base_stat - a.props.stats[3].base_stat
        );
      }
      if (this.state.sortBest === 'specialB') {
        pokemonsForRender = pokemonsForRender.sort(
          (a: any, b: any) =>
            b.props.stats[4].base_stat - a.props.stats[4].base_stat
        );
      }
      if (this.state.sortBest === 'speed') {
        pokemonsForRender = pokemonsForRender.sort(
          (a: any, b: any) =>
            b.props.stats[5].base_stat - a.props.stats[5].base_stat
        );
      }
    }
    if (this.state.filter) {
      pokemonsForRender = pokemonsForRender.filter((item: any) =>
        item.props.name.toLowerCase().includes(this.state.filter.toLowerCase())
      );
    }
    return pokemonsForRender;
  };

  render() {
    return (
      <div className="PokemonList">
        <SearchAndSort
          changeFilter={this.changeFilter}
          setFilterSort={this.setFilterSort}
          setFilterType={this.setFilterType}
          setFilterBest={this.setFilterBest}
        />
        <div className="PokemonList-render">
          {this.state.dataLoaded ? (
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
