import React, { useState }  from "react";
import './App.css';
import Navbar from './components/SidebarData/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
import Home from './pages/Home';
import Log from './components/Login/Login';

function openConecction(){
  return new WebSocket('ws://localhost:3000/cable')
}

function App() {
  const storedLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const [isLoggedIn, setIsLoggedIn] = useState(storedLoggedIn);

  return (
    <Router>
      {isLoggedIn ? (
        <>
          <Navbar setIsLoggedIn={setIsLoggedIn}/>
          <Routes>
            <Route path="/" exact element={<Home />} />
          </Routes>
        </>
      ) : (
        <>
          <Navigate to="/login" />
          <Routes>
            <Route path="/login" exact element={<Log setIsLoggedIn={setIsLoggedIn}/>} />
          </Routes>
        </>
      )}
    </Router>
  );
    
}



export default App;