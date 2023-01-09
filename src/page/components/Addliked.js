import React, { useContext } from 'react';
import 'swiper/css';
import { Swiper,SwiperSlide } from 'swiper/react';
import { MoviesContext } from '../Home/Home';
import LikedList from './LikedList';

const Addliked = () => {
  const {likedMovies} = useContext(MoviesContext)
  const [liked, setLiked] = likedMovies;
  console.log('new liked', liked)

  return (
    <div>
        <Swiper
        spaceBetween={50}
        slidesPerView={3}
      >

      {
        liked?.map(like => {
          return (
            <SwiperSlide>
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