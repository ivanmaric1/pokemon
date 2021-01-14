import React from 'react';
import './Sort.scss';

interface Props {
  setFilterSort: (str: string) => void;
  setFilterType: (str: string) => void;
  setFilterBest: (str: string) => void;
}

const Sort: React.FC<Props> = ({
  setFilterSort,
  setFilterType,
  setFilterBest,
}) => {
  return (
    <div className="Sort">
      <select onChange={(e: any) => setFilterSort(e.target.value)}>
        <option value="">Alphabetically</option>
        <option value="az">a-z</option>
        <option value="za">z-a</option>
      </select>
      <select onChange={(e: any) => setFilterType(e.target.value)}>
        <option value="">Type</option>
        <option value="psychic">psychic</option>
        <option value="electric">electric</option>
        <option value="rock">rock</option>
        <option value="poison">poison</option>
        <option value="normal">normal</option>
        <option value="fire">fire</option>
        <option value="bug">bug</option>
        <option value="ice">ice</option>
        <option value="grass">grass</option>
        <option value="water">water</option>
        <option value="fairy">fairy</option>
        <option value="ground">ground</option>
        <option value="dragon">dragon</option>
        <option value="ghost">ghost</option>
        <option value="fighting">fighting</option>
      </select>
      <select onChange={(e: any) => setFilterBest(e.target.value)}>
        <option value="">Best in</option>
        <option value="hp">hp</option>
        <option value="attack">attack</option>
        <option value="defense">defense</option>
        <option value="specialA">special attack</option>
        <option value="specialB">sepcial defense</option>
        <option value="speed">speed</option>
      </select>
    </div>
  );
};

export default Sort;
