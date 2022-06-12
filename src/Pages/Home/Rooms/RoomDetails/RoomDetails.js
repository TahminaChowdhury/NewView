import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import NavBar from '../../../Shared/NavBar/NavBar';
import RoomReservation from '../../RoomReservation/RoomReservation'
import RelatedRooms from './RelatedRooms';
import './RoomDetails.css'
const RoomDetails = () => {
    const { id } = useParams();
    const [roomDetails, setRoomDetails] = useState({});
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        fetch(`https://pacific-sea-24561.herokuapp.com/rooms/${id}`)
            .then(res => res.json())
            .then(data => setRoomDetails(data))
    }, [id])
    const { img, name, price, description, aminities } = roomDetails;

    useEffect(() => {
        fetch(`https://pacific-sea-24561.herokuapp.com/rooms`)
            .then(res => res.json())
            .then(data => {
                const roomsCollection = data.filter(room => room._id !== id)
                setRooms(roomsCollection);
            })
    }, [])

    return (
        <>
            <NavBar></NavBar>
            <Container className='mb-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='room-img'>
                            <img src={img} className='img-fluid' alt="" />
                        </div>
                    </div>

                    <div className='col-12'>
                        <div>
                            <div>
                                <h5 className='my-4'>$ {price} Per Night</h5>
                                <h1>{name}</h1>
                                <p className='my-4'>{description}</p>
                            </div>
                            <hr />
                            <div className='aminities'>
                                <h3 className='my-5'>Aminities</h3>
                            </div>
                            <hr />
                            <RoomReservation></RoomReservation>
                        </div>
                    </div>

                    <div className='col-12'>
                            <div className='row'>
                                <h3 className='my-5'>Related Rooms</h3>
                                {
                                    rooms.map(roomsData => <RelatedRooms key={roomsData._id} roomsData={roomsData}></RelatedRooms>)
                                }
                            </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default RoomDetails;



