import React from 'react';
import './AllRooms.css';
import Slider from 'react-slick';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BookingForm from '../../RoomReservation/BookingForm/BookingForm';
import img1 from '../../../../images/Beedroom-1.jpg';
import img2 from '../../../../images/Beedroom-2.jpg';
import img3 from '../../../../images/Beedroom-3.jpg';
import img4 from '../../../../images/Beedroom-4.jpg';

const AllRooms = () => {
  const [allRooms, setAllRooms] = useState([]);
  const [visibleRooms, setVisibleRooms] = useState(2);

  useEffect(() => {
    fetch('https://pacific-sea-24561.herokuapp.com/rooms')
      .then((res) => res.json())
      .then((data) => setAllRooms(data));
  }, []);

  const showMoreRooms = () => {
    setVisibleRooms((preValue) => preValue + 2);
  };
  return (
    <>
      <div className="row">
        <div className="col-sm-12 col-md-12"></div>
        <div className="col-sm-12 col-md-12">
          <Container>
            <div className="row">
              <div className="col-sm-12 col-md-8">
                <div>
                  {allRooms.slice(0, visibleRooms).map((singleRoom) => {
                    const { _id, name, img, description } = singleRoom;
                    return (
                      <div key={_id} className="row rooms-container">
                        <div className="col-sm-12 col-md- 12 mb-5">
                          <div>
                            <img src={img} alt="" />
                          </div>
                          <div className="row">
                            <div className="col-sm-12 col-md-7">
                              <h1 className="mt-4">{name}</h1>
                              <p className="my-4">{description}</p>
                              <Link
                                to={`/roomdetails/${_id}`}
                                className="details-btn"
                                style={{ color: '#01937C' }}
                              >
                                ROOM DETAILS +
                              </Link>
                            </div>
                            <div className="col-sm-12 col-md-5 aminities"></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* Load more button */}
                  <div className="text-center">
                    <button onClick={showMoreRooms} className="load-more-btn">
                      Load More
                    </button>
                  </div>
                </div>
              </div>

              {/* Booking form */}

              <div className="col-sm-12 col-md-4">
                <BookingForm></BookingForm>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default AllRooms;
