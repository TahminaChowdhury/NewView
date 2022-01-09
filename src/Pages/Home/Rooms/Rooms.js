import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Room from '../Room/Room';




const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        fetch('./fakedata.json')
            .then(res => res.json())
            .then(data => setRooms(data))
    }, [])
    return (
        <div className='my-5'>
            <Container>
                <div className='row'>
                    {
                        rooms.map(room => <Room room={room}></Room>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Rooms;