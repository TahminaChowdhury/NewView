import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../Shared/NavBar/NavBar';
import RoomReservation from '../RoomReservation/RoomReservation';
import './RoomDetails.css'
const RoomDetails = () => {
    const { id } = useParams();
    const [roomDetails, setRoomDetails] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/rooms/${id}`)
            .then(res => res.json())
            .then(data => setRoomDetails(data))
    }, [id])
    const { img, name, price, description, aminities } = roomDetails;

    return (
        <>
            <NavBar></NavBar>
            {/* <div className='row roomDetails-container text-white'>
                <h1 className='room-name my-5'>{name}</h1>
                <div className='col-sm-12 col-md-7 col-lg-7'>
                    <div className='mb-5'>
                    <img src={img} className='img-fluid' alt="" />
                    </div>
                </div>
                <div className='col-sm-12 col-md-5 col-lg-5 text-start'>
                    <div>
                       <p>{description}</p>
                    </div>
                </div>
            </div> */}
            <RoomReservation></RoomReservation>
        </>
    );
};

export default RoomDetails;



