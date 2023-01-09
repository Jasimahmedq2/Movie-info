import React, { useContext } from 'react';
import { MoviesContext } from '../Home/Home';

const MovieList = ({movie}) => {
  const {likedMovies} = useContext(MoviesContext)
  const [liked, setLiked] = likedMovies;
  const handleLikedMovies = (movie) => {
      const currentMovies = [...liked, movie]
      setLiked(currentMovies)
  }
  return (
    <div >
      <img  src={movie?.Poster} alt="movie" />
      <button
      className='btn btn-primary'
       onClick={() => handleLikedMovies(movie)}>liked</button>
    </div>
  );
};

export default MovieList;