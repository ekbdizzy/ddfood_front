import React, {Component} from "react";
import {Link} from "react-router-dom";
import './checkout.scss';

import CheckoutItemsDetails from "../checkout-items-details";
import CheckoutOrderDetails from "../checkout-order-details";
import CheckoutPromoCode from "../checkout-promo-code";

import {connect} from "react-redux";


class Checkout extends Component {

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

                        <section className='checkout-promo-code'>
                            <CheckoutPromoCode
                                cart={cart}
                                isAuthenticated={this.props.isAuthenticated}
                            />
                        </section>
                    </div>

                    <div className='checkout__left-side'>
                        <CheckoutOrderDetails/>
                    </div>

                </div>
            </section>
        )
    }
}

const mapStateToProps = ({cart, user: {isAuthenticated}}) => {
    return {
        cart,
        isAuthenticated
    }
};


export default connect(mapStateToProps)(Checkout);