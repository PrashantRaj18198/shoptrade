import React from 'react';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import './card.css';
import { changeSelection, selectProductSize } from '../../app/reducers/componentSlice';
import CircularButton from '../circularButton/circularButton';
import Button from '../button/button';

const getHoverComponent = (selectedProductId, card, currCard, options) => {

    let hoverBody = null;
    let hoverHeader = null;
    if (selectedProductId === currCard) {
        console.log('hover comp changed to button')
        hoverBody = (
            <div className="flex-row space-button">
                <Button text="Add to cart" />
            </div>)
        return (
            <div className="add-to-cart">
                {hoverHeader}
                {hoverBody}
            </div>
        )
    }
    // if mouse is over the current card
    // render the sizes and stuff
    if (card === currCard) {
        // create all the size buttons
        hoverBody = (<div className="flex-row space">
            {options.map(option => <CircularButton {...option} productId={currCard} key={`${option.id} ${option.name}`} />)}
        </div>)
        // create the select size header
        hoverHeader = (<div className="hover-header">
            Select Size:
        </div>)
    }
    return (
        <div className="hover-component">
            {hoverHeader}
            {hoverBody}
        </div>
    )
}



const Card = ({ id, compare_at_price, image_src, name, price, tag, vendor, options }) => {
    const dispatch = useDispatch()

    const selectedTag = useSelector(state => state.component.tag)
    const { card, selectedProduct } = useSelector(state => state.component)
    // calc discount
    const discount = Math.round(((compare_at_price - price) / compare_at_price) * 100)

    // return null if the product's tag is not
    // same as the selectedTag given that All Products isn't the tag
    if (selectedTag !== 'All Products' && selectedTag !== tag) {
        return null
    }


    return (
        <div className="card-container"
            onMouseEnter={() => dispatch(changeSelection({ type: 'card', value: id }))}
            onMouseLeave={() => {
                dispatch(changeSelection({ type: 'card', value: null }))
                dispatch(selectProductSize({}))
            }
            }
        >
            <img
                className="image-container"
                src={
                    image_src.length > 0 ?
                        image_src[0] : null
                }
                alt={name}
            ></img>
            {getHoverComponent(
                selectedProduct.productId,
                card,
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