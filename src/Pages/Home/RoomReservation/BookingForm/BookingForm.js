import React from 'react';
import './BookingForm.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const BookingForm = (props) => {
  const { name, img, price } = props.roomDetails;
  const { register, handleSubmit } = useForm();
  const [bookingSuccessful, setBookingSuccessful] = useState(true);

  const onSubmit = (data) => {
    data.name = name;
    data.img = img;
    data.price = price;

    fetch('https://pacific-sea-24561.herokuapp.com/bookings', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === 'true') {
          setBookingSuccessful(true);
        }
      });
  };

  return (
    <div>
      <div className="booking-form p-4">
        <h4 className="text-center">Book Your Room </h4>
        <form onSubmit={handleSubmit(onSubmit)} className="text-start mx-2">
          <p className="mt-4">
            <label>
              Check-in-Date
              <br />
              <span>
                <input
                  type="date"
                  {...register('checkInDate')}
                  className="input-field"
                />
              </span>
            </label>
          </p>
          <p>
            <label>
              Check-out-Date
              <br />
              <span>
                <input
                  type="date"
                  {...register('checkOutDate')}
                  className="input-field"
                />
              </span>
            </label>
          </p>
          <p>
            <label>
              Rooms
              <br />
              <span>
                <select {...register('room')} className="room-filed">
                  <option value="1 Room" selected>
                    1 Room
                  </option>
                  <option value="2 Room">2 Room</option>
                  <option value="3 Room">3 Room</option>
                </select>
              </span>
            </label>
          </p>
          <span className="me-4">
            <label>
              Adults
              <br />
              <span>
                <select {...register('adults')} className="option-field">
                  <option value="1 Adults" selected>
                    1 Adults
                  </option>
                  <option value="2 Adults">2 Adults</option>
                  <option value="3 Adults">3 Adults</option>
                </select>
              </span>
            </label>
          </span>
          <span>
            <label>
              Children
              <br />
              <span>
                <select {...register('children')} className="option-field">
                  <option value="0 Children" selected>
                    0 Children
                  </option>
                  <option value="1 Children">1 Children</option>
                  <option value="2 Children">2 Children</option>
                  <option value="3 Children">3 Children</option>
                </select>
              </span>
            </label>
          </span>

          {/* Total price */}
          <div className="mt-4">
            <h4>Your price</h4>
            <h5>$ {price} / per room</h5>
          </div>
          <button type="submit" className="signIn-btn mt-4 px-3 py-2">
            BOOK NOW
          </button>
          {/* {bookingSuccessful ? (
            <p className="mt-2 text-success">
              You successfully added a room reservation!
            </p>
          ) : (
            ''
          )} */}
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
