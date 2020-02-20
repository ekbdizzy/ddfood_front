const categoriesRequested = (categories) => {
    return {
        type: 'FETCH_CATEGORIES_REQUEST',
        payload: categories
    }
};

const categoriesLoaded = (categories) => {
    return {
        type: 'FETCH_CATEGORIES_SUCCESS',
        payload: categories
    }
};


const categoriesLoadError = (error) => {
    return {
        type: 'FETCH_CATEGORIES_FAILURE',
        payload: error
    }
};


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
    productsError,
    categoriesRequested,
    categoriesLoaded,
    categoriesLoadError
}

