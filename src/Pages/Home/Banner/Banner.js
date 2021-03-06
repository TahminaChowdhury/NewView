import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './Banner.css';
import { useForm } from 'react-hook-form';
import img1 from '../../../images/Beedroom-1.jpg';
import img2 from '../../../images/Beedroom-2.jpg';
import img3 from '../../../images/Beedroom-4.jpg';
import BookingForm from '../RoomReservation/BookingForm/BookingForm';
import { Link } from 'react-router-dom';

const Banner = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="mt-5">
      <div className="banner">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 img-fluid"
              src={img1}
              alt="First slide"
            />
            {/* <Carousel.Caption className="carousel-caption">
              <h2>Make</h2>
              <h2>yourself at</h2>
              <h2>home</h2>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 img-fluid"
              src={img2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              src={img3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      
      {/* Booking form */}
      <div className="mx-5">
        <div className="">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row form">
              <div className="col-sm-12 col-md-2 col-lg-2">
                <label>
                  Check-in-Date
                  <br />
                  <span>
                    <input
                      type="date"
                      {...register('check-in-date')}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </span>
                </label>
              </div>
              <div className="col-sm-12 col-md-2 col-lg-2">
                <label>
                  Check-out-Date
                  <br />
                  <span>
                    <input
                      type="date"
                      {...register('check-out-date')}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </span>
                </label>
              </div>
              <div className="col-sm-12 col-md-2 col-lg-2">
                <label>
                  Rooms
                  <br />
                  <span>
                    <select
                      {...register('room')}
                      value="1 Room"
                      selected
                      className="room-option"
                    >
                      <option>1 Room</option>
                      <option value="2 Room">2 Room</option>
                      <option value="3 Room">3 Room</option>
                    </select>
                  </span>
                </label>
              </div>
              <div className="col-sm-12 col-md-2 col-lg-2">
                <label>
                  Adults
                  <br />
                  <span>
                    <select {...register('adults')} className="select-field">
                      <option value="1 Adult" selected>
                        1 Adult
                      </option>
                      <option value="2 Adults">2 Adults</option>
                      <option value="3 Adults">3 Adults</option>
                    </select>
                  </span>
                </label>
              </div>
              <div className="col-sm-12 col-md2 col-lg-2">
                <label>
                  Children
                  <br />
                  <span>
                    <select
                      {...register('children')}
                      value="0 Children"
                      selected
                      className="select-field"
                    >
                      <option>0 Children</option>
                      <option value="1 Children">1 Children</option>
                      <option value="2 Children">2 Children</option>
                      <option value="3 Children">3 Children</option>
                    </select>
                  </span>
                </label>
              </div>
              <div className="col-sm-12 col-md-2 col-lg-2 mt-4 pe-4">
                <Link to="/allrooms">
                  <button className="book-now-btn" type="submit">
                    Search
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="bookingform-container">
        <Container className="d-flex justify-content-center mt-5">
          <BookingForm></BookingForm>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
