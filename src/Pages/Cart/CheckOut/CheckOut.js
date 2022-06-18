import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hook/useAuth';
import './CheckOut.css';
import Table from 'react-bootstrap/Table';

const CheckOut = () => {
  const { user } = useAuth();
  const [allBookings, setAllBookings] = useState([]);
  useEffect(() => {
    fetch(`https://pacific-sea-24561.herokuapp.com/bookings/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setAllBookings(data));
  }, []);

  return (
    <div className="container row">
      {/* Billing details */}
      <div className="col-sm-12 col-md-6"></div>

      {/* Additional Information */}
      <div className="col-sm-12 col-md-6"></div>

      {/* place order */}
      <div>
        <Table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          {allBookings.map((bookings) => {
            const {
              _id,
              name,
              price,
              room,
              checkInDate,
              checkOutDate,
              adults,
            } = bookings;
            const subtotal = price * parseInt(room);
            return (
              <>
                <tbody>
                  <tr>
                    <td>
                      <div key={_id} className="bookings my-3">
                        <div></div>
                        <div className="ms-3">
                          <p className="mb-4 room-name">{name} * {room.slice(0, 1)}</p>
                          <p className="details">
                            Reservation: {checkInDate}, {checkOutDate}
                          </p>
                          <p className="details">Guests: {adults} </p>
                        </div>
                      </div>
                    </td>
                    <td>$ {subtotal}</td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </Table>
      </div>
    </div>
  );
};

export default CheckOut;
