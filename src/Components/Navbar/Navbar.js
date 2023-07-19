import React, { useEffect, useState } from 'react';
import './Navbar.css'; // Assuming you have a CSS file named Navbar.css

const Navbar = () => {
  const [navbarShrink, setNavbarShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 50; // Adjust this value to set when the navbar should shrink

      if (window.pageYOffset > scrollThreshold) {
        setNavbarShrink(true);
      } else {
        setNavbarShrink(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${navbarShrink ? 'shrink' : ''}`}>
      <div className="navbar-content">
        <div className="centered-paragraphs">
          <p>STORITVE</p>
          <p>O NAS</p>
          <p>KONTAKT</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;