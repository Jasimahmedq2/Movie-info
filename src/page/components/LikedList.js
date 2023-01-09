import React from 'react';

const LikedList = ({like}) => {
  return (
    <div >
    <img  src={like?.Poster} alt="movie" />
 
  </div>
  );
};

export default LikedList;