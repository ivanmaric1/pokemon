import React from 'react';
import './Search.scss';

interface Props {
  changeFilter: (str: string) => void;
}

const Search: React.FC<Props> = ({ changeFilter }) => {
  return (
    <div className="Search">
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => changeFilter(e.target.value)}
      />
    </div>
  );
};

export default Search;
