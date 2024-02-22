import React from 'react';
import './featuredProducts.scss';
import Card from '../Card/Card.jsx';
import {data} from '../../data/data.js';

const FeaturedProducts = ({type}) => {
    const filteredData = data.filter(item => item.category === type);
  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1>{type} products</h1>
            <p>Discover our latest {type} products, crafted from premium leather for unmatched quality and style. From sleek jackets to stylish accessories, each piece exudes sophistication and durability. Elevate your wardrobe with our meticulously designed collection, embodying timeless elegance and luxury craftsmanship.</p>
        </div>
        <div className="bottom">
            {filteredData.map(item=>(
                <Card item = {item} key={item.id}/>
            ))}
        </div>
    </div>
  )
}

export default FeaturedProducts