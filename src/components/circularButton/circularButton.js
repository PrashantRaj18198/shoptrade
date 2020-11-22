import React from 'react';
import { useDispatch } from 'react-redux';
import './circularButton.css';
import { selectProductSize } from '../../app/reducers/componentSlice';

const CircularButton = ({id, productId, name, value}) => {
    
    const dispatch = useDispatch();

    let shownValue = value;
    if (shownValue.startsWith('US ')) {
        shownValue = shownValue.slice(3)
    }
    else if (isNaN(parseInt(shownValue))) {
        shownValue = shownValue.slice(0, 2)
    }

    const curr = {
        productId,
        sizeId: id
    }
    
    return (
        <div className="circular-button" onClick={() => dispatch(selectProductSize(curr))}>
            { shownValue }
        </div>
    )
}

export default CircularButton