import React from 'react';
import { connect } from 'react-redux';

import './checkout-item-component-styles.scss';
import { addItem, clearItem, decrementQuantity } from '../../redux/cart/cart-actions';

const CheckoutItem = ({ cartItem, clearItem, incrementQuantity, decrementQuantity }) => {
    const { name, price, imageUrl, quantity } = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt="" />
            </div>

            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => decrementQuantity(cartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => incrementQuantity(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div
                className='remove-button'
                onClick={() => clearItem(cartItem)}
            >
                &#10005;
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItem(item)),
    incrementQuantity: item => dispatch(addItem(item)),
    decrementQuantity: item => dispatch(decrementQuantity(item))
});


export default connect(null, mapDispatchToProps)(CheckoutItem);