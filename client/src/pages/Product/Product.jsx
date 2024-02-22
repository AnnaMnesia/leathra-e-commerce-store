import React, { useState } from 'react';
import './product.scss';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';

import blackLeatherJacketWoman from '../../images/black-leather-jacket-woman.jpg';
import blackLeatherJacketWoman2 from '../../images/black-leather-jacket-woman2.jpg';

const Product = () => {
  const [selectedImg, setSelectedImg]= useState(0);
  const [quantity, setQuantity]= useState(1);

  const images = [
    blackLeatherJacketWoman,
    blackLeatherJacketWoman2,
  ];

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={e=>setSelectedImg(0)}/>
          <img src={images[1]} alt="" onClick={e=>setSelectedImg(1)}/>
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Noir Leather Jacket</h1>
        <span className='price'>€95</span>
        <p>A classic black leather jacket for women offers timeless style and versatility. Crafted from high-quality leather, it effortlessly elevates any outfit with its edgy yet sophisticated appeal, perfect for day-to-night wear.
        </p>
        <div className="quantity">
          <button onClick={decreaseQuantity}>-</button>
          {quantity}
          <button onClick={()=>setQuantity(prev=>prev+1)}>+</button>
        </div>
        <button className='add'>
          <AddShoppingCartOutlinedIcon className='icon'/> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderOutlinedIcon className='icon'/> ADD TO WISH LIST
          </div>
          <div className="item">
            <CompareArrowsOutlinedIcon className='icon'/> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Lethra 03</span>
          <span>Product: Leather Jacket</span>
          <span>Tag: Jacket, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product;