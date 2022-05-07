import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import banner1 from '../../../../images/banner/banner1.jpg'
import banner2 from '../../../../images/banner/banner2.jpg'
import banner3 from '../../../../images/banner/banner3.jpg'

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
    <Carousel.Item>
      <img
        className="d-block w-100 slider"
        src={banner1}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>The Langston bedroom group is the perfect option for essential bedroom furnishing</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 slider"
        src={banner2}
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Tessa Alabaster is casual elegance with Comfort Plush seating at its best.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 slider"
        src={banner3}
        alt="Third slide"
      />
      
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
        Tactile, yet refined, and always modern. Clean lines meld with comfortable
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  );
};

export default Banner;