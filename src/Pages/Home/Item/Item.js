import React from 'react';
import { Carousel } from 'react-bootstrap';

import photo1 from '../../../images/item/photo1.jpg'
import photo2 from '../../../images/item/photo2.jpg'
import photo3 from '../../../images/item/photo3.jpg'
import photo4 from '../../../images/item/photo4.jpg'


const Item = () => {
  return (
    <div className='container'>
      <h1 className='text-center my-4'>Popular Across Site</h1>
      <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={photo1}
      alt="First slide"
    />
  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={photo2}
      alt="Second slide"
    />

   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={photo3}
      alt="Third slide"
    />

   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={photo4}
      alt="Third slide"
    />

   
  </Carousel.Item>
</Carousel>
    </div>
  );
};

export default Item;