import React, { useContext } from 'react';
import { MoviesContext } from '../Home/Home';

const LikedList = ({ like }) => {
  const {likedMovies} = useContext(MoviesContext)
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
      <button onClick={() => removeItem(like)} className='text-xl text-red-400 btn btn-primary'>remove</button>
    </div>
  );
};

export default LikedList;