import React from 'react';
import Search from './Search';
import Sort from './Sort';
import './SearchAndSort.scss';

const SearchAndSort = () => {
  return (
    <div className="SearchAndSort">
      <Search />
      <Sort />
    </div>
  );
};

export default SearchAndSort;
