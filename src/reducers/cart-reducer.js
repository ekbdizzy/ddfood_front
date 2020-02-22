const updateItem = (item = {}, product, addQuantity) => {
    const {
        id = product.id,
        title = product.title,
        quantity = 0
    } = item;

    return {
        id,
        title,
        quantity: quantity + addQuantity
    }
};


const updateCartItem = (state, itemId, quantity) => {

    const {cart: {itemsList}, products: {productsList}} = state;
    const product = productsList.find(({id}) => id === itemId);
    const itemIndex = itemsList.findIndex(({id}) => id === itemId);
    const item = itemsList[itemIndex];
    const newItem = updateItem(item, product, quantity);

    if (newItem.quantity === 0) {
        return {
            itemsList: [
                ...itemsList.slice(0, itemIndex),
                ...itemsList.slice(itemIndex + 1)
            ]
        }
    }

    if (itemIndex === -1) {
        return {
            itemsList: [
                ...itemsList,
                newItem
            ]
        }
    }

    return {
        itemsList: [
            ...itemsList.slice(0, itemIndex),
            newItem,
            ...itemsList.slice(itemIndex + 1)
        ]
    }
};


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

        case 'ITEM_ADDED_TO_CART':
            return updateCartItem(state, action.payload, 1);

        case 'ITEM_REMOVED_FROM_CART':
            return updateCartItem(state, action.payload, -1);

        case 'ALL_ITEMS_REMOVED_FROM_CART':
            const item = state.cart.itemsList.find(({id}) => id === action.payload);
            return updateCartItem(state, action.payload, -item.quantity);


        default:
            return state.cart;
    }
};


export default updateCart;