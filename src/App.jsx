import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/main.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Hmo from './pages/Hmo';
import Appointment from './pages/Appointment';
import Gallery from './pages/Gallery';

const App = () => {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/hmo" element={<Hmo />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
    </Router>
  );
};

export default App;

