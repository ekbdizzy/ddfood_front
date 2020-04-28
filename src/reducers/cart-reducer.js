const updateItem = (item = {}, product, addQuantity) => {
    const {
        id = product.id,
        name = product.name,
        quantity = 0,
        price = product.price
    } = item;

    return {
        id,
        name,
        price,
        quantity: quantity + addQuantity
    }
};


const updateItemsList = (state, itemId, quantity) => {

    console.log(state);

    const {cart: {itemsList}, products: {productsList}} = state;
    const product = productsList.find(({id}) => id === itemId);
    const itemIndex = itemsList.findIndex(({id}) => id === itemId);
    const item = itemsList[itemIndex];
    const newItem = updateItem(item, product, quantity);

    if (newItem.quantity === 0) {
        return [
            ...itemsList.slice(0, itemIndex),
            ...itemsList.slice(itemIndex + 1)
        ]
    }

    if (itemIndex === -1) {
        return [
            ...itemsList,
            newItem
        ]
    }

    return [
        ...itemsList.slice(0, itemIndex),
        newItem,
        ...itemsList.slice(itemIndex + 1)
    ]
};


const getTotalQuantity = (itemsList) => {
    let totalQuantity = 0;
    itemsList.forEach((item) => {
        totalQuantity = totalQuantity + item.quantity;
    });
    return totalQuantity;
};


const getTotalPrice = (itemsList) => {
    let totalPrice = 0;
    itemsList.forEach((item) => {
        totalPrice = totalPrice + (item.quantity * item.price)
    });
    return totalPrice;
};


const updateOrder = (state, itemId, quantity) => {

    const itemsList = updateItemsList(state, itemId, quantity);
    const cart = {
        itemsList,
        totalQuantity: getTotalQuantity(itemsList),
        totalPrice: getTotalPrice(itemsList)
    };
    localStorage.setItem('cart', JSON.stringify(cart));

    return cart;
};

const updateCart = (state, action) => {

    if (state === undefined) {
        return {
            itemsList: [],
            loading: false,
            totalQuantity: 0,
            totalPrice: 0
        }
    }

    switch (action.type) {
        case 'FETCH_CART_REQUEST':
            return {
                itemsList: [],
                loading: true,
            };
        case 'FETCH_CART_SUCCESS':
            return {
                itemsList: action.payload,
                loading: false,
                totalQuantity: getTotalQuantity(action.payload),
                totalPrice: getTotalPrice(action.payload)
            };

        case 'ITEM_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1);

        case 'ITEM_REMOVED_FROM_CART':
            return updateOrder(state, action.payload, -1);

        case 'ALL_ITEMS_REMOVED_FROM_CART':
            const item = state.cart.itemsList.find(({id}) => id === action.payload);
            return updateOrder(state, action.payload, -item.quantity);


        default:
            return state.cart;
    }
};


export default updateCart;