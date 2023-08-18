import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Logo from '../assets/vmc.png';

const Navbar = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src={Logo} />
          <h4>Vintage Medical Center</h4>
        </Link>
        <div className={`menu-icon ${isMobile ? 'open' : ''}`} onClick={handleToggle}>
          <FaBars />
        </div>
        <ul className={`nav-menu ${isMobile ? 'mobile' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={handleToggle}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link" onClick={handleToggle}>
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={handleToggle}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/hmo" className="nav-link" onClick={handleToggle}>
              HMO
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/appointment" className="nav-link" onClick={handleToggle}>
              Appointment
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-link" onClick={handleToggle}>
              Gallery
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={handleToggle}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;