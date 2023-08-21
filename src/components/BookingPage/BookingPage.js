

import React, {useState, useEffect} from 'react';
import HeroLogo from '../../assets/hero-logo.png'; 
import Header from '../Header/Header';
import './BookingPage.css';
import BookingForm from './BookingForm'
import {fetchAPI} from '../../helpers'

const BookingPage = () => {
    const title = "Little Lemon";
    const description = "Welcome and we are excited to your next dining adventure with us here at Little Leomon";
    const subtitle = "Chicago"
    const defaultDate = new Date();
    const [date, setDate] = useState(defaultDate);
    const [guests, setGuests] = useState(0);
    const [occasion, setOccasion] = useState('Birthday');
    const [time, setTime] = useState();
    const [availableTimes, setAvailableTimes] = useState(["None Available"]);
      
    

    useEffect(()=>{
      //had to mcok this since get call was not working properly
      const newAvailableTimes = fetchAPI(date);
        setAvailableTimes(newAvailableTimes);
        setTime(newAvailableTimes[0]);
        
    }, [date])
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