const userReducer = (state=[], action) => {
    switch (action.type) {
        case 'FETCH_USERS':
            return action.payload;
        case 'REGISTER_USER':
            return [...state, action.payload]
        default:
            return state;
    }
}

export default userReducer;