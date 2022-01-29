import React from 'react';
import './Home.css'
import Rooms from './Rooms/Rooms';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';
import Banner from './Banner/Banner';


const Home = () => {
    return (
        <div>
          <NavBar></NavBar>
          <Banner></Banner>
          <Rooms></Rooms>
          <Footer></Footer>
        </div>
    );
};

export default Home;