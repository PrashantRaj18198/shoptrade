import React from 'react';
import '../tag/tag.css';
import './dropDown.css';
import { useSelector } from 'react-redux';


const DropDown = ({ name }) => {
    const { sort } = useSelector(state => state.component)
    return (
        <div className="rounded-button selected width-inc">
            <button>
                <span>
                    {`${name}: `}<b>{sort}</b>
                </span>
                <span className="margin">
                    <img
                    src={`${process.env.PUBLIC_URL}/images/downArrow.svg`}
                    alt={name}
                    ></img>
                </span>
            </button>
        </div>
    )
}

export default DropDown;