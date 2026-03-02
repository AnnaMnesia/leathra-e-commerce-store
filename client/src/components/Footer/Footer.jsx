import React from 'react';
import { Link } from 'react-router-dom';
import payment from '../../images/payment.png';
import '../Footer/footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footerGrid">
        <div className="col">
          <span className="colTitle">Support</span>
          <a href="mailto:info@leathra.com">▸ Live Chat</a>
          <a href="mailto:info@leathra.com">▸ Email</a>
          <a href="tel:+15551234567">▸ Call</a>
          <a href="https://wa.me/15551234567" target="_blank" rel="noreferrer">▸ Whatsapp</a>
        </div>
        <div className="col">
          <span className="colTitle">Services</span>
          <Link className='link' to="/contact">Contact</Link>
          <Link className='link' to="/support">FAQ</Link>
          <Link className='link' to="/support">Order Tracking</Link>
          <Link className='link' to="/support">Register Return</Link>
          <Link className='link' to="/stores">Store Locator</Link>
        </div>
        <div className="col">
          <span className="colTitle">Community</span>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://www.line.me/en/" target="_blank" rel="noreferrer">Line</a>
          <Link className='link' to="/about">Careers</Link>
          <Link className='link' to="/support">Sustainability</Link>
        </div>
      </div>

      <div className="metaRow">
        <div className="mailing">
          <Link className='link' to="/contact">Join mailing list</Link>
        </div>
        <div className="legal">
          <span>Copyright © 2026</span>
          <Link className='link' to="/support">Terms & Conditions</Link>
          <Link className='link' to="/support">Privacy Policy</Link>
          <Link className='link' to="/support">Cookie Settings</Link>
          <Link className='link' to="/support">Accessibility</Link>
        </div>
        <div className="shipping">
          Shipping to ▸ Germany (EUR)
        </div>
      </div>

      <div className="paymentRow">
        <div className="payments">
          <img src={payment} alt="payment options" />
        </div>
        <div className="carriers">dpd · ups</div>
      </div>
      <span className="logo-bottom">LEATHRA 03</span>
    </div>
  )
}

export default Footer;
