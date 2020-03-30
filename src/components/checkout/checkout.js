import React, {Component} from "react";
import {Link} from "react-router-dom";
import './checkout.scss';
import ApiService from "../../services/api-services";

import CheckoutItemsDetails from "../checkout-items-details";
import CheckoutOrderDetails from "../checkout-order-details";
import CheckoutPromoCode from "../checkout-promo-code";


import {connect} from "react-redux";
import Product from "../product";
import {allItemsRemovedFromCart, itemAddedToCart, itemRemovedFromCart} from "../../actions/cart_actions";


class Checkout extends Component {

    componentDidMount() {

        // const apiService = new ApiService();
        // const items = apiService.getProductsInCart()
        //     .then((result) => {
        //        console.log(result);
        //     });

    }


    render() {
        const cart = JSON.parse(localStorage.getItem('cart')) || this.props.cart;
        return (
            <section className='wrapper'>
                <div className='checkout'>
                    <div className='checkout__right-side'>
                        <Link to=''
                              className='link-white'>
                            Вернуться в каталог
                        </Link>
                        <CheckoutItemsDetails/>

                        <CheckoutPromoCode
                            cart={cart}
                        />


                    </div>

                    <div className='checkout__left-side'>
                        <CheckoutOrderDetails/>
                    </div>

                </div>
            </section>
        )
    }
}

const mapStateToProps = ({cart}) => {
    return {
        cart
    }
};


export default connect(mapStateToProps)(Checkout);