import React from 'react';

import UtilityBar from './utilityBar/utilityBar';
import Content from './content/content';

import './shop.css';

const Shop = () => {

    return (
        <div  className='shop-container'>
            <UtilityBar />
            <Content />
        </div>
    )

}

export default Shop;