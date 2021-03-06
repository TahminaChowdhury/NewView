import React from 'react';
import { Link } from 'react-router-dom';
import './Room.css';

const Room = ({ room }) => {
  const { _id, name, description, size, price, accomodation, img } = room;
  return (
    <div className="card my-5 mx-2">
      <div className="card-img">
        <img src={img} alt="" className="img-fluid" />
      </div>
      <div className="card-details mx-4 mt-3">
        <div className="d-flex justify-content-between">
          <h4>{name}</h4>
          <h4 className="price">$ {price}</h4>
        </div>
        <p className='mt-4'>
          {size}m2 / {accomodation}
        </p>
        <p>{description.slice(0, 100)}...</p>
        <Link
          to={`/roomdetails/${_id}`}
          className="details-btn"
          style={{ color: '#01937C' }}
        >
          ROOM DETAILS +
        </Link>
      </div>
    </div>
  );
};

export default Room;
