import dataApi from '../api/dataApi';

export const registerUser = (user) => {
    return async function (dispatch) {
        await dataApi.post('/users', user);

        dispatch({ type:'REGISTER_USER', payload: user });
    }
}

export const getUserData = (userId) => {
    return async function (dispatch) {
        const res = await dataApi.get('/users/'+userId);

        dispatch({ type:'FIND_USER', payload: res.data });
    }
}
export const addProductToCart = (userId, productId) => {
    return async function(dispatch) {
        const user = await dataApi.get('/users/'+userId);
        user.data.cart.push(productId);
        await updateUser(user.data, userId);
        console.log(user.data)
        dispatch({ type: 'ADD_TO_CART', payload: user.data })
    }
}

const updateUser = (user, userId) => {
    dataApi.put('/users/'+userId, user);
}