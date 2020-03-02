import { mapProductData } from '../services/mappers';


const productsRequested = () => {
    return {
        type: 'FETCH_PRODUCTS_REQUEST',
        payload: []
    }
};

const productsLoaded = (products) => {
    return {
        type: 'FETCH_PRODUCTS_SUCCESS',
        payload: products.map(product => mapProductData(product))
    }
};

const productsError = (error) => {
    return {
        type: 'FETCH_PRODUCTS_FAILURE',
        payload: error
    }
};


export {
    productsRequested,
    productsLoaded,
    productsError
}