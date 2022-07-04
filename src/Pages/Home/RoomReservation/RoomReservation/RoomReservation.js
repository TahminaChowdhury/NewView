import React from 'react';
import BookingForm from '../BookingForm/BookingForm';
import Calender from '../Calender/Calender';

import './RoomReservation.css';

const RoomReservation = (props) => {
  const { _id, name, img, price, availableRoom } = props.room;

  return (
    <div>
      <div className="row my-5">
        <div className="col-sm-12 col-md-8 col-lg-8">
          <h3 className="mb-5">Availability</h3>
          <Calender></Calender>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4">
          <BookingForm
            key={_id}
            id={_id}
            name={name}
            img={img}
            price={price}
            availableRoom={availableRoom}
          ></BookingForm>
        </div>
      </div>
    </div>
  );
};

export default RoomReservation;
