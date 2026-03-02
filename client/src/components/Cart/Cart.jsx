import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './cart.scss';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { removeItem, resetCart } from '../../redux/cartReducer';
import {loadStripe} from '@stripe/stripe-js';
import { makeRequest } from '../../makeRequest';
import { resolveMediaUrl } from '../../utils/media';


const Cart = () => {
    const products = useSelector((state) => state.cart.products);
    const dispatch = useDispatch();
  
    const totalPrice = () => {
      let total = 0;
      products.forEach((item) => {
        total += item.quantity * item.price;
      });
      return total.toFixed(2);
    };
  
    const stripePromise = loadStripe(
      "pk_test_51OpwTrJRUMrh1bxXS2h9lNEh4UiMBzupmh32wJYvQWJo3wDkDyLappGIjNrhnvStvM9GsSgPqdt2M9myl9vK7pzo00W1IWnP0J"
    );
    const handlePayment = async () => {
      try {
        const stripe = await stripePromise;
        const res = await makeRequest.post("/orders", {
          products,
        });
        await stripe.redirectToCheckout({
          sessionId: res.data.stripeSession.id,
        });
  
      } catch (err) {
        alert("Checkout service is currently unavailable. Please try again later.");
      }
    };
    return (
      <div className="cart">
        <div className="cartHead">
          <span className="kicker">Cart</span>
          <h1>Your selection</h1>
        </div>

        {!products?.length && (
          <div className="emptyState">
            <span className="emptyTitle">Your cart is empty</span>
            <p>Add a few pieces to begin building your edit.</p>
          </div>
        )}

        {!!products?.length && (
          <div className="itemsList">
            {products?.map((item) => (
              <div className="item" key={item.id}>
                <img src={resolveMediaUrl(item.img)} alt={item.title} />
                <div className="details">
                  <span className="itemTitle">{item.title}</span>
                  <p>{item.desc?.substring(0, 88)}</p>
                  <div className="metaRow">
                    <span className="qty">{item.quantity} x</span>
                    <span className="price">${item.price}</span>
                  </div>
                </div>
                <DeleteOutlinedIcon
                  className="delete"
                  onClick={() => dispatch(removeItem(item.id))}
                />
              </div>
            ))}
          </div>
        )}

        <div className="cartFoot">
          <div className="total">
            <span>Subtotal</span>
            <span>${totalPrice()}</span>
          </div>
          <button onClick={handlePayment}>Proceed to checkout</button>
          {!!products?.length && (
            <span className="reset" onClick={() => dispatch(resetCart())}>
              Clear cart
            </span>
          )}
        </div>
      </div>
    );
  };
  
  export default Cart;
