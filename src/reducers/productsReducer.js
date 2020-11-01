const productsReducer = (state =[], action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS':
            return action.payload;
        case 'ADD_PRODUCT':
            return [...state, action.payload];
        case 'DELETE_PRODUCT':
            return state.filter(product=>product.id !== action.payload);
        default:
            return state;
    }
}

export default productsReducer;