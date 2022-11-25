import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AuthProvider from './Context/AuthProvider';
import Home from './Pages/Home/Home';
import PrivateRoute from './Pages/Home/PrivateRoute/PrivateRoute';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Contact from './Pages/Contact/Contact';
import NotFound from './Pages/NotFound/NotFound';
import AllRooms from './Pages/Home/Rooms/AllRooms/AllRooms';
import RoomDetails from './Pages/Home/Rooms/RoomDetails/RoomDetails';
import NavBar from './Pages/Shared/NavBar/NavBar';
import Footer from './Pages/Shared/Footer/Footer';
import Cart from './Pages/Cart/Cart/Cart';
import CheckOut from './Pages/Cart/CheckOut/CheckOut';
import AboutUs from './Pages/Home/AboutUs/AboutUs';
import { useState, useEffect } from 'react';
import DotLoader from 'react-spinners/DotLoader';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ marginTop: '270px' }}
        >
          <DotLoader loading={loading} size={70} />
        </div>
      ) : (
        <AuthProvider>
          <BrowserRouter>
            <NavBar></NavBar>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/allrooms" element={<AllRooms />} />
              <Route path="/roomdetails/:id" element={<RoomDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route
                path="/checkout"
                element={
                  <PrivateRoute>
                    <CheckOut />
                  </PrivateRoute>
                }
              />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer></Footer>
          </BrowserRouter>
        </AuthProvider>
      )}
    </>
  );
}

export default App;
