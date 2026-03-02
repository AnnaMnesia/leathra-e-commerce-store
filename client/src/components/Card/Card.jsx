import React from 'react';
import './card.scss';
import { Link } from 'react-router-dom';
import { resolveMediaUrl } from '../../utils/media';

const Card = ({item, variant = "default"}) => {
  const imageUrl = resolveMediaUrl(item?.attributes?.img?.data?.attributes?.url);
  const imageUrl2 = resolveMediaUrl(item?.attributes?.img2?.data?.attributes?.url);
  const hasSecondImage = Boolean(item?.attributes?.img2?.data?.attributes?.url);
  const isNewSeason = item?.attributes?.isNew === true;

  const price = Number(item?.attributes?.price || 0);
  const oldPrice =
    item?.attributes?.oldPrice !== undefined && item?.attributes?.oldPrice !== null
      ? Number(item.attributes.oldPrice)
      : price + 20;

  return (
    <Link to={`/product/${item.id}`} className='link'>
    <div className={`card ${variant === "landing" ? "card-landing" : ""}`}>
        <div className="image">
            {isNewSeason && <span>New Season</span>}
            <img src={imageUrl} alt={item?.attributes?.title} className='mainImg'/>
            {hasSecondImage && (
              <img src={imageUrl2} alt={item?.attributes?.title} className='secondImg'/>
            )}
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
            <h3>${oldPrice}</h3>
            <h3>${price}</h3>
        </div>
    </div>
    </Link>
    
  )
}

export default Card;
