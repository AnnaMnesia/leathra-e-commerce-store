import React from 'react';
import './cart.scss';
import {data} from '../../data/data.js';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const Cart = () => {
  return (
    <div className='cart'>
        <h1>Products in your Cart</h1>
        {data?.map(item=>(
            <div className="item" key={item.id}>
                <img src={item.img} alt="" />
                <div className="details">
                    <h2>{item.title}</h2>
                    <p>{item.desc?.substring(0, 100)}</p>
                    <div className="price">
                        1 x €{item.price}
                    </div>
                </div>
                <DeleteOutlinedIcon className='delete'/>
            </div>
        ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>€456</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className="reset">Reset Cart</span>
    </div>
  )
}

export default Cart