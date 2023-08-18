

import React, {useState, useEffect} from 'react';
import HeroLogo from '../../assets/hero-logo.png'; 
import Header from '../Header/Header';
import './BookingPage.css';
import BookingForm from './BookingForm'

const BookingPage = () => {
    const title = "Little Lemon";
    const description = "Welcome and we are excited to your next dining adventure with us here at Little Leomon";
    const subtitle = "Chicago"
    const defaultDate = new Date().toJSON().slice(0,10);
    const [date, setDate] = useState(defaultDate);
    const [guests, setGuests] = useState(0);
    const [occasion, setOccasion] = useState('Birthday');
    const [time, setTime] = useState();
    const [availableTimes, setAvailableTimes] = useState(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
      const fetchData = () => { 
        const opts = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'cors': 'no-cors'
            },
            body: JSON.stringify({
              date
            })
        }
        const apiURL = 'https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js'
        fetch(apiURL, opts) 
          .then((response) => response.json()) 
          .then(jsonData => {
            console.log(jsonData);
            setAvailableTimes(jsonData)}) 
          .catch((error) => console.log(error)); 
      }; 
      
    useEffect(()=>{
        fetchData();
    }, [])
    return (
        <>
                <Header title={title} description={description} image={HeroLogo} subtitle={subtitle} showButton={false} />
        <div className='booking-container'>
        <h2>Reserve Now</h2>
        <BookingForm 
        date={date}
        guests={guests}
        occasion={occasion}
        time={time}
        availableTimes={availableTimes}
        setDate={setDate}
        setGuests={setGuests}
        setOccasion={setOccasion}
        setTime={setTime}
        />
    </div></>
    )
}

export default BookingPage;