import React from 'react';
import './Contact.css';
import BackgroundImage from '../../Files/Images/2.jpeg';
import Vector1 from '../../Files/Images/Vector 1.svg'
import Vector2 from '../../Files/Images/Vector 2.svg'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    const headerStyle = {
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <div className="contact-main">
            <div className="contact-background-img" style={headerStyle}></div>
            <div className='why-us'>
                <div className='why-us-header'>
                    <h1 className='why-us-header1'>ZAKAJ IZBRATI NAS</h1>
                </div>
                <div className='why-us-options'>
                    <div className='option'>
                        <h2 className='option-header'>SODOBNOST</h2>
                        <p className='why-us-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                    </div>
                    <div className='vertical-line'>

                    </div>
                    <div className='option'>          <h2 className='option-header'>ZANESLJIVOST</h2>
                        <p className='why-us-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                    </div>
                    <div className='vertical-line'></div>
                    <div className='option'>          <h2 className='option-header'>NATANČNOST</h2>
                        <p className='why-us-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                    </div>
                </div>
            </div>
            <div className='why-us2'>
                <div className='why-us-header'>

                    <div className='vector1'>
                        <img src={Vector1} alt="Vector 1" ></img>
                        <div className='contact-form'>
                            <h1 className='why-us-header12'>KONTAKT</h1>
                            <h2 className='contact-header2'>Pogovorite se z nami</h2>
                            <input
                                type='text'
                                className='text-input'
                                placeholder='Ime in priimek'
                            />
                            <input
                                type='text'
                                className='text-input margin-input'
                                placeholder='Telefonska številka'
                            />
                            <input
                                type='text'
                                className='text-input margin-input'
                                placeholder='E-naslov'
                            />
                            <textarea
                                className='large-text-input margin-input'
                                placeholder='Sporočilo'
                            ></textarea>
                            <button className="about-us-button">POŠLJI</button>

                        </div>
                    </div>

                    <div className='vector2'>
                        <img src={Vector2} alt="Vector 2" ></img>
                        <div className='contact-info'>
                            <div className='contact-phone-display'>
                                <FaPhoneAlt className='phone-icon' />
                                <div className='contact-phone'>+386 41 357 183</div>
                            </div>
                            <div className='contact-phone-display margint-top-contact'>
                                <FaEnvelope  className='phone-icon' />
                                <div className='contact-phone'>info@elektro-elra.si</div>
                            </div>
                            <div className='contact-phone-display margint-top-contact'>
                                <FaMapMarkerAlt  className='phone-icon' />
                                <div className='contact-phone'>Lipa 37, 9231 Beltinci</div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Contact;