import CartActionTypes from "./cart-action-types"

// these actions helps in decribing action types to reducer function 
export const toggleCartView = () => ({
    type: CartActionTypes.TOGGLE_CART_VIEW
});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export const decrementQuantity = item => ({
    type: CartActionTypes.DECREMENT_QUANTITY,
    payload: item
});

export const clearItem = item => ({
    type: CartActionTypes.CLEAR_CART_ITEM,
    payload: item
});

export const clearCart = () => ({
    type: CartActionTypes.CLEAR_CART
});
