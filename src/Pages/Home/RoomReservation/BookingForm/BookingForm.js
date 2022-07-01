import React from 'react';
import './BookingForm.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import useAuth from '../../../../Hook/useAuth';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BookingForm = (props) => {
  const { user } = useAuth();
  const { name, img, price } = props;
  const { register, handleSubmit } = useForm();
  const [bookingSuccessful, setBookingSuccessful] = useState(false);

  const onSubmit = (data) => {
    data.email = user.email;
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
        } else {
          setBookingSuccessful(false);
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
                  <option value="1" selected>
                    1 Room
                  </option>
                  <option value="2">2 Rooms</option>
                  <option value="3">3 Rooms</option>
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
        </form>
      </div>
      <div className="mt-3">
        {bookingSuccessful ? (
          <div>
            <Alert className="alert" variant="warning">
              You successfully add a room reservation into{' '}
              <Link to="/cart">Cart</Link>.Give it a click.
            </Alert>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default BookingForm;
