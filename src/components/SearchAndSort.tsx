import React from 'react';
import Search from './Search';
import Sort from './Sort';
import './SearchAndSort.scss';

interface Props {
  changeFilter: (str: string) => void;
  setFilterSort: (str: string) => void;
  setFilterType: (str: string) => void;
  setFilterBest: (str: string) => void;
}

const SearchAndSort: React.FC<Props> = ({
  changeFilter,
  setFilterSort,
  setFilterType,
  setFilterBest,
}) => {
  return (
    <div className="SearchAndSort">
      <Search changeFilter={changeFilter} />
      <Sort
        setFilterSort={setFilterSort}
        setFilterBest={setFilterBest}
        setFilterType={setFilterType}
      />
    </div>
  );
};

export default SearchAndSort;
