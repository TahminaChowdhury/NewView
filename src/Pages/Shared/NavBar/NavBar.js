import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

import './NavBar.css'

const NavBar = () => {
    
    return (
        <div className='bg-img'>
            <Navbar bg="white" expand="lg">
                <Container>
                    <Navbar.Brand href="#">The New view</Navbar.Brand>
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
                            <Link to="/signin">SIGN IN</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;

