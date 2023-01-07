import React from 'react';
import Movies from '../components/Movies';
import Searchbar from '../components/Searchbar';

const Home = () => {
  return (
    <>
      <Searchbar />
      <Movies />
    </>
  );
};

export default Home;