import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';
import './Inventory.css'

const Inventory = () => {
  const {serviceId} = useParams();
  const [service, setService] = useInventory(serviceId);
  const [user, setUser] = useState({})

  const handleQuantityUpdate = event =>{
    event.preventDefault();
    const previousQuantity = service.quantity;
     const quantity =  event.target.quantity.value;
     const newQuantity = parseInt(previousQuantity)  + parseInt(quantity);
     console.log(newQuantity)
     const updateQuantity = {quantity};
     const url = `https://serene-sierra-89525.herokuapp.com/product/${serviceId}`;
     fetch(url, {
       method: 'PUT',
       headers: {
         'content-type': 'application/json'
       },
       body: JSON.stringify(updateQuantity)
     })
     .then(res => res.json())
     .then(result =>{
       console.log(result);
       alert('quantity added successfully')
       event.target.reset();
     })
   };
    
  const handleDeliver = service =>{
    const proceed = window.confirm('Are you want to delivered this product?');
    if(proceed && service >= 1){
      const newQuantity = Number(service.quantity) -1;
      const newItems = {...service, quantity: newQuantity}
      setService(newItems)
      console.log(newQuantity)
      
      const url = `https://serene-sierra-89525.herokuapp.com/product/${serviceId}`;
      fetch(url, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({newItems})
      })
      .then(res => res.json())
      .then(result =>{
        setService(newItems)
        console.log(result);
        // alert('quantity added successfully')
      })
    }
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
        <button onClick={ () =>handleDeliver(service)} className='btn-deliver'>Delivered</button>
          <br />
        <form onSubmit={handleQuantityUpdate}>
        <input name="quantity"  className='' type="text" />
        <input className='btn btn-primary' type="submit" value="updateQuantity" />
        </form>
      </div>
    </div>
  );
};

export default Inventory;