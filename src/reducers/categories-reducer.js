const updateCategories = (state, action) => {

    if (state === undefined) {
        return {
            categoriesList: [],
            loading: false,
            error: null
        }
    }

    switch (action.type) {
        case 'FETCH_CATEGORIES_REQUEST':
            return {
                categoriesList: [],
                loading: true,
                error: null
            };

        case 'FETCH_CATEGORIES_SUCCESS':
            return {
                categoriesList: action.payload,
                loading: false,
                error: null
            };

        case 'FETCH_CATEGORIES_FAILURE':
            console.log('Error');

        default:
            return state;
    }
};

export default updateCategories;