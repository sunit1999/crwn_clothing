import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './cart-dropdown-component-styles.scss';

import CustomButton from '../customButton/custom-btn-component';
import CartItem from '../cart-item/cart-item-component';
import { selectCartItems } from '../../redux/cart/cart-selectors';
import { toggleCartView } from '../../redux/cart/cart-actions';

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length
                        ? cartItems.map(cartItem =>
                            <CartItem key={cartItem.id} item={cartItem} />)
                        : <span className='empty-message'>Your cart is empty</span>
                }
            </div>

            <CustomButton onClick={() => {
                history.push('/checkout')
                dispatch(toggleCartView())
            }}>
                GO TO CHECKOUT
            </CustomButton>
        </div>
    );
}

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdown));