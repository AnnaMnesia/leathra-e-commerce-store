import React from 'react';
import Slider from '../../components/Slider/Slider.jsx';
import './home.scss';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts.jsx';
import Categories from '../../components/Categories/Categories.jsx';

const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProducts type='featured'/>
      <Categories/>
      <FeaturedProducts type='trending'/>
    </div>
  )
}

export default Home;