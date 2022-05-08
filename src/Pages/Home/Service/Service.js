import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
  const {id,name, img, description, quantity, price,  supplier} = service;
  const navigate = useNavigate();
  const navigateOnService = id =>{
    navigate(`/service/${id}`)
  }
  return (
    <div className='service'>
      <img  src={img} alt="" />
      <div className='service-info'>
      <h3>name: {name}</h3>
      <p>Price: {price}</p>
      <p>Quantity: {quantity}</p>
      <h6>Supplier Name: {supplier}</h6>
      <p>{description}</p>
      </div>
      <Link to='/inventory'><button className='service-btn' onClick={() => navigateOnService (id)}>update</button></Link>
    </div>
  );
};

export default Service;