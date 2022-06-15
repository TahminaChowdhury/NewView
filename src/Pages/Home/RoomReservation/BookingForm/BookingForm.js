import React from 'react';
import './BookingForm.css';
import { useForm } from 'react-hook-form';

const BookingForm = ({ roomDetails }) => {
    const { price } = roomDetails;
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    data.price = price
    fetch('http://localhost:5000/bookings', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
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
                  {...register('check-in-date')}
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
                  {...register('check-out-date')}
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
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
