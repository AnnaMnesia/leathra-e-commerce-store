import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Cart from '../Cart/Cart';
import '../Navbar/navbar.scss';

const Navbar = () => {
  const [openCart, setOpenCart] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isSolid, setIsSolid] = useState(false);
  const products = useSelector((state) => state.cart.products);
  const savedProducts = useSelector((state) => state.saved.products);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY <= 10) {
        setIsVisible(true);
        setIsSolid(false);
      } else if (currentY > lastScrollY.current + 4) {
        // Scrolling down: hide navbar and close open menu.
        setIsVisible(false);
        setMenuOpen(false);
      } else if (currentY < lastScrollY.current - 4) {
        // Scrolling up: show navbar and restore background.
        setIsVisible(true);
        setIsSolid(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={`navbar ${isVisible ? 'is-visible' : 'is-hidden'} ${(isSolid || menuOpen) ? 'is-solid' : 'is-transparent'} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="wrapper">
        <button className="menuButton" type="button" onClick={() => setMenuOpen((prev) => !prev)}>
          {menuOpen ? 'Close' : 'Menu'}
        </button>

        <div className="center">
          <Link className="link logo" to="/" onClick={closeMenu}>LEATHRA 03</Link>
        </div>

        <div className="right">
          <div className="topLinks">
            <Link className="link" to="/search" onClick={closeMenu}>Search</Link>
            <Link className="link" to="/account" onClick={closeMenu}>Account</Link>
          </div>
          <Link className="savedIcon link" to="/saved" onClick={closeMenu} aria-label="Saved items">
            <BookmarkBorderOutlinedIcon />
            {!!savedProducts.length && <span className="savedCount">{savedProducts.length}</span>}
          </Link>
          <div className="cartIcon" onClick={() => setOpenCart(!openCart)}>
            <ShoppingBagOutlinedIcon />
            <span>{products.length}</span>
          </div>
        </div>
      </div>

      <div className={`menuPanel ${menuOpen ? 'open' : ''}`}>
        <div className="menuInner">
          <div className="menuCol">
            <span className="menuLabel">Shop</span>
            <Link className="link menuLink" to="/products/1" onClick={closeMenu}>Women</Link>
            <Link className="link menuLink" to="/products/2" onClick={closeMenu}>Men</Link>
            <Link className="link menuLink" to="/products/3" onClick={closeMenu}>Extras</Link>
            <Link className="link menuLink" to="/products/4" onClick={closeMenu}>Shoes</Link>
          </div>
          <div className="menuCol">
            <span className="menuLabel">Explore</span>
            <Link className="link menuLink" to="/" onClick={closeMenu}>Home</Link>
            <Link className="link menuLink" to="/about" onClick={closeMenu}>About</Link>
            <Link className="link menuLink" to="/stores" onClick={closeMenu}>Stores</Link>
            <Link className="link menuLink" to="/support" onClick={closeMenu}>Support</Link>
          </div>
          <div className="menuCol">
            <span className="menuLabel">Contact</span>
            <a className="menuLink" href="mailto:info@leathra.com" onClick={closeMenu}>info@leathra.com</a>
            <a className="menuLink" href="tel:+15551234567" onClick={closeMenu}>+1 (555) 123-4567</a>
            <a className="menuLink" href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a className="menuLink" href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          </div>
        </div>
      </div>

      {openCart && <Cart />}
    </div>
  );
};

export default Navbar;
