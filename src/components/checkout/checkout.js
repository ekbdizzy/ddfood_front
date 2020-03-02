import React, { Component } from "react";
import './checkout.scss';

import { connect } from "react-redux";


class Checkout extends Component {


    render() {

        const cart = JSON.parse(localStorage.getItem('cart')) || this.props.cart;

        return (
            <section className='wrapper'>
                <div>Checkout Page</div>
                <div>total price: {cart.totalPrice}</div>
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