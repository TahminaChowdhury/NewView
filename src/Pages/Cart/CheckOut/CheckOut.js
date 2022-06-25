import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hook/useAuth';
import './CheckOut.css';
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const CheckOut = () => {
  const { user } = useAuth();
  const [allBookings, setAllBookings] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  // Fetch all bookings data
  useEffect(() => {
    fetch(`https://pacific-sea-24561.herokuapp.com/bookings/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setAllBookings(data));
  }, []);

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
              <div className="col-12 my-5">
                <h3 className="mb-5">Your Reservation</h3>
                <Table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
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
                          <tr>
                            <td>
                              <div key={_id} className="bookings my-3">
                                <div></div>
                                <div className="ms-3">
                                  <p className="mb-4 room-name">
                                    {name} * {room.slice(0, 1)}
                                  </p>
                                  <p className="details">
                                    Reservation: {checkInDate}, {checkOutDate}
                                  </p>
                                  <p className="details">Guests: {adults} </p>
                                </div>
                              </div>
                            </td>
                            <td>$ {subtotal}</td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </Table>
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
