import React from 'react';
import './Cart.css';
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../../Hook/useAuth';
import { Link } from 'react-router-dom';
import { TiDelete } from 'react-icons/ti';

const Cart = () => {
  const { user } = useAuth();
  const [allBookings, setAllBookings] = useState([]);
  const [isDelete, setIsDelete] = useState(false);

  useEffect(() => {
    fetch(`https://pacific-sea-24561.herokuapp.com/bookings/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setAllBookings(data));
  }, [isDelete]);

  const handleDeleteBooking = (id) => {
    fetch(`https://pacific-sea-24561.herokuapp.com/bookings/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("Are you sure you want to delete?");
          setIsDelete(true);
        } else {
          setIsDelete(false);
        }
      });
  };

  return (
    <>
      <div className="bg">
        <Container>
          <h2 className="title">Cart</h2>
        </Container>
      </div>
      <Container className="my-5 py-5">
        <Table className="my-5">
          <thead>
            <tr>
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
            const subtotal = price * parseInt(room);
            return (
              <>
                <tbody>
                  <tr>
                    <td>
                      <div key={_id} className="bookings my-3">
                        <div>
                        <button className='delete-btn pe-3' onClick={() => handleDeleteBooking(_id)}>
                        <TiDelete />
                      </button>
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
                    <td>$ {price}</td>
                    <td>{room.slice(0, 1)}</td>
                    <td>$ {subtotal}</td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </Table>
        <div className="mt-5 pt-5">
          <Link to="/checkout">
            <button className="simple-btn px-4 py-3">
              Procced to checkout
            </button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Cart;
