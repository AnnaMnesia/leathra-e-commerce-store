import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { resolveMediaUrl } from '../../utils/media';
import '../page.scss';

const Search = () => {
  const [query, setQuery] = useState('');
  const { data, loading, error } = useFetch('/products?populate=*');

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return data || [];

    return (data || []).filter((item) => {
      const title = item?.attributes?.title?.toLowerCase() || '';
      const desc = item?.attributes?.desc?.toLowerCase() || '';
      return title.includes(term) || desc.includes(term);
    });
  }, [data, query]);

  return (
    <section className='page searchPage'>
      <div className='hero'>
        <span className='kicker'>Search</span>
        <h1>Search</h1>
        <p className='lead'>Find products by name, material, or product description.</p>
      </div>

      <div className='searchInputWrap'>
        <input
          type='search'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Search leather essentials'
          aria-label='Search products'
        />
      </div>

      {loading && <p className='statusText'>Loading products...</p>}
      {error && <p className='statusText'>Search is temporarily unavailable.</p>}

      {!loading && !error && (
        <div className='searchGrid'>
          {results.map((item) => (
            <Link className='searchCard' key={item.id} to={`/product/${item.id}`}>
              <div className='searchImage'>
                <img
                  src={resolveMediaUrl(item?.attributes?.img?.data?.attributes?.url)}
                  alt={item?.attributes?.title}
                />
              </div>
              <div className='searchCopy'>
                <span className='searchTitle'>{item?.attributes?.title}</span>
                <span className='searchPrice'>€{item?.attributes?.price}</span>
              </div>
            </Link>
          ))}
          {!results.length && (
            <div className='emptyPanel'>
              <span>No results found.</span>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default Search;
