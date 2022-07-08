import React from 'react';
import './Home.css';
import Rooms from './Rooms/Rooms';
import Banner from './Banner/Banner';
import AboutUs from './AboutUs/AboutUs';
import Amenities from './Amenities/Amenities';
import Reviews from './Reviews/Reviews';
import NewsLetter from './NewsLetter/NewLetter';
import Gallery from './Gallery/Gallery';

const Home = () => {
  return (
    <div id='home'>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Rooms></Rooms>
      <Amenities></Amenities>
      <Reviews></Reviews>
      <NewsLetter></NewsLetter>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
