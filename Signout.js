import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './FireBase.js';
import { useNavigate } from 'react-router-dom';
import './Signout.css';
function Signout() {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      
      console.log("You have cl");
      return navigate('/page'); 
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  return (
    <div>
     
      <button className='Signout-Button' onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default Signout;