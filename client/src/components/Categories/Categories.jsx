import React, { useEffect, useRef, useState } from 'react';
import './categories.scss';

import women from '../../assets/categories-images/women.jpg';
import men from '../../assets/categories-images/men.jpg';
import accessories from '../../assets/categories-images/accessories.jpg';
import shoes from '../../assets/categories-images/shoes.jpg';
import { Link } from 'react-router-dom';

const categoryItems = [
  { title: 'Women', image: women, to: '/products/1' },
  { title: 'Men', image: men, to: '/products/2' },
  { title: 'Extras', image: accessories, to: '/products/3' },
  { title: 'Shoes', image: shoes, to: '/products/4' },
];

const Categories = () => {
  const getCardsPerView = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth <= 680) return 1;
    if (window.innerWidth <= 1100) return 2;
    return 3;
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView);
  const [index, setIndex] = useState(getCardsPerView());
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const [viewportWidth, setViewportWidth] = useState(0);
  const viewportRef = useRef(null);
  const cardGap = 2;

  useEffect(() => {
    const handleResize = () => {
      const nextCardsPerView = getCardsPerView();
      setCardsPerView(nextCardsPerView);
      setIndex(nextCardsPerView);
      if (viewportRef.current) {
        setViewportWidth(viewportRef.current.clientWidth);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isPaused) return undefined;
    const timer = window.setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3600);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  const headClones = categoryItems.slice(0, cardsPerView);
  const tailClones = categoryItems.slice(-cardsPerView);
  const loopedItems = [...tailClones, ...categoryItems, ...headClones];
  const measuredCardWidth = (viewportWidth - cardGap * (cardsPerView - 1)) / cardsPerView;
  const cardWidth = Number.isFinite(measuredCardWidth) && measuredCardWidth > 0 ? measuredCardWidth : 320;
  const slideStep = cardWidth + cardGap;
  const trackWidth = loopedItems.length * cardWidth + (loopedItems.length - 1) * cardGap;

  const handleTransitionEnd = () => {
    if (index < cardsPerView) {
      setIsTransitionEnabled(false);
      setIndex(categoryItems.length + cardsPerView - 1);
      return;
    }

    if (index >= categoryItems.length + cardsPerView) {
      setIsTransitionEnabled(false);
      setIndex(cardsPerView);
    }
  };

  useEffect(() => {
    if (isTransitionEnabled) return;
    const id = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setIsTransitionEnabled(true));
    });
    return () => window.cancelAnimationFrame(id);
  }, [isTransitionEnabled]);

  return (
    <section className='categories'>
        <div className="head">
          <h2>Shop by category</h2>
          <div className="arrows">
            <button
              type="button"
              aria-label="Previous category"
              onClick={() => setIndex((prev) => prev - 1)}
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next category"
              onClick={() => setIndex((prev) => prev + 1)}
            >
              →
            </button>
          </div>
        </div>
        <div
          className="viewport"
          ref={viewportRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className={`track ${isTransitionEnabled ? 'isAnimated' : ''}`}
            style={{
              transform: `translateX(-${index * slideStep}px)`,
              width: `${trackWidth}px`,
              gap: `${cardGap}px`,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {loopedItems.map((item, idx) => (
              <article
                className="categoryCard"
                key={`${item.title}-${idx}`}
                style={{ width: `${cardWidth}px` }}
              >
                <img src={item.image} alt={`${item.title} category`} />
                <div className="overlay">
                  <span className="name">{item.title}</span>
                  <Link className="shopBtn link" to={item.to}>Shop now</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
    </section>
  )
}

export default Categories
