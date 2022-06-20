import React, { useState, useEffect } from 'react';
import './Rooms.css';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import Room from './Room/Room';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch('https://pacific-sea-24561.herokuapp.com/rooms')
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next activeSlide" onClick={onClick}>
        <AiOutlineRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow previous" onClick={onClick}>
        <AiOutlineLeft />
      </div>
    );
  };
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
            <div>
              <h1>Our Rooms</h1>
            </div>
            <div>
              <Link to="/allrooms">
                <button className="view-room-btn">View All Rooms</button>
              </Link>
            </div>
          </div>

          <Slider {...settings}>
            {rooms.map((room) => (
              <Room key={room._id} room={room}></Room>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
