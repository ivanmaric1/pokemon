import React from 'react';
import Search from './Search';
import Sort from './Sort';
import './SearchAndSort.scss';

interface Props {
  changeFilter: (str: string) => void;
}

const SearchAndSort: React.FC<Props> = ({ changeFilter }) => {
  return (
    <div className="SearchAndSort">
      <Search changeFilter={changeFilter} />
      <Sort />
    </div>
  );
};

export default SearchAndSort;
