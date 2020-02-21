import React, { Component } from "react";


import CartItem from "../cart-item";
import { connect } from "react-redux";
import Spinner from "../spinner";

class CartItemsList extends Component {

    render() {
        const {itemsList, loading} = this.props;

        if (loading) {
            return <Spinner/>;
        }

        return (
            itemsList.map((item) => {
                return <CartItem item={item}/>
            })
        )
    }
}


const mapStateToProps = ({cart: {itemsList, loading}}) => {
    return {
        itemsList,
        loading
    }
};

export default connect(mapStateToProps)(CartItemsList);