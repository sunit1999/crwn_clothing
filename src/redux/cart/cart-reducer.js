import CartActionTypes from "./cart-action-types";
import { addItemToCart, removeItemFromCart } from './cart-utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case CartActionTypes.TOGGLE_CART_VIEW:
            return {
                ...state,
                hidden: !state.hidden
            };

        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };

        case CartActionTypes.DECREMENT_QUANTITY:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            };

        case CartActionTypes.CLEAR_CART_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem =>
                    cartItem.id !== action.payload.id)
            };
        
        case CartActionTypes.CLEAR_CART:
            return {
                ...state,
                cartItems: []
            }

        default:
            return state;
    }
}

export default cartReducer;