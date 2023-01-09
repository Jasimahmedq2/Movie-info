import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { MoviesContext } from '../Home/Home';

const LikedList = ({ like }) => {
  const navigate = useNavigate()
  const { likedMovies } = useContext(MoviesContext)
  const [liked, setLiked] = likedMovies;

  console.log("liked :", liked)

  const removeItem = (like) => {
    const newMovie = liked.filter(movie => movie.imdbID !== like.imdbID)
    localStorage.setItem('liked-movies', JSON.stringify(newMovie))
    setLiked(newMovie)
  }

  return (
    <div >
      <img src={like?.Poster} alt="movie" />
      <div className='flex items-center space-x-4'>
        <button
          onClick={() => removeItem(like)} className='text-xl text-red-400 btn btn-primary'>remove</button>
        <button
          onClick={() => navigate(`/info/${like.imdbID}`)}
          className='btn btn-secondary'>see more</button>
      </div>
    </div>
  );
};

export default LikedList;