import React from 'react';
import {AiFillStar} from 'react-icons/ai'

const BannerInfo = ({info}) => {
  const {Poster, Plot, Title, imdbRating} = info;
  return (
    <div className="py-12">
    <div className="flex items-center justify-around">
      <img src={Poster} className="max-w-sm rounded-lg shadow-2xl" />
      <div className='w-1/2'>
        <h1 className="text-5xl font-bold text-white">{Title}</h1>
        <p className="py-6 text-white text-sm sm:text-xl">{Plot}</p>
        <p className='space-x-2 text-2xl sm:text-4xl font-bold text-white flex items-center justify-start'><AiFillStar className='text-orange-300 text-2xl sm:4xl'/> <span>{imdbRating}/10</span></p>
      </div>
    </div>
  </div>
  );
};

export default BannerInfo;