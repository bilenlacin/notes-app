import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleSearch } from '../redux/features/noteSlice';

function Search() {
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleSearch(search));
  }, [dispatch, search]);
  return (
    <div className='searchInputDiv'>
      <input
        className='searchInput'
        type='text'
        placeholder='Search...'
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </div>
  );
}

export default Search;
