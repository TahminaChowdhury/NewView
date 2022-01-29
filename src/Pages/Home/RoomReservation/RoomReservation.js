import React from 'react';
import BookingForm from './BookingForm/BookingForm';
import Calender from './Calender/Calender';

import './RoomReservation.css'

const RoomReservation = () => {
  
    return (
        <div>
            <div className='row my-5'>
                <div className='col-sm-12 col-md-8 col-lg-8'>
                    <h3 className='mb-5'>Availability</h3>
                    <Calender></Calender>
                </div>
                <div className='col-sm-12 col-md-4 col-lg-4'>
                    <BookingForm></BookingForm>
                </div>
            </div>
        </div>
    );
};

export default RoomReservation;