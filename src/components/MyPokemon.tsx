import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchAndSort from './SearchAndSort';
import Loader from './Loader';
import Pokemon from './Pokemon';
import './MyPokemon.scss';

const MyPokemon = () => {
  const [myPokemons, setMyPokemons] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('mypokemon')) {
      const dataFromServer: any = [];
      const storageData: any = localStorage.getItem('mypokemon');
      const collection = JSON.parse(storageData);
      collection.forEach((pokemon: string) => {
        axios(
          `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        ).then((data: any) => dataFromServer.push(data.data));
      });
      setMyPokemons(dataFromServer);
    }
  }, []);

  const addToMyPokemon = (id: string) => {
    if (!localStorage.getItem('mypokemon')) {
      localStorage.setItem('mypokemon', JSON.stringify([id]));
    } else {
      const storageData: any = localStorage.getItem('mypokemon');
      const collection = JSON.parse(storageData);
      collection.push(id);
      localStorage.setItem('mypokemon', JSON.stringify(collection));
    }
  };

  const renderMyPokemons = () => {
    let pokemonsForRender: any = [];
    myPokemons.forEach((pokemon: any) => {
      pokemonsForRender
        .push
        // <Pokemon
        //   name={pokemon.name}
        //   type={pokemon.types[0].type.name}
        //   img={pokemon.sprites.front_default}
        //   id={pokemon.id}
        //   key={pokemon.id}
        //   addToMyPokemon={addToMyPokemon}
        // />
        ();
    });
    return pokemonsForRender;
  };

  return (
    <div className="MyPokemon">
      <SearchAndSort />
      <div className="MyPokemon-render">
        {myPokemons ? (
          <div className="MyPokemon-render-pokemons">{renderMyPokemons()}</div>
        ) : (
          <div className="MyPokemon-render-loader">
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPokemon;
