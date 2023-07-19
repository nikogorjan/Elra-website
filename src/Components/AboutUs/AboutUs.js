import React, { useEffect, useRef, useState } from 'react';
import './AboutUs.css';
import JohnDoe from '../../Files/Images/john-doe.png';

const AboutUs = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const aboutUsParagraphRef = useRef(null);
  const scrollThreshold = 0.7;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollPosition = (scrollTop + window.innerHeight) / (document.documentElement.offsetHeight - window.innerHeight);

      if (scrollPosition >= scrollThreshold && !isAnimated) {
        setIsAnimated(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isAnimated]);

  return (
    <div className="about-us-main">
      <div className="first-div">
        <img src={JohnDoe} alt="John Doe" />
      </div>
      <div className="second-div">
        <div
          className={`about-us-paragraph-position ${isAnimated ? 'slide-in' : ''}`}
          ref={aboutUsParagraphRef}
        >
          <h1 className="about-us-header">KDO SMO</h1>
          <p className="about-us-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <button className="about-us-button">KONTAKT</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;