import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import MovieList from './MovieList';

const Movies = () => {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')
  console.log(movies)

  const LoadMovies = async () => {
    const { data } = await axios.get(`https://www.omdbapi.com/?s=adventure&apikey=7144fcb3`)
    setMovies(data.Search)
  }

  useEffect(() => {
    LoadMovies()
  }, [])
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
      >

        {
          movies.map(movie => {
            return (
              <SwiperSlide>
                <MovieList movie={movie} />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  );
};

export default Movies;