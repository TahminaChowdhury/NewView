import React from 'react';
import './Cart.css';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem/CartItem';
import { addToCart, removeFromCart } from '../../../redux/Cart/cartActions';

const Cart = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  // Item quantity change handler
  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  // Item remove from cart
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  // Cart items count
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  // Cart subtotal count
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

      {/* Cart */}
      <Container className="my-5">
        <div className="row">
          {cartItems.length === 0 ? (
            <div className="text-center my-5 py-5">
              <h3>Your cart is currently empty</h3>
              <div className="my-5">
                <Link to="/allrooms">
                  <button className="simple-btn px-4 py-3">
                    Go to view rooms
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="col-12">
                <div className="row">
                  {cartItems.map((bookings) => (
                    <CartItem
                      key={bookings._id}
                      bookings={bookings}
                      qtyChangeHandler={qtyChangeHandler}
                      removeFromCartHandler={removeFromCartHandler}
                    />
                  ))}
                </div>
              </div>
              {/* Cart Total */}
              <div className="col-12 my-5">
                <div className="cart-totals">
                  <div>
                    <h2 className="mb-5">Cart Totals</h2>
                    <p>Items ({getCartCount()})</p>
                    <p>Subtotal: {getCartSubtotal().toFixed(2)}</p>
                    <p>Total: {getCartSubtotal().toFixed(2)}</p>
                  </div>
                  <div className="mt-5">
                    <Link to="/checkout">
                      <button className="simple-btn px-4 py-3">
                        Procced to checkout
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </Container>
    </>
  );
};

export default Cart;
