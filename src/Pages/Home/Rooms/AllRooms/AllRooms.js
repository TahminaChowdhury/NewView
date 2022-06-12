import React from 'react';
import './AllRooms.css';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BookingForm from '../../RoomReservation/BookingForm/BookingForm';

const AllRooms = () => {
  const [allRooms, setAllRooms] = useState([]);

  useEffect(() => {
    fetch('https://pacific-sea-24561.herokuapp.com/rooms')
      .then((res) => res.json())
      .then((data) => setAllRooms(data));
  }, []);
  return (
    <Container className="my-5 allrooms-container">
      <div className="row">
        <div className="col-sm-12 col-md-8">
          <div>
            {allRooms.map((singleRoom) => {
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
                      <div className="col-sm-12 col-md-5 aminities">
                        
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-sm-12 col-md-4 bookingform-section">
          <div className="bookingfrom">
            <BookingForm></BookingForm>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AllRooms;
