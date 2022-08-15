import React from 'react';
import './CheckOut.css';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { postBooking } from '../../../redux/Bookings/bookingAction';
import { Link, useNavigate } from 'react-router-dom';
import { resetCart } from '../../../redux/Cart/cartActions';
import { useState } from 'react';

const CheckOut = () => {
  const dispatch = useDispatch();
  const booking = useSelector((state) => state.cart);
  const isResponse = useSelector((state) => state.postBookings);

  const { cartItems } = booking;

  // Cart subtotal count
  const getCartSubtotal = () => {
    return cartItems.reduce((price, item) => item.price * item.qty + price, 0);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = (data) => {
    const bookingInfo = cartItems.map((item) => {
      data.roomName = item.name;
      data.image = item.img;
      data.price = item.price;
      data.roomQuantity = item.room;
      data.checkInDate = item.checkInDate;
      data.checkOutDate = item.checkOutDate;
      data.adults = item.adults;
      data.children = item.children;
    });
    dispatch(postBooking(data));
    if (isResponse) {
      alert('You booking is confiremd');
      dispatch(resetCart());
      navigate('/home');
    }
  };

  // Radio input handler
  const [status, setStatus] = useState(0);
  const radioHandler = (status) => {
    setStatus(status);
  };

  return (
    <>
      <div className="bg">
        <Container>
          <h2 className="title">Checkout</h2>
        </Container>
      </div>
      <Container className="my-5">
        {cartItems.length === 0 ? (
          <div className="text-center my-5 py-5">
            <h3>Please make a reservation</h3>
            <div className="my-5">
              <Link to="/allrooms">
                <button className="simple-btn px-4 py-3">
                  Go to view rooms
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                {/* Billing form */}
                <div className="col-12">
                  <div className="row billing-form">
                    <div className="col-sm-12 col-md-6">
                      <h2 className="mb-5">Billing Deatils</h2>
                      <div className="mb-4">
                        <label htmlFor="">Full name</label>
                        <br />
                        <input
                          type="text"
                          {...register('name', {
                            required: 'This field is required',
                          })}
                        />
                        {errors.exampleRequired && (
                          <span>This field is required</span>
                        )}
                      </div>

                      <div className="mb-4">
                        <label htmlFor="">Company name (optional)</label>
                        <br />
                        <input
                          type="text"
                          {...register('companyname', { required: false })}
                        />
                        {errors.exampleRequired && (
                          <span>This field is required</span>
                        )}
                      </div>

                      <div className="mb-4">
                        <label htmlFor="">Country / Region</label>
                        <br />
                        <input
                          type="text"
                          {...register('country', { required: true })}
                        />
                        {errors.exampleRequired && (
                          <span>This field is required</span>
                        )}
                      </div>

                      <div type="text" className="mb-4">
                        <label htmlFor="">Address</label>
                        <br />
                        <input {...register('address', { required: true })} />
                        {errors.exampleRequired && (
                          <span>This field is required</span>
                        )}
                      </div>

                      <div type="number" className="mb-4">
                        <label htmlFor="">Postcode / Zip</label>
                        <br />
                        <input {...register('postcode', { required: true })} />
                        {errors.exampleRequired && (
                          <span>This field is required</span>
                        )}
                      </div>

                      <div className="mb-4">
                        <label htmlFor="">Phone</label>
                        <br />
                        <input
                          type="number"
                          {...register('phone', { required: true })}
                        />
                        {errors.exampleRequired && (
                          <span>This field is required</span>
                        )}
                      </div>

                      <div className="mb-4">
                        <label htmlFor="">Email address</label>
                        <br />
                        <input
                          type="email"
                          {...register('email', { required: true })}
                        />
                        {errors.exampleRequired && (
                          <span>This field is required</span>
                        )}
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div className="col-sm-12 col-md-6">
                      <h2 className="mb-5">Additional Information</h2>
                      <div className="mb-4">
                        <label htmlFor="">Reservation notes (optional)</label>
                        <br />
                        <input
                          type="text"
                          {...register('additionalInfo', { required: false })}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Reservetion info */}
                <div className="col-12 my-5">
                  <h3 className="mb-5">Your Reservation</h3>
                  <div className="row item-border">
                    <div className="col-6">
                      {cartItems.map((item) => {
                        return (
                          <div key={item.id}>
                            <h4>
                              {item.name} * {item.qty}
                            </h4>
                            <p className="details">
                              Reservation: {item.checkInDate},{' '}
                              {item.checkOutDate}
                            </p>
                            <p className="details">Guests: {item.adults} </p>
                            <p className="details mb-3">
                              Price: $ {item.price} / Per room
                            </p>
                          </div>
                        );
                      })}
                    </div>

                    {/* Total amount */}
                    <div className="col-6">
                      <div>
                        <h4>Subtotal</h4>
                        <p className="details">
                          $ {getCartSubtotal().toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="row item-border">
                  <div className="col-6">
                    <h4>Total</h4>
                  </div>
                  <div className="col-6">
                    <p className="details">$ {getCartSubtotal().toFixed(2)}</p>
                  </div>
                </div>

                {/* Payment Gateway */}
                <div className="col-12 my-5 payment-gateway">
                  {/* Bank Transfer */}
                  <div className="mb-5">
                    <input
                      type="radio"
                      name="payment_method"
                      checked={status === 1}
                      onClick={(e) => radioHandler(1)}
                    />{' '}
                    <label htmlFor="">Direct Bank transfer</label>
                    <div aria-hidden={status !== 1 ? true : false}></div>
                  </div>

                  {/* Cahs On Delivery */}
                  <div aria-hidden={status !== 1 ? false : true}>
                    <input
                      type="radio"
                      name="payment_method"
                      checked={status === 2}
                      onClick={(e) => radioHandler(2)}
                    />{' '}
                    <label htmlFor="">Cahs on Delivery</label>
                    <div aria-hidden={status !== 2 ? true : false}>
                      <p className="ps-4 py-3">Pay with cash upon delivery.</p>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-5">
                  <input
                    type="submit"
                    className="simple-btn px-4 py-3"
                    value="Confrim Reservation"
                  />
                </div>
              </div>
            </form>
          </div>
        )}
      </Container>
    </>
  );
};

export default CheckOut;
