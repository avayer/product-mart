const userReducer = (state=[], action) => {
    switch (action.type) {
        case 'REGISTER_USER':
            return [...state, action.payload]
        case 'FIND_USER':
            return action.payload;
        case 'ADD_TO_CART': 
            return action.payload;
        default:
            return state;
    }
}

export default userReducer;