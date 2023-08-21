import React from 'react';
import Nav from './components/Nav';
import HomePage from './components/HomePage/HomePage';
import BookingPage from './components/BookingPage/BookingPage'
import {Routes, Route} from 'react-router-dom'
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Nav />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/booking" element={<BookingPage />} />
       </Routes>
       </BrowserRouter>
    </>
  );
}

export default App;
