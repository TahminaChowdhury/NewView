import React from 'react';
import './Home.css'
import NavBar from '../Shared/NavBar/NavBar';
import Hero from './Hero/Hero'
import Rooms from './Rooms/Rooms';


const Home = () => {
    return (
        <div>
          <NavBar></NavBar>
          <Hero></Hero>
          <Rooms></Rooms>
        </div>
    );
};

export default Home;