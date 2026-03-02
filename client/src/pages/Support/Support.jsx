import React from 'react';
import '../page.scss';

const Support = () => {
  return (
    <section className='page supportPage'>
      <div className='hero'>
        <span className='kicker'>Support</span>
        <h1>Support</h1>
        <p className='lead'>
          Find quick answers about shipping, size guidance, care instructions, and order updates.
        </p>
      </div>

      <div className='serviceGrid'>
        <article className='servicePanel'>
          <span className='eyebrow'>Shipping</span>
          <h2>Delivery</h2>
          <div className='list'>
            <span>Standard: 3-5 business days</span>
            <span>Express: 1-2 business days</span>
            <span>Tracking details are sent by email after dispatch</span>
          </div>
        </article>
        <article className='servicePanel'>
          <span className='eyebrow'>Care</span>
          <h2>Leather Care</h2>
          <div className='list'>
            <span>Use a soft dry cloth for regular cleaning</span>
            <span>Store away from direct sunlight and humidity</span>
            <span>Apply leather conditioner every few months</span>
          </div>
        </article>
        <article className='servicePanel'>
          <span className='eyebrow'>Orders</span>
          <h2>Order Help</h2>
          <div className='list'>
            <span>Need to edit an order? Contact us within 1 hour</span>
            <span>Damaged item claims accepted within 7 days</span>
            <span>Email: info@leathra.com</span>
          </div>
        </article>
      </div>

      <div className='supportNote'>
        <span className='statement'>RESPONDING WITH CLARITY</span>
        <p>
          For anything outside these notes, contact us directly and we will guide you through sizing, delivery,
          repairs, or returns with the same considered approach as our products.
        </p>
      </div>
    </section>
  );
};

export default Support;
