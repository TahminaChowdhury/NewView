import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getRoomDetails } from '../../../../redux/Rooms/roomActions';
import RoomReservation from '../../RoomReservation/RoomReservation/RoomReservation';
import './RoomDetails.css';

const RoomDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const roomDetailsData = useSelector((state) => state.roomDetails);
  const { room } = roomDetailsData;
  const { img, name, price, description} = room;


  useEffect(() => {
    dispatch(getRoomDetails(id));
  }, [dispatch]);

  return (
    <>
      <Container className="my-5">
        <div className="row">
          <div className="col-12">
            <div className="room-img">
              <img src={img} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="col-12">
            <div>
              <div>
                <h5 className="my-4">$ {price} Per Night</h5>
                <h1>{name}</h1>
                <p className="my-4">{description}</p>
              </div>
              <hr />
              <div className="aminities">
                <h3 className="my-5">Amenities</h3>
                <div></div>
              </div>
              <hr />
              <RoomReservation room={room}></RoomReservation>
            </div>
          </div>

          {/* <div className="col-12">
            <div className="row">
              <h3 className="my-5">Related Rooms</h3>
              {
                                    rooms.map(roomsData => <RelatedRooms key={roomsData._id} roomsData={roomsData}></RelatedRooms>)
                                } 
            </div>
          </div> */}
        </div>
      </Container>
    </>
  );
};

export default RoomDetails;
