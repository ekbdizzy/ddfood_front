import React, {Component} from "react";


import CartItem from "../cart-item";
import {connect} from "react-redux";
import Spinner from "../spinner";
import {bindActionCreators} from "redux";
import {allItemsRemovedFromCart} from "../../actions/cart_actions";
import Cart from "../cart";

class CartItemsList extends Component {

    render() {
        const {itemsList, loading, allItemsRemoved} = this.props;

        if (loading) {
            return <Spinner/>;
        }

        return (
            itemsList.map((item) => {
                return <CartItem item={item}
                                 allItemsRemoved={() => {
                                     allItemsRemoved(item.id)
                                 }}/>

            })
        )
    }
}


const mapStateToProps = ({cart: {itemsList, loading}}) => {
    return {
        itemsList: itemsList,
        loading: loading
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        allItemsRemoved: bindActionCreators(allItemsRemovedFromCart, dispatch)
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(CartItemsList);