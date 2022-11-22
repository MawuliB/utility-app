import './App.css';
import React from 'react';
import TopBar from './TopBar'
import Home from './pages/Home'
import TA from './pages/TA'
import Contact from './pages/Contact'
import Gift from './pages/Gift'
import Basic from './pages/Basic'
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <TopBar />
      <div className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/TA' element={<TA />} />
          <Route path='/gift' element={<Gift />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/basic' element={<> <Home /> <Basic /></>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
