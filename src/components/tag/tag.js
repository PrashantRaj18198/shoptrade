import React from 'react';
import {
    useSelector,
    useDispatch
} from 'react-redux';
import { changeSelection } from '../../app/reducers/componentSlice';
import './tag.css';

const Tag = ({ name }) => {
    const dispatch = useDispatch();

    const { tag } = useSelector(state => state.component);
    
    return (
        <div className={`rounded-button${name === tag ? ` selected` : ``}`}>
            <button onClick={()=> dispatch(changeSelection({ type: 'tag', value: name }))}>
              {name}
            </button>
        </div>
    )
}

export default Tag;