import React, { useState } from 'react';
import "./Booking.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Calendar from './Calendar';
import BookingForm from './BookingForm';
import { useSelector } from 'react-redux';

function Booking() {
  const [events, setEvents] = useState([]);
  const userDetails = useSelector((state)=>state.user.user)
  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const handleEventClick = (eventInfo) => {
    if (window.confirm(`Delete event '${eventInfo.event.title}'?`)) {
      const updatedEvents = events.filter(
        (event) => event.start.getTime() !== eventInfo.event.start.getTime()
      );
      setEvents(updatedEvents); 
    }
  };

  return (
    <div className="App">
    <div className="inner-Details"> 
    <h5>{userDetails.name}</h5>
    <h5>{userDetails.email}</h5>
    <h5>{userDetails.number}</h5>
    </div>
      <h1>Weekly Calendar with Booking</h1>
      <BookingForm addEvent={addEvent} />
      <Calendar events={events} handleEventClick={handleEventClick} />
      
    </div>
  );
}

export default Booking;
