import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import axios from 'axios';
import { toast } from 'react-toastify';
import useServices from '../../hooks/useServices';
import { useParams } from 'react-router-dom';


const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const {serviceId} = useParams();
  const [service] = useServices(serviceId)
  const [user] = useAuthState(auth);
  // const onSubmit = data => console.log(data);
  const onSubmit = data => {
    console.log(data);
    const url = `http://localhost:5000/product`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result =>{
      console.log(result);
    })
  };
    
  return (
    <div className='w-50 mx-auto mt-4'>
      <h2 className='text-center text-primary'>please add item</h2>
        <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
      <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
      <input className='mb-2' placeholder='Price' type="number" {...register ("price")} />
      <input className='mb-2' placeholder='Quantity' type="number" {...register ("quantity")} />
      <input className='mb-2' placeholder='Supplier Name' {...register("firstName", { required: true, maxLength: 20 })} />
      <textarea className='mb-2' placeholder='Description' {...register("description")} />
      <input className='mb-2' placeholder='Photo URL' type="tex" {...register ("img")} />
      <input className='bg-primary text-white' type="submit" value="Add Product" />
        </form>
    </div>
  );
};

export default AddItem;