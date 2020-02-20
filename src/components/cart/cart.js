import React from "react";
import './cart.scss';
import CartItemsList from "../cart-items-list/cart-items-list";

const Cart = () => {
    return (
        <div className='cart'>
            <div className='cart__title'>
                Корзина
            </div>
            <CartItemsList/>
        </div>
    )
};

export default Cart;