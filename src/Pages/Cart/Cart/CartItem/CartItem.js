import React from 'react';
import './CartItem.css';
import { TiDelete } from 'react-icons/ti';

const CartItem = ({ bookings, handleDeleteBooking }) => {
  const { _id, name, img, price, room, adults, checkInDate, checkOutDate } =
    bookings;
  return (
    <div className="bookings my-4 py-3">
      <div>
        <img src={img} className="img-fluid" alt="" />
      </div>

      <div>
        <p className="mb-4 room-name">{name}</p>
        <p className="details">
          Reservation: {checkInDate}, {checkOutDate}
        </p>
        <p className="details">Guests: {adults} </p>
      </div>

      <div>{price}</div>

      <div>
        <select>
          <option value={room} selected>
          {room.slice(0, 1)}
          </option>
          <option value="2 Rooms">2 Rooms</option>
          <option value="3 Rooms">3 Rooms</option>
        </select>
      </div>

      <div>
        <button
          className="delete-btn"
          onClick={() => handleDeleteBooking(_id)}
        >
          <TiDelete />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
