import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar({ setIsLoggedIn }) {
  const [sidebar, setSidebar] = useState(false);


  const navigate = useNavigate();

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <button className=" signup" onClick={() => { setIsLoggedIn(false); sessionStorage.setItem('isLoggedIn', 'false'); navigate('/login'); }}>
            Cerrar Sesión
          </button>        
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;