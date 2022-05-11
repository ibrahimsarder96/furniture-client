import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';
import useServices from '../../hooks/useServices';

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const [service] = useServices()
  const navigate = useNavigate();
  useEffect( () =>{
    const getOrders = async() =>{
      const email = user?.email;
      const url = `https://serene-sierra-89525.herokuapp.com/product?email=${email}`;
      try{
        const {data} = await axiosPrivate.get(url);
        setOrders(data);
      }
      catch (error){
        console.log(error.message);
        if(error.response.status === 401 || error.response.status === 403){
          signOut(auth);
          navigate('/login')
        }
      }
    }
    getOrders();
  },[user])
  return (
    <div>
      <h2>my items {orders.length}</h2>
      {
        orders.map(order => <div key={order._id}>{order.name}</div>)
      }
    </div>
  );
};

export default MyItems;