import React from 'react';
import './CheckOut.css';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addToCart } from '../../../redux/Cart/cartActions';

const CheckOut = () => {
  const dispatch = useDispatch();
  const booking = useSelector((state) => state.cart);
  const { cartItems } = booking;
  console.log(cartItems);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="bg">
        <Container>
          <h2 className="title">Checkout</h2>
        </Container>
      </div>
      <Container className="my-5">
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              {/* Billing form */}
              <div className="col-12">
                <div className="row billing-form">
                  <div className="col-sm-12 col-md-6">
                    <h2 className="mb-5">Billing Deatils</h2>

                    <div className="mb-4">
                      <label htmlFor="">First name</label>
                      <br />
                      <input
                        type="text"
                        {...register('name', { required: true })}
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
                        required
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
                        required
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
                <div></div>
              </div>
            </div>

            <div className="col-12">
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
      </Container>
    </>
  );
};

export default CheckOut;
