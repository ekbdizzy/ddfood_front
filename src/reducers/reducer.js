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