import React from 'react';
import '../page.scss';
import craftImage from '../../assets/craft.jpg';
import materialsImage from '../../assets/materials.jpg';

const About = () => {
  return (
    <section className='page aboutPage'>
      <div className='hero'>
        <span className='kicker'>About</span>
        <h1>Leathra 03</h1>
        <div className='intro'>
          <p className='lead'>
            We design timeless leather essentials with a modern attitude. Every piece is built for daily wear,
            long-term durability, and clean silhouettes that work season after season.
          </p>
          <p className='supporting'>
            Our direction is minimal, tactile, and deliberate. We focus on refined proportions, premium
            materials, and practical details that feel elevated without excess.
          </p>
        </div>
      </div>

      <div className='statementRow'>
        <span className='statement'>CRAFTED TO LAST</span>
      </div>

      <div className='storyGrid'>
        <article className='featurePanel quotePanel'>
          <span className='eyebrow'>Our Point of View</span>
          <p className='quote'>
            Better essentials, fewer compromises. Built with restraint, made to be worn often, designed to age
            well.
          </p>
        </article>
        <article className='featurePanel textPanel'>
          <span className='eyebrow'>Our Craft</span>
          <div className='panelMedia'>
            <img
              src={craftImage}
              alt='Craftsmanship details in leather tailoring'
            />
          </div>
          <p>
            We partner with trusted workshops and use premium leather selections to ensure quality, fit, and
            feel. Our process combines traditional making techniques with contemporary product design.
          </p>
        </article>
        <article className='featurePanel textPanel'>
          <span className='eyebrow'>Materials</span>
          <div className='panelMedia'>
            <img
              src={materialsImage}
              alt='Premium leather materials and texture'
            />
          </div>
          <p>
            We prioritize full-grain and top-grain leathers, durable linings, and hardware tested for daily
            performance. Products are designed to age well and develop character over time.
          </p>
        </article>
      </div>

      <div className='grid principlesGrid'>
        <article className='panel'>
          <h2>Longevity</h2>
          <p>
            Each collection is shaped around pieces that remain relevant beyond one season and improve with
            regular wear.
          </p>
        </article>
        <article className='panel'>
          <h2>Function</h2>
          <p>
            We keep utility close to the surface: clean storage, strong construction, and easy everyday use.
          </p>
        </article>
        <article className='panel'>
          <h2>Restraint</h2>
          <p>
            The aesthetic stays disciplined and minimal so the materials, cut, and finish do the work.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
