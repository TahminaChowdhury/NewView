import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import AuthProvider from './Context/AuthProvider';
import Home from './Pages/Home/Home';
import RoomDetails from './Pages/Home/RoomDetails/RoomDetails';
import PrivateRoute from './Pages/Home/PrivateRoute/PrivateRoute';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp'
import Contact from './Pages/Contact/Contact';
import NotFound from './Pages/NotFound/NotFound';





function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/home" element={<Home />} />
         <Route path="/roomdetails/:id" element={<PrivateRoute><RoomDetails /></PrivateRoute>}/>
         <Route path="/contact" element={<Contact />} />
         <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<SignUp />} />
         <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
