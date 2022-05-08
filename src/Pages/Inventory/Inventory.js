import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
  const {serviceId} = useParams();
  const [service, setService] = useState({});

  useEffect( () => {
    const url = `http://localhost:5000/product/${serviceId}`;

    fetch(url)
    .then(res => res.json())
    .then(data => setService(data))
  },[])
  console.log(serviceId)
  return (
    <div>
      <img src={service.img} alt="" />
      <h1>Product: {service.name}</h1>
    </div>
  );
};

export default Inventory;