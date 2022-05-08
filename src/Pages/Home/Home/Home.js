import React from 'react';
import Category from '../Category/Category';
import Item from '../Item/Item';
import Services from '../Services/Services';
import Banner from './Banner/Banner';

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Services></Services>
      <Category></Category>
      <Item></Item>
    </>
  );
};

export default Home;