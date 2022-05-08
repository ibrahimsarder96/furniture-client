import React from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
  const {serviceId} = useParams();
  return (
    <div>
      <h1>Product: {serviceId}</h1>
    </div>
  );
};

export default Inventory;