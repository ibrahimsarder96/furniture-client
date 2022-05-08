import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';



const Register = () => {
  const navigate = useNavigate();
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  
  const navigateLogin = () =>{
    navigate('/login')
  }
  if(user){
    navigate('/home')
  }
  const handleRegister = event =>{
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUserWithEmailAndPassword(email, password)
    console.log(name, email, password)
  }
  return (
    <div className='container mx-auto w-50 mt-5'>
      <h2>Please Register</h2>
      <Form onSubmit={handleRegister}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    
    <Form.Control className='mb-2' name="name" type="text" placeholder="Your Name" required/>
   
    <Form.Control className='mb-2' type="email" name="email" placeholder="Enter email" required/>
  
  </Form.Group>

  <Form.Group className="mb-2" controlId="formBasicPassword">
  
    <Form.Control  type="password" name="password" placeholder="Password" required/>
  </Form.Group>
  <Form.Group className="mb-2" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
    <input className='mx-auto w-50 bg-primary' type="submit" value="Register" />
</Form>
<p className='mt-2'>Already have an account? <Link to='/login' onClick={navigateLogin} className='text-primary p-auto text-decoration-none'>Please Login</Link></p>
<SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;