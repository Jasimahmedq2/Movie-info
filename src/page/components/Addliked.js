import React, { useContext, useEffect } from 'react';
import 'swiper/css';
import { Swiper,SwiperSlide } from 'swiper/react';
import { MoviesContext } from '../Home/Home';
import LikedList from './LikedList';

const Addliked = () => {
  const {likedMovies} = useContext(MoviesContext)
  const [liked, setLiked] = likedMovies;

  useEffect(() => {
    const storageMovies = JSON.parse(localStorage.getItem('liked-movies'))
    setLiked(storageMovies)
  },[])

  return (
    <div className='py-12'>
      <h2 className='text-white text-xl sm:text-2xl font-bold py-2'>Liked Movies</h2>
        <Swiper
        spaceBetween={50}
        slidesPerView={3}
      >

      {
        liked?.map(like => {
          return (
            <SwiperSlide key={like?.imdbID
            }>
            <LikedList 
            like={like}
            />
            </SwiperSlide>
          )
        })
      }
      </Swiper>
    </div>
  );
};

export default Addliked;