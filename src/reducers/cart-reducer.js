const updateCart = (state, action) => {
    if (state === undefined) {
        return {
            itemsList: [],
            loading: false
        }
    }

    switch (action.type) {
        case 'FETCH_CART_REQUEST':
            return {
                itemsList: [],
                loading: true
            };
        case 'FETCH_CART_SUCCESS':
            return {
                itemsList: action.payload,
                loading: false
            };

        default:
            return state;
    }
};


export default updateCart;