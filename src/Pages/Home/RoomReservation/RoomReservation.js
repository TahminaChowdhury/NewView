import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import BookingForm from './BookingForm/BookingForm';
import Calender from './Calender/Calender';

import './RoomReservation.css'

const RoomReservation = () => {
    const [value, onChange] = useState(new Date());
    return (
        <Container>
            <div className='row'>
                <div className='col-sm-12 col-md-8 col-lg-8'>
                    <Calender value={value} onChange={onChange}></Calender>
                </div>
                <div className='col-sm-12 col-md-4 col-lg-4'>
                    <BookingForm value={value}></BookingForm>
                </div>
            </div>
        </Container>
    );
};

export default RoomReservation;