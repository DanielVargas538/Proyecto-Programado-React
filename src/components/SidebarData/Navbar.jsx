import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar({ setIsLoggedIn }) {

  const navigate = useNavigate();

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <button className='title' onClick={() => { window.location.reload() }}>Ordenes</button>
          <button className=" signup" onClick={() => { setIsLoggedIn(false); sessionStorage.setItem('isLoggedIn', 'false'); navigate('/login'); }}>
            Cerrar Sesión
          </button>        
          
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;