import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';
import './Inventory.css'

const Inventory = () => {
  const {serviceId} = useParams();
  const [service] = useInventory(serviceId);
  const [user, setUser] = useState({})

  const handleQuantityUpdate = event =>{
    const {quantity, ...rest} = user;
    const addQuantity = event.target.value;
    const newQuantity = {quantity: addQuantity, ...rest};
    console.log(newQuantity)
    setUser(newQuantity);
  }
  return (
    <div className='mt-3 container service-container'>
      <div>
      <img className='img-size' src={service.img} alt="" />
      <h6>id: {service._id}</h6>
      <h6>Product: {service.name}</h6>
      <p>Price: {service.price}</p>
      <p>Quantity: {service.quantity}</p>
      <p>{service.description}</p>
      </div>
      <div>
        <button className='btn-deliver'>Delivered</button>
          <br />
        <input onChange={handleQuantityUpdate} className='' type="text" />
      </div>
    </div>
  );
};

export default Inventory;