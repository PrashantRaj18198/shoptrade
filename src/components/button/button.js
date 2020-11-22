import React from 'react';
import {
    useDispatch
} from 'react-redux';
import { increaseCartItemCount } from '../../app/reducers/componentSlice';
import './button.css';

const Button = ({ text }) => {

    const dispatch = useDispatch();

    return (
        <div className="button">
            <button className="button" onClick={() => dispatch(increaseCartItemCount())}>
                {text}
            </button>
        </div>
    )
}

export default Button