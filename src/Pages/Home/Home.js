import React from 'react';
import './Home.css'
import Rooms from './Rooms/Rooms';
import Banner from './Banner/Banner';
import AboutUs from './AboutUs/AboutUs';
import Amenities from './Amenities/Amenities';


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <AboutUs></AboutUs>
          <Rooms></Rooms>
          <Amenities></Amenities>
        </div>
    );
};

export default Home;