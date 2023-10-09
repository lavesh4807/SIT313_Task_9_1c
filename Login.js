import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from './FireBase';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("You have logged in");
      return navigate("/");
    } catch (error) {
      console.log(error);
      setError("Missing fields or invalid email/password");
    }
  };

  return (
    <div>
      <form className='login-container' onSubmit={handleSubmit}>
        <label className='label'> Email </label>
        <input type='email' className='input-field' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label className='label' > Password </label>
        <input type='password' className='input-field' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type='submit' className='login-button'>Login</button>
        {error && <p className='error-message'>{error}</p>}
      </form>
    </div>
  );
}

export default Login;
