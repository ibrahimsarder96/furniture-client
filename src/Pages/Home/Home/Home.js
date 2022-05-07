import React from 'react';
import Category from '../Category/Category';
import Services from '../Services/Services';
import Banner from './Banner/Banner';

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Services></Services>
      <Category></Category>
    </>
  );
};

export default Home;