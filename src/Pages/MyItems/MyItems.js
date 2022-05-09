import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  useEffect( () =>{
    const getOrders = async() =>{
      const email = user?.email;
      const url = `http://localhost:5000/product`;
      try{
        const {data} = await axios.get(url);
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
    </div>
  );
};

export default MyItems;