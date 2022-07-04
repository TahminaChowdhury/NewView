import React from 'react';
import './AllRooms.css';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BookingForm from '../../RoomReservation/BookingForm/BookingForm';
import { useDispatch, useSelector } from 'react-redux';
import { getRooms } from '../../../../redux/Rooms/roomActions';


const AllRooms = () => {
  const [visibleRooms, setVisibleRooms] = useState(2);
  const dispatch = useDispatch();
  const roomsData = useSelector((state) => state.room);
  const { loading, rooms, error } = roomsData;

  useEffect(() => {
    dispatch(getRooms());
  }, [dispatch]);
  

 

  const showMoreRooms = () => {
    setVisibleRooms((preValue) => preValue + 2);
  };
  return (
    <>
      <div className="row my-5">
        <div className="col-sm-12 col-md-12">
          <Container>
            <div className="row">
              <div className="col-sm-12 col-md-8">
                <div>
                  {rooms.slice(0, visibleRooms).map((singleRoom) => {
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
