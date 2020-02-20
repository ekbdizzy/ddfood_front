const updateProducts = (state, action) => {

    if (state === undefined) {
        return {
            productsList: [],
            loading: false,
            error: null
        }
    }

    switch (action.type) {
        case 'FETCH_PRODUCTS_REQUEST':
            return {
                productsList: [],
                loading: true,
                error: null
            };

        case 'FETCH_PRODUCTS_SUCCESS':
            return {
                productsList: action.payload,
                loading: false,
                error: null
            };

        case 'FETCH_PRODUCTS_FAILURE':
            // TODO
            console.log(action.payload);

        default:
            return state;
    }
};

export default updateProducts;