import React, { useContext, useEffect } from 'react';
import { json, useNavigate } from 'react-router';
import { MoviesContext } from '../Home/Home';

const MovieList = ({ movie }) => {
  const navigate = useNavigate()
  const { likedMovies } = useContext(MoviesContext)
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
  const dynamicPage = (id) => {
    navigate(`/info/${id}`)
  }



  return (
    <div >
      <img src={movie?.Poster} alt="movie" />
      <div className='flex items-center space-x-4'>
        <button
          className='btn btn-primary'
          onClick={() => handleLikedMovies(movie)}>like</button>
        <button
          onClick={() => dynamicPage(movie?.imdbID)}
          className='btn btn-secondary'>see more</button>
      </div>
    </div>
  );
};

export default MovieList;