import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import MovieList from './MovieList';
import { MoviesContext } from '../Home/Home';

const Movies = () => {
const {movie} = useContext(MoviesContext)
const [movies, setMovies] = movie;
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
      >

        {
          movies?.map(movie => {
            return (
              <SwiperSlide >
                <MovieList key={movie?.imdbID
} movie={movie} />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  );
};

export default Movies;