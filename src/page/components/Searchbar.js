import React, { useContext } from 'react';
import { MoviesContext } from '../Home/Home';

const Searchbar = () => {
  const {searchData} = useContext(MoviesContext)
  const [search, setSearch] = searchData;

  return (
    <div className='flex items-center justify-between p-12'>
    <div className='text-white font-bold'>MOVIES</div>
      <div>
        <input 
        onChange={(e) => setSearch(e.target.value)}
        type="text" placeholder="search movie..." className="input input-bordered w-full max-w-xs" />
      </div>
    </div>
  );
};

export default Searchbar;