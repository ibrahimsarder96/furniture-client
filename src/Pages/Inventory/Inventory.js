import React from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
  const {inventoryId} = useParams();
  return (
    <div>
      <h1>Product: {inventoryId}</h1>
    </div>
  );
};

export default Inventory;