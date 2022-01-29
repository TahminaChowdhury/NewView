import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Room from '../Room/Room';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from 'react';
import './Rooms.css'

      

const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        fetch('https://pacific-sea-24561.herokuapp.com/rooms')
            .then(res => res.json())
            .then(data => setRooms(data))
    }, [])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ],
    };

    const sliderData = useRef();
    console.log(sliderData);

    return (
        <div className='my-5'>
            <Container>
                <div className='row'>
                    <h1 className='my-5'>Our Rooms</h1>
                    <Slider ref={sliderData} {...settings}>
                        {
                            rooms.map(room => <Room room={room}></Room>)
                        }
                    </Slider>
                </div>
            </Container>
        </div>
    );
};

export default Rooms;