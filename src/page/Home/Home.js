import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import Addliked from '../components/Addliked';
import Movies from '../components/Movies';
import Searchbar from '../components/Searchbar';

export const MoviesContext = createContext()


const Home = () => {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')
  const [liked, setLiked] = useState([])

  const loadMoviesData = async (search) => {
    const { data } = await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=7144fcb3`)
    if (data.Search) {
      setMovies(data.Search)
    }
  }

  useEffect(() => {
    loadMoviesData(search)
  }, [search])

  return (
    <MoviesContext.Provider
      value={{
        movie: [movies, setMovies],
        searchData: [search, setSearch],
        likedMovies: [liked, setLiked]
      }}>
      <Searchbar />
      <Movies />
      <Addliked />
    </MoviesContext.Provider>
  );
};

export default Home;