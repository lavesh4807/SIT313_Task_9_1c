import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
    <div className='navbar-container'>
      <div className='navbar-brand'>Dev@Deakin</div>
      <input className='search-input' type='text' placeholder='Search' />
      <button className='navbar-button'>Post</button>
      <Link to='/login'>
        <button className='login-button'>Login</button>
      </Link>
      <Link to='/signup'>
        <button className='signup-button'>Sign-Up</button>
      </Link>
      <Link to='/signout'>
        <button className='signup-button'>Sign-Out</button>
      </Link>
    </div>
    </>
    
  );
}

export default Navbar;
