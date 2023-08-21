const BookingForm = (props) => {
    const {date, time, availableTimes, guests, occasion, setDate, setTime, setOccasion, setGuests} = props
    const clearForm = () => {
        const defaultDate = new Date()
        setTime('')
        setOccasion('Birthday')
        setDate(defaultDate)
        setGuests(0);
      };
  
    const handleSubmit = (e) => {
    e.preventDefault();
    console.log('This is updated props', props)
        clearForm();
      };    
  const getIsFormValid = () => {
    // Implement this function
    if (!date || !time|| guests === 0 || !occasion || availableTimes.length === 0) {
      return false
    }
    return true;
  };
    return (
    <form style={{display: 'grid', maxWidth: '200px',  gap: '20px'}}>
        <fieldset>
    <div className="Field">
    <label for="date"><span>Choose Date</span></label>
    <input type="date" onChange={(e)=> {setDate(new Date(e.target.value))}} id="date" value={date.toJSON().slice(0,10)} />
    </div>
    <div className="Field">
    <label for="time"><span>Choose Time</span></label>
    <select id="time"  onChange={(e)=> {setTime(e.target.value)}} value={time}>
        {availableTimes.map(time => {
        return <option>{time}</option>})}
    </select>
    </div>
    <div className="Field">
    <label for="guests"><span>Number of Guests</span></label>
    <input type="number" onChange={(e)=> {setGuests(e.target.value)}}placeholder="1" min="1" max="10" id="guests" value={guests} />
    </div>
    <div className="Field">
    <label for="occasion"><span>Occasion</span></label>
    <select id="occasion" value={occasion}  onChange={(e)=> {setOccasion(e.target.value)}}>
        <option>Birthday</option>
        <option>Anniversary</option>
    </select>
    </div>
    <button  disabled={!getIsFormValid()} type="submit" className='little-lemon-btn' onClick={handleSubmit}> Reserve Now</button>
    </fieldset>
</form>)
}

export default BookingForm;
