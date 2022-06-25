import React from 'react';
import './Cart.css'
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../../Hook/useAuth';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

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
          alert('Are you sure you want to delete?');
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
      <Container className="my-5">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-12 my-5">
                {allBookings.map((bookings) => (
                  <CartItem
                    key={bookings._id}
                    bookings={bookings}
                    handleDeleteBooking={handleDeleteBooking}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="col-12 my-5">
            <div className='cart-totals'>
              <div>
                <h2 className='mb-5'>Cart Totals</h2>
                <p>Items (0)</p>
                <p>Subtotal:</p>
                <p>Total: </p>
              </div>
              <Link to="/checkout">
                <button className="simple-btn px-4 py-3">
                  Procced to checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
