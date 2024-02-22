import React from 'react';
import payment from '../../images/payment.png';
import '../Footer/footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>LEATHRA 03 is a luxury brand specializing in premium leather goods, offering a curated collection of top-tier items crafted by skilled artisans, blending traditional techniques with contemporary aesthetics for timeless elegance.</span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>For inquiries, collaborations, or simply to connect with us, reach out to Leathra 03 via email at info@leathra.com or give us a call at +1 (555) 123-4567. We value your feedback and look forward to hearing from you.</span>
        </div>
      </div>

      <div className="bottom">
        <div className="left">
          <span className="copyright">&copy; Copyright 2024. All rights reserved.</span>
        </div>
        <div className="right">
          <img src={payment} alt="payment options" />
        </div>
      </div>
      <span className="logo-bottom">LEATHRA 03</span>
    </div>
  )
}

export default Footer;