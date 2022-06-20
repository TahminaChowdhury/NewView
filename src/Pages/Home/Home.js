import React from 'react';
import './Home.css';
import Rooms from './Rooms/Rooms';
import Banner from './Banner/Banner';
import AboutUs from './AboutUs/AboutUs';
import Amenities from './Amenities/Amenities';
import Reviews from './Reviews/Reviews';
import NewsLetter from './NewsLetter/NewLetter';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Rooms></Rooms>
      <Amenities></Amenities>
      <Reviews></Reviews>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
