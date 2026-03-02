import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import useFetch from '../../hooks/useFetch';
import './product.scss';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import { addToCart } from '../../redux/cartReducer';
import { addToSaved } from '../../redux/savedReducer';
import { resolveMediaUrl } from '../../utils/media';


const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg]= useState('img');
  const [quantity, setQuantity]= useState(1);

  const dispatch = useDispatch();
  const savedProducts = useSelector((state) => state.saved.products);
  const { data, loading } = useFetch(`/products/${id}?populate=*`);
  const hasSecondImage = Boolean(data?.attributes?.img2?.data?.attributes?.url);
  const primaryImage = resolveMediaUrl(data?.attributes?.img?.data?.attributes?.url);
  const secondaryImage = resolveMediaUrl(data?.attributes?.img2?.data?.attributes?.url);
  const selectedImageUrl =
    selectedImg === "img2" && hasSecondImage ? secondaryImage : primaryImage;

  useEffect(() => {
    setSelectedImg("img");
    setQuantity(1);
  }, [id]);

  const isSaved = savedProducts.some((item) => item.id === data?.id);

  return (
    <div className='product'>
      {loading ? (
        'loading'
      ) : !data ? (
        'Product not found.'
      ) : (
          <>
            <div className="left">
              <div className="images">
                <img 
                  src={primaryImage}
                  alt={data?.attributes?.title}
                  className={selectedImg === 'img' ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault()
                    setSelectedImg('img')
                  }
                }
                />
                {hasSecondImage && (
                  <img 
                    src={secondaryImage}
                    alt={data?.attributes?.title}
                    className={selectedImg === 'img2' ? 'active' : ''}
                    onClick={(e) => {
                        e.preventDefault()
                        setSelectedImg('img2')
                      }
                    }
                  />
                )}
              </div>
              <div className="mainImg">
                <img 
                  src={selectedImageUrl}
                  alt={data?.attributes?.title}
                />
              </div>
            </div>
            <div className="right">
              <span className='kicker'>Product Overview</span>
              <h1>{data?.attributes?.title}</h1>
              <div className="headlineRow">
                <span className='price'>€{data?.attributes?.price}</span>
                {data?.attributes?.oldPrice && (
                  <span className='oldPrice'>€{data?.attributes?.oldPrice}</span>
                )}
              </div>
              <p className='description'>{data?.attributes?.desc}</p>

              <div className="purchaseCard">
                <div className="quantityRow">
                  <span className='label'>Quantity</span>
                  <div className="quantity">
                    <button 
                      onClick={() =>
                        setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                      }
                    >
                      -
                    </button>
                    <span className='count'>{quantity}</span>
                    <button 
                      onClick={() => setQuantity((prev) => prev + 1)}
                    >
                      +
                    </button>
                  </div>
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
                        img: data?.attributes?.img?.data?.attributes?.url || "",
                        quantity,
                      })
                    )
                  }
                >
                  <AddShoppingCartOutlinedIcon className='icon'/> Add to cart
                </button>

                <div className="links">
                  <button
                    type='button'
                    className={`item actionButton ${isSaved ? 'isSaved' : ''}`}
                    onClick={() =>
                      dispatch(
                        addToSaved({
                          id: data.id,
                          title: data.attributes.title,
                          desc: data.attributes.desc,
                          price: data.attributes.price,
                          img: data?.attributes?.img?.data?.attributes?.url || "",
                        })
                      )
                    }
                  >
                    <FavoriteBorderOutlinedIcon className='icon'/> {isSaved ? 'Saved' : 'Save item'}
                  </button>
                  <div className="item">
                    <CompareArrowsOutlinedIcon className='icon'/> Compare
                  </div>
                </div>
              </div>

              <div className="metaGrid">
                <div className="metaBlock">
                  <span className='metaLabel'>Vendor</span>
                  <span className='metaValue'>Leathra 03</span>
                </div>
                <div className="metaBlock">
                  <span className='metaLabel'>Category</span>
                  <span className='metaValue'>Leather Essentials</span>
                </div>
                <div className="metaBlock">
                  <span className='metaLabel'>Edition</span>
                  <span className='metaValue'>{data?.attributes?.isNew ? 'New season' : 'Core collection'}</span>
                </div>
              </div>

              <div className="accordionList">
                <div className="lineItem">Description</div>
                <div className="lineItem">Additional information</div>
                <div className="lineItem">Shipping & returns</div>
              </div>
            </div>
          </>
        )}
    </div>
  )
}

export default Product;
