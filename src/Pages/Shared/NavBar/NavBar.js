import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';

import './NavBar.css';

const NavBar = () => {
  const { user, logout } = useAuth();
  return (
    <div className="nav-container">
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#" className="text-white">
            THE NEW VIEW
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="my-2 my-lg-0 nav"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Link to="/home">HOME</Link>
              <Link to="/allrooms">ROOMS</Link>
              <Link to="/contact">CONTACT</Link>
            </Nav>
            <Nav className="ms-auto">
              {user?.email ? (
                <div>
                  <button
                    onClick={logout}
                    className="logout-btn px-3 py-2 ms-5"
                  >
                    LOGOUT
                  </button>
                  <img
                    src={
                      user.photoURL
                        ? `${user.photoURL}`
                        : `https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png`
                    }
                    alt=""
                    className="img-fluid user-img ms-5"
                  />
                </div>
              ) : (
                <Link to="/login">LOGIN</Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
