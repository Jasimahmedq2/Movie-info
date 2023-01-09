import React from 'react';

const InfoTable = ({ info }) => {
  const { Actors, BoxOffice, Country, Director, Language, Genre, Runtime, Writer, imdbVotes, Released } = info;
  return (
    <div className='text-white grid grid-cols-1 text-start px-12 py-12'>

      <h2 className='font-bold sm:text-2xl text-xl p-2'>Actors: <span className='text-blue-400'>{Actors}</span></h2>
      <h2 className='font-bold sm:text-2xl text-xl p-2'>Director: <span className='text-blue-400'>{Director}</span></h2>
      <h2 className='font-bold sm:text-2xl text-xl p-2'>Writer: <span className='text-blue-400'>{Writer}</span></h2>
      <h2 className='font-bold sm:text-2xl text-xl p-2'>Genre: <span className='text-blue-400'>{Genre}</span></h2>
      <h2 className='font-bold sm:text-2xl text-xl p-2'>Released: <span className='text-blue-400'>{Released}</span></h2>
      <h2 className='font-bold sm:text-2xl text-xl p-2'>Country:  <span className='text-blue-400'>{Country}</span></h2>
      <h2 className='font-bold sm:text-2xl text-xl p-2'>BoxOffice: <span className='text-blue-400'>{BoxOffice}</span></h2>
      <h2 className='font-bold sm:text-2xl text-xl p-2'>Language: <span className='text-blue-400'>{Language}</span></h2>
      <h2 className='font-bold sm:text-2xl text-xl p-2'>Runtime: <span className='text-blue-400'>{Runtime}</span></h2>
      <h2 className='font-bold sm:text-2xl text-xl p-2'>imdbVotes: <span className='text-blue-400'>{imdbVotes}</span></h2>

    </div>
  );
};

export default InfoTable;