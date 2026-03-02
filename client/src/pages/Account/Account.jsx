import React from 'react';
import '../page.scss';

const Account = () => {
  return (
    <section className='page accountPage'>
      <div className='hero'>
        <span className='kicker'>Account</span>
        <h1>Account</h1>
        <p className='lead'>A simple overview for order help, saved items, and account assistance.</p>
      </div>

      <div className='accountGrid'>
        <article className='accountPanel'>
          <span className='eyebrow'>Orders</span>
          <h2>Track & manage</h2>
          <p>For order updates, changes, or shipping help, contact support with your order details.</p>
        </article>
        <article className='accountPanel'>
          <span className='eyebrow'>Saved</span>
          <h2>Your edit</h2>
          <p>Use the bookmark icon and Save item action to collect products you want to return to later.</p>
        </article>
        <article className='accountPanel'>
          <span className='eyebrow'>Support</span>
          <h2>Need help?</h2>
          <p>Email info@leathra.com for delivery support, care guidance, or purchase questions.</p>
        </article>
      </div>
    </section>
  );
};

export default Account;
