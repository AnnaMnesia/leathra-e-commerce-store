import React from 'react';
import './list.scss';
import Card from '../Card/Card';
import {data} from '../../data/data.js';


const List = () => {
  return (
    <div className='list'>
      {data?.map(item=>(
        <Card item={item} key={item.id}/>
      ))}
    
    </div>
  )
}

export default List;