
import React from 'react';
import './ManageItems.css'
import useServices from '../../hooks/useServices';

const ManageItems = () => {
  const [services , setServices] = useServices();
  const handleDelete = id =>{
    const proceed = window.confirm('are you sure');
    if(proceed){
      const url = `http://localhost:5000/product/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const remaining = services.filter(service =>service._id !== id);
        setServices(remaining);
      })
    }
  }
  return (
    <div>
     
      {
        services.map(service => <div key={service._id}  className="service container">
        <img src={service.img} alt="" />
        <div className='service-info'>
        <h3>name: {service.name}</h3>
        <p>Price: {service.price}</p>
        <p>Quantity: {service.quantity}</p>
        <h6>Suppler Name: {service.supplier}</h6>
        <p>{service.description}</p>
        <button className='btn-delete' onClick={() => handleDelete (service._id)}>Delete</button>
        </div>
        </div>)
      }
    </div>
  );
};

export default ManageItems;