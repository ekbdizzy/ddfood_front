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
        type: 'FETCH_CATEGORIES_FAILURE'
    }
};


export {
    categoriesRequested,
    categoriesLoaded,
    categoriesLoadError
}

