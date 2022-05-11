import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';



const Register = () => {
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
  const [token] = useToken(user);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth, {sendEmailVerification: true});
  
  const navigateLogin = () =>{
    navigate('/login')
  }
  if(loading || updating){
    return <Loading></Loading>
  }
  if(token){
    console.log(user)
    navigate(from, { replace: true });
  }
  const handleRegister =async (event) =>{
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    if(agree){
      createUserWithEmailAndPassword(email, password)
      await updateProfile({ displayName: name});
      alert('Updated profile');
      // 
    }
  }
  return (
    <div className='container mx-auto w-50 mt-5'>
      <h2 className='text-primary text-center mt-2'>Please Register</h2>
      <Form onSubmit={handleRegister}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    
    <Form.Control className='mb-2' name="name" type="text" placeholder="Your Name" required/>
   
    <Form.Control className='mb-2' type="email" name="email" placeholder="Enter email" required/>
  
  </Form.Group>

  <Form.Group className="mb-2" controlId="formBasicPassword">
  
    <Form.Control  type="password" name="password" placeholder="Password" required/>
  </Form.Group>
  <Form.Group className="mb-2" controlId="formBasicCheckbox">
    <Form.Check className={`ps-2 ${agree? "": "text-danger"}`}  onClick={() =>setAgree(!agree)} name="terms" type="checkbox" label="Accept Furniture  Terms and Conditions" />
  </Form.Group>
  <Button
    disabled={!agree}
    className='w-50 d-block mx-auto' variant="primary" type="submit">
    Register
  </Button>
</Form>
<p className='mt-2'>Already have an account? <Link to='/login' onClick={navigateLogin} className='text-primary p-auto text-decoration-none'>Please Login</Link></p>

<SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;