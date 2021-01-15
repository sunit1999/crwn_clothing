export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingItem = cartItems.find(cartItem =>
        cartItem.id === cartItemToAdd.id
    );

    // if item already exist in cart,
    // then create a new object with increased quantity
    if (existingItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    // else create with quantity = 1
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

// remove item one by one and delete item if quantity reaches 0
export const removeItemFromCart = (cartItems, itemToRemove) => {
    const existingItem = cartItems.find(
        cartItem => cartItem.id === itemToRemove.id
    );
    
    if (existingItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id);
    }

    return cartItems.map(cartItem =>
        cartItem.id === itemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};