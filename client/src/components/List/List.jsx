import React from 'react';
import './list.scss';
import Card from '../Card/Card';
import useFetch from '../../hooks/useFetch';


const List = ({ subCats, maxPrice, sort, catId }) => {
  const { data, loading, error, isMockData } = useFetch(
    `/products?populate=*&[filters][categories][id][$eq]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}` + (sort ? `&sort=price:${sort}` : '')
  );

  return (
    <div className="list">
      {loading && "loading"}
      {!loading && error && "Something went wrong while loading products."}
      {!loading && !error && isMockData && (
        <p className="list-note">Showing local catalog data while backend is unavailable.</p>
      )}
      {!loading && !error && data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
