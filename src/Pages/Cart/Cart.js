import React from 'react';
import './Cart.css';
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../Hook/useAuth'

const Cart = () => {

  const {user} = useAuth();

  const [allBookings, setAllBookings] = useState([]);

  useEffect(() => {
    fetch(`https://pacific-sea-24561.herokuapp.com/bookings/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setAllBookings(data));
  }, []);

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th></th>
            <th>Rooms</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Sub-Total</th>
          </tr>
        </thead>
        {allBookings.map((bookings) => {
          const {
            _id,
            name,
            img,
            price,
            room,
            adults,
            checkInDate,
            checkOutDate,
          } = bookings;

          const subTotal = price * parseInt(room);

          return (
            <>
              <tbody>
                <tr>
                  <td></td>
                  <td>
                    <div key={_id} className="bookings my-3">
                      <div></div>
                      <div>
                        <img src={img} alt="" />
                      </div>
                      <div className="ms-3">
                        <p className="mb-4 room-name">{name}</p>
                        <p className="details">
                          Reservation: {checkInDate}, {checkOutDate}
                        </p>
                        <p className="details">Guests: {adults} </p>
                      </div>
                    </div>
                  </td>
                  <td>&{price}</td>
                  <td>{room.slice(0, 1)}</td>
                  <td>{subTotal}</td>
                </tr>
              </tbody>
            </>
          );
        })}
      </Table>
    </Container>
  );
};

export default Cart;
