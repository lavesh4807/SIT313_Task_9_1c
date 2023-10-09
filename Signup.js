import React, { useState } from 'react';
import { auth } from './FireBase'; 
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setConfirmPassword('');
      alert("Passwords do not match");
      return;
    }
    
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('User signed up successfully!');
      navigate("/login");
    } catch (error) {
      console.error('Signup Error:', error.message);
    }
  };

  return (
    <form className='signup-container'>
      <div className='label'>Name </div>
      <input type="text" className='input-field' placeholder='Enter your name'/>
      <div className='label'>Email: </div>
      <input type="email" className='input-field' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your Email'/>
      <div className='label'> Password: </div>
      <input type="password" className='input-field' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter password'/>
      <div className='label'> Confirm Password: </div>
      <input type="password" className='input-field' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Re-enter your password'/>
      <button className='signup-button' type="submit" onClick={handleSignup}>Sign Up</button>
    </form>
  );
}

export default Signup;
