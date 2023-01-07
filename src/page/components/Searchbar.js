import React from 'react';

const Searchbar = () => {
  return (
    <div className='flex items-center justify-between p-12'>
    <div className='text-white font-bold'>MOVIES</div>
      <div>
        <input type="text" placeholder="search movie..." className="input input-bordered w-full max-w-xs" />
      </div>
    </div>
  );
};

export default Searchbar;