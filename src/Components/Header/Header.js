import React from 'react';
import './Header.css'; // Assuming the CSS file is named Header.css
import BackgroundImag from '../../Files/Images/31.jpeg'; // Assuming the image file is named logo.png

const Header = () => {
    const headerStyle = {
        backgroundImage: `url(${BackgroundImag})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      };

  return (
    <div className='header-main' style={headerStyle}>
      <div className='hook-container'>
        <h1 className='hook-header'>ELRA ELEKTROINŠTALACIJE</h1>
        <p className='hook-paragraph'>Naše storitve vas bodo razsvetlile.</p>
        <button className='hook-button'>STORITVE</button>
      </div>
    </div>
  );
};

export default Header;