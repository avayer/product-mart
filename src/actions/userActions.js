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