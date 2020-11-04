import dataApi from '../api/dataApi';

export const registerUser = (user) => {
    return async function (dispatch) {
        await dataApi.post('/users', user);

        dispatch({ type:'REGISTER_USER', payload: user });
    }
}