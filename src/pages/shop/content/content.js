import React, { useEffect } from 'react';
import {
    useSelector,
    useDispatch
} from 'react-redux';

import Card from '../../../components/card/card';
import { getProducts } from '../../../app/reducers/shopSlice';

const Content = () => {
    const dispatch = useDispatch();

    // status of the api request and the products
    const { status, products } = useSelector(state => state.shop);

    useEffect(() => {
        // if status is idle send the request
        if (status === 'idle') {
            dispatch(getProducts())
        }
    }, [status, dispatch])

    let content = 'Please wait';
    if (status === 'loading') {
        content = 'Loading...'
    }
    else if (status === 'failed') {
        content = 'Some error occured...'
    }
    else if (status === 'succeeded') {
        content = products.map(product => <Card key={product.id} {...product}/>)
    }
    return (
        <div className='products-container'>
            {content}
        </div>
    )
}

export default Content;