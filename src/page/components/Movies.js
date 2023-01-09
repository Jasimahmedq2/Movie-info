import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import MovieList from './MovieList';
import { MoviesContext } from '../Home/Home';

const Movies = () => {
const movies = useContext(MoviesContext)
  return (
    <div>
      <Swiper
        spaceBetween={30}
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