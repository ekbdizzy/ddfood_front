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


const allItemsRemovedFromCart = (productId) => {
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

const discountAdded = (discount) => {
    return {
        type: 'DISCOUNT_ADDED',
        payload: discount
    }

};


export {
    itemAddedToCart,
    itemRemovedFromCart,
    allItemsRemovedFromCart,
    cartRequested,
    cartLoaded,
    discountAdded
}
