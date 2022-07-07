import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { FaUserAlt } from 'react-icons/fa';
import { CgShoppingCart } from 'react-icons/cg';
import { useSelector } from 'react-redux';
import './NavBar.css';

const NavBar = () => {
  const { user, logout } = useAuth();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#" className="text-white">
            THE NEW VIEW
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 nav"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Link to="/home">HOME</Link>
              <Link to="/allrooms">ROOMS</Link>
              <Link to="/contact">CONTACT</Link>
              <Link to="/cart">
                <CgShoppingCart /> ({getCartCount()})
              </Link>
              {user?.email ? (
                <div>
                  <button onClick={logout} className="logout-btn ms-5">
                    <RiLogoutCircleLine />
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
                <Link className="login-link" to="/login">
                  <FaUserAlt />
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
