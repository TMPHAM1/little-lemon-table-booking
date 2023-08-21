import React from 'react';
import Nav from './components/Nav';
import HomePage from './components/HomePage/HomePage';
import BookingPage from './components/BookingPage/BookingPage'
import {Routes, Route} from 'react-router-dom'
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const reducer = (state, action) => {
    switch(action.type){
      case "update-date":
        return {...state, date: action.value};
      case "update-times":
        return {...state, availableTimes: action.value};
        case "update-guests":
          return {...date, guests: action.value};
      case "update-occasion": 
      return {...occasion, occasion: action.value};
      case "name":
        return {...state, name:action.value}
    }
  }
  


  const initialState = {
    availableTimes: [],
    date: '',
    guests: 0,
    occasion: 'birthday'
  }
  const [state, dispatch] = useReducer(reducer,initialState);

  return (
    <>
    <BrowserRouter>
    <Nav />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/booking" element={<BookingPage state={state} dispatch={dispatch} />} />
       </Routes>
       </BrowserRouter>
    </>
  );
}

export default App;
