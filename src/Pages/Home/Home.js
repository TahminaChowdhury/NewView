import React from 'react';
import './Home.css'
import NavBar from '../Shared/NavBar/NavBar';
import Hero from './Hero/Hero'
import Rooms from './Rooms/Rooms';
import Footer from '../Shared/Footer/Footer';


const Home = () => {
    return (
        <div>
          <NavBar></NavBar>
          <Hero></Hero>
          <Rooms></Rooms>
          <Footer></Footer>
        </div>
    );
};

export default Home;