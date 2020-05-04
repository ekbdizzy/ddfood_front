import React, {Component} from "react";
import './checkout-promo-code.scss';

import {
    PromoCodeNotAllow,
    PromoCodeIsNotActive,
    PromoCodeIsActive
} from './promocode-fragments';
import ApiService from "../../services/api-services";

class CheckoutPromoCode extends Component {

    state = {
        promoCodeError: null,
        promoCode: null
    };

    componentDidMount() {

        const {getPromoCodeDiscount} = new ApiService();
        const promoCode = JSON.parse(sessionStorage.getItem('promoCode'));

        if (promoCode) {
            getPromoCodeDiscount({code: promoCode.code})
                .then((result) => {
                    if (result.code) {
                        this.setState({promoCode: promoCode})
                    } else {
                        sessionStorage.removeItem('promoCode')
                    }
                });
        }
    }

    requestPromoCode = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const body = {};
        formData.forEach((value, key) => {
            body[key] = value
        });
        const {getPromoCodeDiscount} = new ApiService();
        getPromoCodeDiscount(body)
            .then((result) => {
                if (result.error) {
                    this.setState({promoCodeError: result.error})
                } else {
                    const promoCode = {
                        code: result.code,
                        discount: result.discount
                    };
                    this.setState({
                        promoCodeError: null,
                        promoCode
                    });
                    sessionStorage.setItem("promoCode", JSON.stringify(promoCode));
                }
            }).catch((error) => {
            console.log(error);
        })
    };

    removePromoCode = () => {
        sessionStorage.removeItem('promoCode');
        this.setState({promoCode: null});
    };

    render() {
        const {cart: {totalPrice}, isAuthenticated} = this.props;
        const {promoCode, promoCodeError} = this.state;

        if (!isAuthenticated) {
            return <PromoCodeNotAllow totalPrice={totalPrice}/>
        }

        if (promoCode) {
            return <PromoCodeIsActive
                totalPrice={totalPrice}
                removePromoCode={this.removePromoCode}/>
        }

        return <PromoCodeIsNotActive
            totalPrice={totalPrice}
            promoCodeError={promoCodeError}
            requestPromoCode={this.requestPromoCode}/>
    }

}


export default CheckoutPromoCode;