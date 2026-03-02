import React from 'react';
import '../page.scss';

const ContactPage = () => {
  return (
    <section className='page'>
      <div className='hero'>
        <h1>Contact</h1>
        <p>
          Need sizing help, order support, or styling guidance? Our team is available Monday to Friday from
          9:00 to 18:00 (EET).
        </p>
      </div>

      <div className='grid'>
        <article className='panel'>
          <h2>Customer Care</h2>
          <div className='list'>
            <a href='mailto:info@leathra.com'>info@leathra.com</a>
            <a href='tel:+15551234567'>+1 (555) 123-4567</a>
            <span>Average response time: under 24 hours</span>
          </div>
        </article>

        <article className='panel'>
          <h2>Returns</h2>
          <div className='list'>
            <span>30-day return window</span>
            <span>Items must be unworn and in original condition</span>
            <span>Use your order email to request a return label</span>
          </div>
        </article>

        <article className='panel'>
          <h2>Business Inquiries</h2>
          <div className='list'>
            <a href='mailto:partnerships@leathra.com'>partnerships@leathra.com</a>
            <span>Wholesale, press, and collaborations</span>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ContactPage;
