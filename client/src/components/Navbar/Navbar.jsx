import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';
import '../Navbar/navbar.scss';
import Cart from '../Cart/Cart';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';




const Navbar = () => {
    const [open, setOpen] = useState(false);
    const products = useSelector(state => state.cart.products);
  return (
    <div className='navbar'>
        <div className="wrapper">
        <div className="left">
            <div className="item">
                <span>en</span>
                <KeyboardArrowDownIcon/>
            </div>
            <div className="item">
                <Link className='link' to="/products/1">Women</Link>
            </div>
            <div className="item">
                <Link className='link' to="/products/2">Men</Link>
            </div>
            <div className="item">
                <Link className='link' to="/products/3">Extras</Link>
            </div>
        </div>
        <div className="center">
            <Link className='link, logo' to="/">LEATHRA 03
            </Link>
        </div>
        <div className="right">
            <div className="item">
                <Link className="link" to="/">Home</Link>
            </div>
            <div className="item">
                <Link className="link" to="/">About</Link>
            </div>
            <div className="item">
                <Link className="link" to="/">Contact</Link>
            </div>
            <div className="item">
                <Link className="link" to="/">Stores</Link>
            </div>
            <div className="icons">
                <SearchOutlinedIcon/>
                <PersonOutlineOutlinedIcon/>
                <FavoriteBorderOutlinedIcon/>
                <div className="cartIcon" onClick={()=>setOpen(!open)}>
                    <ShoppingCartOutlinedIcon/>
                    <span>{products.length}</span>
                </div>
            </div>
        </div>
        </div>
        {open && <Cart/>}
    </div>
  )
}

export default Navbar;