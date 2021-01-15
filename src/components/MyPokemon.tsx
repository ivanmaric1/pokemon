import React, { Component } from 'react';
import axios from 'axios';
import SearchAndSort from './SearchAndSort';
import Loader from './Loader';
import Pokemon from './Pokemon';
import Details from './Details';
import './MyPokemon.scss';

interface State {
  myPokemons: any;
  dataLoaded: boolean;
  filter: string;
  sortAbc: string;
  sortType: string;
  sortBest: string;
}

class MyPokemon extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      myPokemons: [],
      dataLoaded: false,
      filter: '',
      sortAbc: '',
      sortType: '',
      sortBest: '',
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

  renderMyPokemons = () => {
    let pokemonsForRender: any[] = [];
    if (this.state.myPokemons) {
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
      <div className="MyPokemon">
        <SearchAndSort
          changeFilter={this.changeFilter}
          setFilterSort={this.setFilterSort}
          setFilterType={this.setFilterType}
          setFilterBest={this.setFilterBest}
        />
        <Details myPokemons={this.state.myPokemons} />
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
        <div>
          {this.state.myPokemons.length === 0 ? (
            <div className="MyPokemon-empty">You dont have any items!</div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default MyPokemon;
