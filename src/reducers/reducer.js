// cart: [
//     {
//         id: 2,
//         name: 'Пирожок с куриным филе, Fit&Sweet, 70 гр',
//         price: 70,
//         totalPrice: 140,
//         quantity: 2
//     },
//     {
//         id: 3,
//         name: 'Напиток Алоэ Вишня, Lotte, 240 мл',
//         price: 90,
//         totalPrice: 90,
//         quantity: 1
//     }
// ],

import updateCategories from "./categories-reducer";
import updateProducts from "./products-reducer";
import updateCart from "./cart-reducer";


const reducer = (state = {}, action) => {

    return {
        categories: updateCategories(state.categories, action),
        products: updateProducts(state.products, action),
        cart: updateCart(state.cart, action)
    }

};


export default reducer;