import React from 'react';
import {
    useSelector
} from 'react-redux';

import Tag from '../../../components/tag/tag';
import DropDown from '../../../components/dropDown/dropDown';

const UtilityBar = () => {

    const { tag } = useSelector(state => state.component);
    const { products, allTags } = useSelector(state => state.shop);

    const tags = allTags.map(tag => <Tag key={tag} name={tag} />)

    return (
        <div>
            
            <div className='title'>
                <h2>{tag}</h2>
                <div>
                    {`(${products ? products.filter(product => tag === 'All Products' || product.tag === tag).length : 0} Products)`}
                </div>
            </div>

            <div className="options mobile-hide-tags-and-sorters">
                
                <div className="tags-container">
                    <div className="tag-name">
                        TAGS
                    </div>
                    {tags}
                </div>

                <DropDown name='Sort By' />
            </div>
        </div>
    )
}

export default UtilityBar;