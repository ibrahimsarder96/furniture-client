import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Shared/Loading/Loading';
import useToken from '../../../hooks/useToken';

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const [token] = useToken(user);
  if(token){
    navigate(from, { replace: true });
  }
  if(loading){
    return <Loading></Loading>
  }
  let errorElement
  if(error){
    errorElement = <p className='text-danger'>Error: {error?.message}</p>
  }
  const handleSubmit =async event =>{
    event.preventDefault();
    const email = emailRef.current.value;
    const password =  passwordRef.current.value;
    await signInWithEmailAndPassword(email, password)
    console.log(email, password)
  }
  const navigateRegister = event =>{
    navigate('/register')
  }
  const resetPassword = async() =>{
    const email = emailRef.current.value;
    if(email){
      await sendPasswordResetEmail(email);
      toast('Sent email');
    }
    else{
      toast('please enter your email address')
    }
  }
  return (
    <div className='container mx-auto w-50 mt-5'>
      <h2 className='text-primary text-center mt-2'>Please Login</h2>
      <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
   
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
  
    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    
  </Form.Group>
  <Button className='w-50 d-block mx-auto' variant="primary" type="submit">
    Login
  </Button>
</Form>
{errorElement}
<p className='mt-2'>New to Smart Furniture? <Link to='/register' onClick={navigateRegister} className='text-primary p-auto text-decoration-none'>Please Register</Link></p>
<p className='mt-4'>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button></p>
<SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;