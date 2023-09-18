import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import "./BookingForm.css"

const BookingForm = ({ addEvent }) => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');

  const handleAddEvent = () => {
    if (eventName && eventDate) {
      const newEvent = {
        title: eventName,
        start: new Date(eventDate),
      };
      console.log(eventDate,"ssws")
      addEvent(newEvent);
      setEventName('');
      setEventDate('');
    }
  };

  return (
    <div className='form'>
      <h2>Booking Form</h2>
      <Form>
        <Form.Group controlId="eventName">
          <Form.Label>Event Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter event name"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="eventDate">
          <Form.Label>Event Date</Form.Label>
          <Form.Control
            type="datetime-local"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
          />
        </Form.Group>
        <Button className="button" variant="primary" onClick={handleAddEvent}>
          Add Event
        </Button>
      </Form>
    </div>
  );
};

export default BookingForm;
