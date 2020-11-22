import React from 'react';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import {
    changeSelection,
    selectProductSize
} from '../../app/reducers/componentSlice';

import CircularButton from '../circularButton/circularButton';
import Button from '../button/button';
import './card.css';

// get the current hover component, could be all the sizes of the product
// or the add to cart button on the product card
const getHoverComponent = (selectedProductId, hoveredProductId, currProductId, options) => {

    let hoverHeader = null;
    let hoverBody = null;
    let className = "";

    // size has been clicked and the product is this
    // show the add to cart option
    if (selectedProductId === currProductId) {
        hoverBody = (
            <div className="flex-row space-button">
                <Button text="Add to cart" />
            </div>)
        className = "add-to-cart";
    }

    // if mouse is over the current product
    // render the sizes and stuff
    else if (hoveredProductId === currProductId) {
        // create all the size buttons
        hoverBody = (<div className="flex-row space">
            {options.map(option => <CircularButton {...option} productId={currProductId} key={`${option.id} ${option.name}`} />)}
        </div>)
        // create the select size header
        hoverHeader = (<div className="hover-header">
            Select Size:
        </div>)

        className = "hover-component";
    }

    // return the component
    return (
        <div className={className}>
            {hoverHeader}
            {hoverBody}
        </div>
    )
}



const Card = ({ id, compare_at_price, image_src, name, price, tag, vendor, options }) => {
    const dispatch = useDispatch()

    const selectedTag = useSelector(state => state.component.tag)
    const { hoveredProductId, selectedProduct } = useSelector(state => state.component)
    // calc discount
    const discount = Math.round(((compare_at_price - price) / compare_at_price) * 100)

    // return null if the product's tag is not
    // same as the selectedTag given that All Products isn't the tag
    if (selectedTag !== 'All Products' && selectedTag !== tag) {
        return null
    }


    return (
        // change hovered data when mouse enters the card
        // revert back to null when mouse leaves the card
        <div className="card-container"
            onMouseEnter={() => dispatch(changeSelection({ type: 'hoveredProductId', value: id }))}
            onMouseLeave={() => {
                dispatch(changeSelection({ type: 'hoveredProductId', value: null }))
                dispatch(selectProductSize({}))
            }
            }
        >
            <img
                className="image-container"
                // image link is array - load the first one
                src={
                    image_src.length > 0 ?
                        image_src[0] : null
                }
                alt={name}
            ></img>
            {getHoverComponent(
                selectedProduct.productId,
                hoveredProductId,
                id,
                options
            )}
            <div className="vendor">{vendor}</div>
            <div className="name">{name}</div>
            <div className="price-container">
                <div className="price">{`$${price}`}</div>
                <div className="compare-at-price">{`$${compare_at_price}`}</div>
                <div className="discount">{`(${discount}% OFF)`}</div>
            </div>
        </div>
    )

}
export default Card