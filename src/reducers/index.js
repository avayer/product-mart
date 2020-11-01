import { combineReducers } from 'redux';

import productsReducer from './productsReducer';
import usersReducers from './usersReducer';

export default combineReducers({
    products: productsReducer,
    users: usersReducers
})