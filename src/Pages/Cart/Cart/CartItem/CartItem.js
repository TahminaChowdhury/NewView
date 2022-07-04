import React from 'react';
import './CartItem.css';
import { TiDelete } from 'react-icons/ti';

const CartItem = ({ bookings, qtyChangeHandler, removeFromCartHandler }) => {
  const { id, name, img, price, qty, availableRoom } = bookings;

  return (
    <div className="bookings my-4 py-3">
      <div>
        <img src={img} className="img-fluid" alt="" />
      </div>

      <div>
        <p className="mb-4 room-name">{name}</p>
        {/* <p className="details">
          Reservation: {checkInDate}, {checkOutDate}
        </p>
        <p className="details">Guests: {adults} </p> */}
      </div>

      <div>{price}</div>

      <div>
        <select
          value={qty}
          onChange={(e) => qtyChangeHandler(id, e.target.value)}
        >
          {[...Array(availableRoom).keys()].map((x) => (
            <option key={x + 1} value={x + 1}>
              {x + 1} Rooms
            </option>
          ))}
        </select>
      </div>

      <div>
        <button className="delete-btn" onClick={() => removeFromCartHandler(id)}>
          <TiDelete />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
