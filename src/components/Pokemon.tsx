import { stat } from 'fs';
import React, { useState, useEffect } from 'react';
import './Pokemon.scss';

interface Pokemon {
  name: string;
  order: number;
  img: string;
  type: string;
  id: string;
  height: string;
  weight: string;
  exp: string;
  stats: any;
  moves: any;
  addToMyPokemon: (id: string) => void;
  removeFromMyPokemon: (id: string) => void;
}

const Pokemon: React.FC<Pokemon> = ({
  name,
  order,
  type,
  img,
  id,
  height,
  weight,
  exp,
  stats,
  moves,
  addToMyPokemon,
  removeFromMyPokemon,
}) => {
  const [info, setInfo] = useState('about');
  const [inMyPokemon, setInMyPokemon] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('mypokemon')) {
      const localS: any = localStorage.getItem('mypokemon');
      const mypokemons = JSON.parse(localS);
      if (mypokemons.includes(id)) {
        setInMyPokemon(true);
      }
    }
  });

  useEffect(() => {
    renderContent();
  }, [info]);

  const renderContent = () => {
    if (info === 'about') {
      return (
        <table className="About">
          <tr>
            <td>Name:</td>
            <td className="About-bold">{name}</td>
          </tr>
          <tr>
            <td>Order:</td>
            <td className="About-bold">{order}</td>
          </tr>
          <tr>
            <td>Base Experience:</td>
            <td className="About-bold">{exp}</td>
          </tr>
          <tr>
            <td>Heihgt:</td>
            <td className="About-bold">{height}</td>
          </tr>
          <tr>
            <td>Weihgt:</td>
            <td className="About-bold">{weight}</td>
          </tr>
        </table>
      );
    }
    if (info === 'stats') {
      return (
        <table className="About">
          <tr>
            <td>HP:</td>
            <td className="About-bold">{stats[0].base_stat}</td>
          </tr>
          <tr>
            <td>Attack:</td>
            <td className="About-bold">{stats[1].base_stat}</td>
          </tr>
          <tr>
            <td>Defense:</td>
            <td className="About-bold">{stats[2].base_stat}</td>
          </tr>
          <tr>
            <td>Special Attack:</td>
            <td className="About-bold">{stats[3].base_stat}</td>
          </tr>
          <tr>
            <td>Special Defense:</td>
            <td className="About-bold">{stats[4].base_stat}</td>
          </tr>
          <tr>
            <td>Speed:</td>
            <td className="About-bold">{stats[5].base_stat}</td>
          </tr>
        </table>
      );
    }
    if (info === 'moves') {
      let m: any = [];
      for (let i = 0; i < 14; i++) {
        if (moves[i]) {
          m.push(moves[i].move.name);
        }
      }
      return (
        <div className="Moves">
          {m.map((item: any) => (
            <p>{item}</p>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="Pokemon-card">
      <div className="Pokemon-card-side Pokemon-card-side-front">
        <h3>{name}</h3>
        <img src={img} alt={name} />
        <p>type : {type}</p>
      </div>
      <div className="Pokemon-card-side Pokemon-card-side-back">
        <ul className="Pokemon-card-menu">
          <li onClick={() => setInfo('about')}>About</li>
          <li onClick={() => setInfo('stats')}>Stats</li>
          <li onClick={() => setInfo('moves')}>Moves</li>
        </ul>
        <div>{renderContent()}</div>
        {inMyPokemon ? (
          <button
            className="Pokemon-card-btn"
            onClick={() => removeFromMyPokemon(id)}
          >
            Remove From My Pokemon
          </button>
        ) : (
          <button
            className="Pokemon-card-btn"
            onClick={() => addToMyPokemon(id)}
          >
            Add to My Pokemon
          </button>
        )}
      </div>
    </div>
  );
};

export default Pokemon;
