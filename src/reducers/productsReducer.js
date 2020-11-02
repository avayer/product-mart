const productsReducer = (state =[], action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS':
            return action.payload;
        case 'ADD_PRODUCT':
            return [...state, action.payload];
        case 'EDIT_PRODUCT':
            const index = state.findIndex(product => product.id === action.payload.id);
            const newState =[
                ...state.slice(0, index),
                action.payload,
                ...state.slice(index+1)
            ]
            return newState;
        case 'DELETE_PRODUCT':
            return state.filter(product=>product.id !== action.payload);
        default:
            return state;
    }
}

export default productsReducer;