import React from 'react';
import './Home.css'
import Rooms from './Rooms/Rooms';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';
import Banner from './Banner/Banner';
import AboutUs from './AboutUs/AboutUs';


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <AboutUs></AboutUs>
          <Rooms></Rooms>
        </div>
    );
};

export default Home;