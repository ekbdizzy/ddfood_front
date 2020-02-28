import updateCategories from "./categories-reducer";
import updateProducts from "./products-reducer";
import updateCart from "./cart-reducer";
import updateCity from "./city-reducer";

const reducer = (state, action) => {


    return {
        categories: updateCategories(state, action),
        products: updateProducts(state, action),
        cart: updateCart(state, action),
        city: updateCity(state, action)
    }
};


export default reducer;