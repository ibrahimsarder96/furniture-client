import React from 'react';
import './Categorys.css';

const Categorys = ({stoke}) => {
  const {img} = stoke;
  return (
    <div className='category'>
      <img src={img} alt="" />
    </div>
  );
};

export default Categorys;