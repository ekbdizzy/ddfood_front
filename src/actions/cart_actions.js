const itemAddedToCart = (productId) => {

    return {
        type: 'ITEM_ADDED_TO_CART',
        payload: productId
    }
};


const itemRemovedFromCart = (productId) => {
    return {
        type: 'ITEM_REMOVED_FROM_CART',
        payload: productId
    }
};


const AllItemsRemovedFromCart = (productId) => {
    return {
        type: 'ALL_ITEMS_REMOVED_FROM_CART',
        payload: productId
    }
};


const cartRequested = (cart) => {
    return {
        type: 'FETCH_CART_REQUEST',
        payload: cart
    }
};


const cartLoaded = (itemsList) => {
    return {
        type: 'FETCH_CART_SUCCESS',
        payload: itemsList
    }
};


export {
    itemAddedToCart,
    itemRemovedFromCart,
    AllItemsRemovedFromCart,
    cartRequested,
    cartLoaded
}
