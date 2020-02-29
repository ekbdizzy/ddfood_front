const productsRequested = (products) => {
    return {
        type: 'FETCH_PRODUCTS_REQUEST',
        payload: products
    }
};

const productsLoaded = (products) => {
    return {
        type: 'FETCH_PRODUCTS_SUCCESS',
        payload: products
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