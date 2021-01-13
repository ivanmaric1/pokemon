import { stat } from 'fs';
import React, { useState, useEffect } from 'react';
import './Pokemon.scss';

interface Pokemon {
  name: string;
  img: string;
  type: string;
  id: string;
  height: string;
  weight: string;
  exp: string;
  stats: any;
  moves: any;
  addToMyPokemon: (id: string) => void;
}

const Pokemon: React.FC<Pokemon> = ({
  name,
  type,
  img,
  id,
  height,
  weight,
  exp,
  stats,
  moves,
  addToMyPokemon,
}) => {
  const [info, setInfo] = useState('about');

  useEffect(() => {
    renderContent();
  }, [info]);

  const renderContent = () => {
    if (info === 'about') {
      return (
        <table className="About">
          <tr>
            <td>Base Experience</td>
            <td>{exp}</td>
          </tr>
          <tr>
            <td>Heihgt</td>
            <td>{height}</td>
          </tr>
          <tr>
            <td>Weihgt</td>
            <td>{weight}</td>
          </tr>
        </table>
      );
    }
    if (info === 'stats') {
      return (
        <table className="About">
          <tr>
            <td>HP</td>
            <td>{stats[0].base_stat}</td>
          </tr>
          <tr>
            <td>Attack</td>
            <td>{stats[1].base_stat}</td>
          </tr>
          <tr>
            <td>Defense</td>
            <td>{stats[2].base_stat}</td>
          </tr>
          <tr>
            <td>Special Attack</td>
            <td>{stats[3].base_stat}</td>
          </tr>
          <tr>
            <td>Special Defense</td>
            <td>{stats[4].base_stat}</td>
          </tr>
          <tr>
            <td>Speed</td>
            <td>{stats[5].base_stat}</td>
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
        <div>
          <ul className="Pokemon-card-menu">
            <li onClick={() => setInfo('about')}>About</li>
            <li onClick={() => setInfo('stats')}>Stats</li>
            <li onClick={() => setInfo('moves')}>Moves</li>
          </ul>
          <div>{renderContent()}</div>
          <button onClick={() => addToMyPokemon(id)}>Add to My Pokemon</button>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
