import React from 'react';
import "./Calender.css"
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';


const Calendar = ({ events, handleEventClick }) => {
  return (
    <div className='fullcalender'>
      <FullCalendar 
        plugins={[dayGridPlugin]}
        initialView="dayGridWeek"
        events={events}
        weekends={false} 
        eventClick={handleEventClick}
      />
    </div>
  );
};

export default Calendar;
