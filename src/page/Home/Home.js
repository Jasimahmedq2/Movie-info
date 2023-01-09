import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import Movies from '../components/Movies';
import Searchbar from '../components/Searchbar';

export const MoviesContext = createContext()


const Home = () => {
  const [movies, setMovies] = useState([])
  const loadMoviesData = async () => {
    const { data } = await axios.get(`https://www.omdbapi.com/?s=adventure&apikey=7144fcb3`)
    setMovies(data.Search)
  }

  useEffect(() => {
    loadMoviesData()
  }, [])

  return (
    <MoviesContext.Provider value={movies}>
      <Searchbar />
      <Movies />
    </MoviesContext.Provider>


  );
};

export default Home;