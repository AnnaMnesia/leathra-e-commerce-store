import React, { useState } from 'react';
import './contact.scss';
import { Link } from 'react-router-dom';


import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const validateEmail = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          setErrorMessage('! Please enter a valid email address.');
          return;
        }
    
        // Additional validation (if needed) can be added here
    
        console.log('Email is valid:', email);
        setErrorMessage('');
        setEmail(''); // Clear the email input field after submission
      };


  return (
    <div className='contact'>
        <div className="wrapper">
            <span>BE IN TOUCH WITH US:</span>
            <div className="mail">
                <input 
                    type="text"
                    placeholder='Enter your email...'
                    value={email}
                    onChange={handleEmailChange}
                />
                <button type='submit' onClick={validateEmail}>JOIN US</button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
            
            <div className="media-links">
                <div className="item">
                    <Link className='link' to='https://www.instagram.com/' target="_blank" rel="noopener noreferrer">Instagram
                    <ArrowOutwardOutlinedIcon className='icon'/></Link>
                    
                </div>
                
                <div className="item">
                    <Link className='link' to='https://www.facebook.com/' target="_blank" rel="noopener noreferrer">Facebook
                    <ArrowOutwardOutlinedIcon className='icon'/></Link>
                    
                </div>
                <div className="item">
                    <Link className='link' to='https://www.twitter.com/' target="_blank" rel="noopener noreferrer">X
                    <ArrowOutwardOutlinedIcon className='icon'/></Link>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact;