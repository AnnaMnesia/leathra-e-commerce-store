import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeSavedItem, resetSaved } from '../../redux/savedReducer';
import { resolveMediaUrl } from '../../utils/media';
import '../page.scss';

const Saved = () => {
  const products = useSelector((state) => state.saved.products);
  const dispatch = useDispatch();

  return (
    <section className='page savedPage'>
      <div className='hero'>
        <span className='kicker'>Saved</span>
        <h1>Saved Items</h1>
        <p className='lead'>Your personal edit of products worth returning to.</p>
      </div>

      {!products.length && (
        <div className='emptyPanel'>
          <span>No saved items yet.</span>
        </div>
      )}

      {!!products.length && (
        <>
          <div className='savedGrid'>
            {products.map((item) => (
              <article className='savedCard' key={item.id}>
                <Link className='savedImage' to={`/product/${item.id}`}>
                  <img src={resolveMediaUrl(item.img)} alt={item.title} />
                </Link>
                <div className='savedCopy'>
                  <span className='savedTitle'>{item.title}</span>
                  <span className='savedPrice'>€{item.price}</span>
                  <button type='button' onClick={() => dispatch(removeSavedItem(item.id))}>
                    Remove
                  </button>
                </div>
              </article>
            ))}
          </div>
          <button className='clearSaved' type='button' onClick={() => dispatch(resetSaved())}>
            Clear saved
          </button>
        </>
      )}
    </section>
  );
};

export default Saved;
