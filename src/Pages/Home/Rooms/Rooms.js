import React, { useEffect } from 'react';
import './Rooms.css';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { useSelector, useDispatch } from 'react-redux';
import { getRooms } from '../../../redux/Rooms/roomActions';
import { Spinner } from 'react-bootstrap';
import Room from './Room/Room';

const Rooms = () => {
  const dispatch = useDispatch();
  const roomsData = useSelector((state) => state.room);
  const { loading, rooms, error } = roomsData;

  useEffect(() => {
    dispatch(getRooms());
  }, [dispatch]);

  // const NextArrow = ({ onClick }) => {
  //   return (
  //     <div className="arrow next activeSlide" onClick={onClick}>
  //       <AiOutlineRight />
  //     </div>
  //   );
  // };

  // const PrevArrow = ({ onClick }) => {
  //   return (
  //     <div className="arrow previous" onClick={onClick}>
  //       <AiOutlineLeft />
  //     </div>
  //   );
  // };

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-5 rooms-section">
      <div className="my-5">
        <div className="row">
          <div className="d-flex justify-content-between my-5">
            <div className="d-flex align-items-center">
              <span className="divider "></span>
              <h1 className="ps-4 fw-bold">Our Rooms</h1>
            </div>
            <div>
              <Link to="/allrooms">
                <button className="regular-btn">View All Rooms</button>
              </Link>
            </div>
          </div>
          <Slider {...settings}>
            {loading ? (
              <Spinner animation="grow" />
            ) : error ? (
              <h2>{error}</h2>
            ) : (
              rooms.data.map((room) => <Room room={room} />)
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
