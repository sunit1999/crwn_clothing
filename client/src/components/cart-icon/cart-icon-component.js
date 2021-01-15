import React from 'react';
import { connect } from 'react-redux';

import './cart-icon-component-styles.scss';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartView } from '../../redux/cart/cart-actions';
import { selectCartItemsCount } from '../../redux/cart/cart-selectors';

const CartIcon = ({ toggleCartView, itemCount }) => {
    return (
        <div className='cart-icon' onClick={toggleCartView}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{itemCount}</span>
        </div>
    );
}

// total items in cart
const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
});

// hide and unhide action dispatcher
const mapDispatchToProps = dispatch => ({
    toggleCartView: () => dispatch(toggleCartView())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);