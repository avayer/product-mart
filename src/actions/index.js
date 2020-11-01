import dataApi from '../api/dataApi';


export const fetchProducts = () => {
    return async function(dispatch) {
        const response = await dataApi.get('/products');

        dispatch({ type: 'FETCH_PRODUCTS', payload: response.data });
    };
};

export const addProduct = (product) => {
    return async function(dispatch) {
        await dataApi.post('/products', product);

        dispatch({ type: 'ADD_PRODUCT', payload: product });
    }
}
export const deleteProduct = (id) => {
    return async function(dispatch) {
        await dataApi.delete('/products/'+id);

        dispatch({ type: 'DELETE_PRODUCT', payload: id });
    }
}