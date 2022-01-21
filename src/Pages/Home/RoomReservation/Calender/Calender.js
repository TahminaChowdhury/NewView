import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const Calender = ({value, onChange}) => {
    
    return (
        <div>
            <Calendar
                onChange={onChange}
                value={value}
            />
        </div>
    );
};

export default Calender;