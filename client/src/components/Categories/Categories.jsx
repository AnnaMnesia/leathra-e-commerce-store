import React from 'react';
import './categories.scss';

import sale from '../../assets/categories-images/sale.jpg';
import women from '../../assets/categories-images/women.jpg';
import newSeason from '../../assets/categories-images/newSeason.jpg';
import men from '../../assets/categories-images/men.jpg';
import accessories from '../../assets/categories-images/accessories.jpg';
import shoes from '../../assets/categories-images/shoes.jpg';
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
                <img src={sale} alt="on sale category" />
                <button>
                    <Link className='link' to='/products/1'>Sale</Link>
                </button>
            </div>
            <div className="row">
                <img src={women} alt="women category" />
                <button>
                    <Link className='link' to='/products/1'>Women</Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
                <img src={newSeason} alt="newSeason category" />
                <button>
                    <Link className='link' to='/products/1'>New Season</Link>
                </button>
            </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <img src={men} alt="men category" />
                        <button>
                            <Link className='link' to='/products/1'>Men</Link>
                        </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <img src={accessories} alt="accessories category" />
                        <button>
                            <Link className='link' to='/products/1'>Extras</Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <img src={shoes} alt="shoes category" />
                <button>
                    <Link className='link' to='/products/1'>Shoes</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Categories