import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user-reducer';
import cartReducer from './cart/cart-reducer';
import directoryReducer from './directory-redux/directory-reducer';
import shopReducer from './shop-redux/shop-reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

// combines all the individual reducers
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);