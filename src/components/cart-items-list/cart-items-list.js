import React, { Component } from "react";
import { cartItems } from "../../services/mock-data";
import CartItem from "../cart-item";

class CartItemsList extends Component {


    render() {
        return (
            cartItems.map((item) => {
                return <CartItem item={item}/>
            })
        )
    }
}

export default CartItemsList;