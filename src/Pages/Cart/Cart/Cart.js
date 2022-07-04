import React from 'react';
import './Cart.css';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem/CartItem';
import { addToCart, removeFromCart } from '../../../redux/Cart/cartActions';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { cartItems } = cart;

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubtotal = () => {
    return cartItems.reduce((price, item) => item.price * item.qty + price, 0);
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
                {cartItems.length === 0 ? (
                  <h2>
                    Your cart is empty <Link to="/allrooms">Go back</Link>
                  </h2>
                ) : (
                  cartItems.map((bookings) => (
                    <CartItem
                      key={bookings._id}
                      bookings={bookings}
                      qtyChangeHandler={qtyChangeHandler}
                      removeFromCartHandler={removeFromCartHandler}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
          <div className="col-12 my-5">
            <div className="cart-totals">
              <div>
                <h2 className="mb-5">Cart Totals</h2>
                <p>Items ({getCartCount()})</p>
                <p>Subtotal: {getCartSubtotal().toFixed(2)}</p>
                <p>Total: {getCartSubtotal().toFixed(2)}</p>
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
