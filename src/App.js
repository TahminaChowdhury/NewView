import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp'
import AuthProvider from './Context/AuthProvider';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/home" element={<Home />} />
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
