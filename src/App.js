import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import NavBar from './Pages/Shared/NavBar/NavBar';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/home" element={<Home />} />
         <Route path="/contact" element={<Contact />} />

         <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
