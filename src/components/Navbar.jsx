import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Logo from '../assets/vmc.png';

const Navbar = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  const [isAnimating, setIsAnimating] = React.useState(false); // New state for animation

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  const handleItemClick = () => {
    setIsMobile(!isMobile);
    setIsAnimating(true);
  }

  // This effect will trigger when isAnimating changes
  React.useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false); // Stop the animation after a short delay
      }, 500); // Adjust the delay as needed
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
      {isAnimating && <div className="animation-bar" />}
        <Link to="/" className="logo">
          <img src={Logo} />
          <h4>Vintage Medical Center</h4>
        </Link>
        <div className={`menu-icon ${isMobile ? 'open' : ''}`} onClick={handleToggle}>
          <FaBars />
        </div>
        <ul className={`nav-menu ${isMobile ? 'mobile' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={handleItemClick}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link" onClick={handleItemClick}>
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={handleItemClick}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/hmo" className="nav-link" onClick={handleItemClick}>
              HMO
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/appointment" className="nav-link" onClick={handleItemClick}>
              Appointment
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-link" onClick={handleItemClick}>
              Gallery
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={handleItemClick}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;