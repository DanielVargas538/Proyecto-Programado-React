import React from 'react';
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
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/login' exact element={<Log />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;