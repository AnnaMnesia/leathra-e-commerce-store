import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import useFetch from '../../hooks/useFetch';
import './product.scss';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import { addToCart } from '../../redux/cartReducer';


const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg]= useState('img');
  const [quantity, setQuantity]= useState(1);

  const uploadUrl =  process.env.REACT_APP_UPLOAD_URL;

  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  return (
    <div className='product'>
      {loading
        ? ('loading')
        : (
          <>
            <div className="left">
              <div className="images">
                <img 
                  src={uploadUrl + data?.attributes?.img?.data?.attributes?.url} 
                  alt="" 
                  onClick={(e) => {
                    e.preventDefault()
                    setSelectedImg('img')
                  }
                }
                />
                <img 
                  src={uploadUrl + data?.attributes?.img2?.data?.attributes?.url} 
                  alt="" 
                  onClick={(e) => {
                      e.preventDefault()
                      setSelectedImg('img2')
                    }
                  }
                />
              </div>
              <div className="mainImg">
                <img 
                  src={uploadUrl + data?.attributes[selectedImg]?.data?.attributes?.url} 
                  alt="" 
                />
              </div>
            </div>
            <div className="right">
              <h1>{data?.attributes?.title}</h1>
              <span className='price'>€{data?.attributes?.price}</span>
              <p>{data?.attributes?.desc}</p>
              <div className="quantity">
                <button 
                  onClick={() =>
                    setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                  }
                >
                  -
                </button>
                {quantity}
                <button 
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
              <button 
                className='add'
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: data.id,
                      title: data.attributes.title,
                      desc: data.attributes.desc,
                      price: data.attributes.price,
                      img: data.attributes.img.data.attributes.url,
                      quantity,
                    })
                  )
                }
              >
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
          </>
        )
      }








      
    </div>
  )
}

export default Product;