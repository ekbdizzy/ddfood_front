import React, {Component} from "react";
import './checkout-promo-code.scss';

import {
    PromoCodeNotAllow,
    PromoCodeIsNotActive,
    PromoCodeIsActive
} from './promocode-fragments';

class CheckoutPromoCode extends Component {
    render() {
        const {cart: {totalPrice}, isAuthenticated} = this.props;
        if (isAuthenticated) {
            return (
                <section className='checkout-promo-code'>
                    <PromoCodeIsNotActive totalPrice={totalPrice}/>
                    {/*<PromoCodeIsActive totalPrice={totalPrice}/>*/}
                </section>
            )
        }
        return (
            <section className='checkout-promo-code'>
                <PromoCodeNotAllow totalPrice={totalPrice}/>
            </section>
        )
    }
}


export default CheckoutPromoCode;