import React from 'react';
import './Services.css';
import BackgroundImage from '../../Files/Images/2.jpeg';
import Slika1 from '../../Files/Images/slika1.jpg';
import Slika2 from '../../Files/Images/slika2.jpg';
import Slika3 from '../../Files/Images/slika3.jpg';

const Services = () => {
  const headerStyle = {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    opacity: '0.1',
  };

  

  return (
    <div className="services-main">
      <div className="background-img" style={headerStyle}></div>
      <div className="boxes-container">
        <div className="box box1" >
          <div className="box-img-container" style={{ backgroundImage: `url(${Slika1})`, backgroundSize: 'cover' }}></div>
          <div className="box-paragraph-container">
            <h2 className="box-paragraph-header">LOREM IPSUM</h2>
            <p className="box-paragraph-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        <div className="box box2">
          <div className="box-img-container" style={{ backgroundImage: `url(${Slika2})`, backgroundSize: 'cover' }}></div>
          <div className="box-paragraph-container">
            <h2 className="box-paragraph-header">LOREM IPSUM</h2>
            <p className="box-paragraph-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <div className="box box3" >
          <div className="box-img-container" style={{ backgroundImage: `url(${Slika3})`, backgroundSize: 'cover' }}></div>
          <div className="box-paragraph-container">
            <h2 className="box-paragraph-header">LOREM IPSUM</h2>
            <p className="box-paragraph-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;