import React, {Component} from "react";
import Checkout from "../components/checkout/checkout";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {cartLoaded, cartRequested} from "../actions/cart_actions";

class CheckoutContainer extends Component {

    componentDidMount() {
        const cart = localStorage.getItem('cart');
        const {
            cartLoaded,
            cartRequested,
        } = this.props;

        if (cart !== null) {
            cartRequested();
            cartLoaded(JSON.parse(cart).itemsList);
        } else {
            localStorage.setItem('cart', JSON.stringify({
                itemsList: [],
                totalQuantity: 0,
                totalPrice: 0
            }));
        }
    }

    render() {
        return (
            <Checkout/>
        )
    }
}

const mapStateToProps = ({cart: {itemsList, loading}}) => {
    return {
        itemsList,
        loading
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        cartRequested: bindActionCreators(cartRequested, dispatch),
        cartLoaded: bindActionCreators(cartLoaded, dispatch),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer);