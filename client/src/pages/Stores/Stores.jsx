import React from 'react';
import '../page.scss';

const stores = [
  {
    city: 'Athens',
    address: '12 Ermou Street, Athens 105 63',
    hours: 'Mon-Sat 10:00-20:00',
  },
  {
    city: 'Milan',
    address: '21 Via Torino, Milano 20123',
    hours: 'Mon-Sat 10:00-19:30',
  },
  {
    city: 'New York',
    address: '145 Spring St, SoHo, NY 10012',
    hours: 'Mon-Sun 11:00-19:00',
  },
];

const Stores = () => {
  return (
    <section className='page storesPage'>
      <div className='hero'>
        <span className='kicker'>Stores</span>
        <h1>Stores</h1>
        <p className='lead'>
          Visit us to experience fit, leather texture, and craftsmanship in person. Walk-ins are welcome at all
          flagship locations.
        </p>
      </div>

      <div className='storesGrid'>
        {stores.map((store) => (
          <article className='storePanel' key={store.city}>
            <span className='eyebrow'>Flagship</span>
            <h2>{store.city}</h2>
            <div className='list'>
              <span>{store.address}</span>
              <span>{store.hours}</span>
            </div>
          </article>
        ))}
      </div>

      <div className='storesFootnote'>
        <span className='statement'>VISIT IN PERSON</span>
        <p>
          In-store appointments are available for product guidance, fit questions, and private viewing of key
          seasonal pieces.
        </p>
      </div>
    </section>
  );
};

export default Stores;
