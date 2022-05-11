import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect( () =>{
    fetch('https://serene-sierra-89525.herokuapp.com/product')
    .then(res => res.json())
    .then(data => setServices(data)) 
  },[])
  return (
    <div id='inventory'>
      <h2  className='services-title my-5'>INVENTORY ITEMS</h2>
     <div className='services-container container'>
     {
        services.map(service => <Service
        key={service._id}
        service={service}
        ></Service>)
      }
     </div>
    </div>
  );
};

export default Services;