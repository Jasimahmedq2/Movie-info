import React, { useContext, useEffect } from 'react';
import { json } from 'react-router';
import { MoviesContext } from '../Home/Home';

const MovieList = ({movie}) => {

  const {likedMovies} = useContext(MoviesContext)
  const [liked, setLiked] = likedMovies;
  console.log(liked)

  const saveToLocalStorage = (items) => {
    localStorage.setItem('liked-movies', JSON.stringify(items))
  }
  
  const handleLikedMovies = (movie) => {
      const currentMovies = [...liked, movie]
      setLiked(currentMovies)
      saveToLocalStorage(currentMovies)
  }



  return (
    <div >
      <img  src={movie?.Poster} alt="movie" />
      <button
      className='btn btn-primary'
       onClick={() => handleLikedMovies(movie)}>like</button>
    </div>
  );
};

export default MovieList;