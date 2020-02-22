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
    productsRequested,
    productsLoaded,
    productsError,

    categoriesRequested,
    categoriesLoaded,
    categoriesLoadError,

    itemAddedToCart,
    itemRemovedFromCart,
    AllItemsRemovedFromCart,
    cartLoaded,
    cartRequested
}

