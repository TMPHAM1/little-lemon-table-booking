import React from 'react';
import Nav from './components/Nav';
import HomePage from './components/HomePage/HomePage';
import {Routes, Route} from 'react-router-dom'
import './App.css';

function App() {
  console.log('APP LOADED')
  return (
    <>
    <Nav />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/booking" element={<div>About Page To be Implmented</div>} />
       </Routes>
    </>
  );
}

export default App;
