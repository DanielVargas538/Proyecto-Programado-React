import React, { useState }  from "react";
import './App.css';
import Navbar from './components/SidebarData/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Home from './pages/Home';
import Log from './pages/Log';

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/login' exact element={<Log />} />
          <Route path="/" exact element={<Home />}/>
        </Routes>
      </Router>
    </div>
  );
}


export default App;