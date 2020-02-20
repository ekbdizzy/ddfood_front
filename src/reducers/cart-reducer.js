const updateCart = (state, action) => {

    if (state === undefined) {
        return {
            itemsList: [],
            totalPrice: 0,
            totalQuantity: 0,
        };

        switch (action.payload) {
            case 'ITEM_ADDED_TO_CART':
                return {};

            case 'ITEM_REMOVED_FROM_CART':
                return {};

            case 'ALL_ITEMS_REMOVED_FROM_CART':
                return {};

            default:
                return state;

        }
    }
};

export default updateCart;