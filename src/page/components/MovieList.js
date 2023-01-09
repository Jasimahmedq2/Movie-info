import React from 'react';

const MovieList = ({movie}) => {
  return (
    <div >
      <img  src={movie.Poster} alt="movie" />
    </div>
  );
};

export default MovieList;