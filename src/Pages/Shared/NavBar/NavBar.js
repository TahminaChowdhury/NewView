import React from 'react';
import {Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';

import './NavBar.css'

const NavBar = () => {
    const { user, logout } = useAuth();
    return (
        <div className='nav-container'>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#" className='text-dark'>THE NEW VIEW</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-5 ps-5 my-2 my-lg-0 nav"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to="/home">HOME</Link>
                            <Link to="/rooms">ROOMS</Link>
                            <Link to="/aboutus">ABOUT US</Link>
                            <Link to="/gallery">GALLERY</Link>
                            <Link to="/contact">CONTACT</Link>
                            {
                                user?.email ?
                                    <div>
                                        <button onClick={logout}
                                            className='logout-btn px-3 py-2 ms-5'>LOGOUT</button>
                                        <img
                                            src={
                                                user.photoURL
                                                    ? `${user.photoURL}`
                                                    : `https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png`
                                            }
                                            alt="profile-pic"
                                            className="img-fluid user-img ms-5"
                                        />

                                    </div>
                                    :
                                    <Link to="/login">LOGIN</Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;

