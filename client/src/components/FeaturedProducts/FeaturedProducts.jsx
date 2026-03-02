import React from 'react';
import './featuredProducts.scss';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch.js';
import { resolveMediaUrl } from '../../utils/media.js';

const editorialText = {
  featured: [
    {
      title: 'Textural finishes',
      subtitle: 'Crafted details inspired by modern luxury.',
      cta: 'Shop Featured',
    },
    {
      title: 'Runway edit',
      subtitle: 'Discover silhouettes that define the season.',
      cta: 'Explore Looks',
    },
    {
      title: 'Store destinations',
      subtitle: 'Experience the collection in person.',
      cta: 'Find a Store',
    },
  ],
  trending: [
    {
      title: 'Trending now',
      subtitle: 'Elevated essentials with statement character.',
      cta: 'Shop Trending',
    },
    {
      title: 'Leather in motion',
      subtitle: 'Timeless materials shaped for daily wear.',
      cta: 'See Collection',
    },
    {
      title: 'Editorial selection',
      subtitle: 'A curated mix of standout pieces.',
      cta: 'View Edit',
    },
  ],
};

const FeaturedProducts = ({type}) => {
    const {data, loading, error, isMockData} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);
    const items = data?.slice(0, 3) || [];
    const copy = editorialText[type] || editorialText.featured;
    const isTrending = type === 'trending';

    const getTitle = (item) => item?.attributes?.title || '';
    const getDesc = (item) => item?.attributes?.desc || '';
    const getPrice = (item) => item?.attributes?.price;
    const getOldPrice = (item) => item?.attributes?.oldPrice;

    const leadItem = items[0];
    const sideItems = items.slice(1, 3);

  return (
    <div className={`featuredProducts ${isTrending ? 'trendingProducts' : ''}`}>
        <div className="top">
            <span className="kicker">{type}</span>
            <h1>{type}</h1>
            <p>Discover our latest {type} collection, crafted from premium leather for understated elegance and everyday function.</p>
        </div>
        {isMockData && <span className="fallback-note">Showing catalog preview data while backend is offline.</span>}
        {error && <p className="statusText">Something went wrong.</p>}
        {loading && <p className="statusText">Loading collection...</p>}
        {!loading && !error && !isTrending && (
          <div className="editorialGrid">
            {items.map((item, index) => (
              <article className="editorialCard" key={item.id}>
                <Link className="imageLink" to={`/product/${item.id}`}>
                  <div className="imageWrap">
                    <img
                      src={resolveMediaUrl(item?.attributes?.img?.data?.attributes?.url)}
                      alt={item?.attributes?.title}
                    />
                  </div>
                </Link>
                <div className="copy">
                  <h3>{copy[index]?.title || item?.attributes?.title}</h3>
                  <p>{copy[index]?.subtitle || item?.attributes?.desc}</p>
                  <Link className="cta" to={`/product/${item.id}`}>
                    {copy[index]?.cta || 'View Product'}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
        {!loading && !error && isTrending && (
          <div className="trendingShowcase">
            <div className="statement">TRENDING EDIT</div>
            {leadItem && (
              <article className="leadCard">
                <Link className="imageLink" to={`/product/${leadItem.id}`}>
                  <div className="imageWrap">
                    <img
                      src={resolveMediaUrl(leadItem?.attributes?.img?.data?.attributes?.url)}
                      alt={getTitle(leadItem)}
                    />
                  </div>
                </Link>
                <div className="copy">
                  <p className="eyebrow">Seasonal spotlight</p>
                  <h3>{getTitle(leadItem)}</h3>
                  <p>{getDesc(leadItem)}</p>
                  <div className="prices">
                    {typeof getOldPrice(leadItem) === 'number' && <span className="old">${getOldPrice(leadItem)}</span>}
                    {typeof getPrice(leadItem) === 'number' && <span className="new">${getPrice(leadItem)}</span>}
                  </div>
                  <Link className="cta" to={`/product/${leadItem.id}`}>
                    Shop now
                  </Link>
                </div>
              </article>
            )}
            <div className="sideRail">
              {sideItems.map((item) => (
                <article className="railCard" key={item.id}>
                  <Link className="imageLink" to={`/product/${item.id}`}>
                    <div className="imageWrap">
                      <img
                        src={resolveMediaUrl(item?.attributes?.img?.data?.attributes?.url)}
                        alt={getTitle(item)}
                      />
                    </div>
                  </Link>
                  <div className="copy">
                    <h4>{getTitle(item)}</h4>
                    <p>{getDesc(item)}</p>
                    <Link className="cta" to={`/product/${item.id}`}>
                      View product
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
    </div>
  )
}

export default FeaturedProducts;
