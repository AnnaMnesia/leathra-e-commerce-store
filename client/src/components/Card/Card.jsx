import React from 'react';
import './card.scss';
import { Link } from 'react-router-dom';




const Card = ({item}) => {
  console.log(item)
  return (
    <Link to={`/product/${item.id}`} className='link'>
    <div className='card'>
        <div className="image">
            {item?.attributes.isNew && <span>New Season</span>}
            <img src={process.env.REACT_APP_UPLOAD_URL + item.attributes.img.data.attributes.url} alt="" className='mainImg'/>
             {/* Conditionally render img2 if it exists and is not null */}
            {item.attributes.img2 && item.attributes.img2.data && (
              <img src={process.env.REACT_APP_UPLOAD_URL + item.attributes.img2.data.attributes.url} alt="" className='secondImg'/>
            )}
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
            <h3>${item?.attributes.oldPrice || item?.attributes.oldPrice+ 20}</h3>
            <h3>${item?.attributes.price}</h3>
        </div>
    </div>
    </Link>
    
  )
}

export default Card;