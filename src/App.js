import React from 'react';
import Nav from './components/Nav';
import HomePage from './components/HomePage/HomePage';
import BookingPage from './components/BookingPage/BookingPage'
import {Routes, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <>
    <Nav />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/booking" element={<BookingPage />} />
       </Routes>
    </>
  );
}

export default App;
