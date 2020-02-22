import React from "react";
import './cart.scss';
import CartItemsList from "../cart-items-list/cart-items-list";
import { connect } from 'react-redux';

const Cart = ({totalQuantity, totalPrice}) => {
    return (
        <div className='cart'>
            <div className='cart__title'>
                Корзина
            </div>
            <CartItemsList/>
            <div className='pd1'>
                {!(totalQuantity && totalPrice) ? <div>Пусто</div> : ''}
                {totalQuantity ? <div>Всего товаров: {totalQuantity}</div> : ''}
                {totalPrice ? <div>Сумма заказа: {totalPrice}</div> : ""}
            </div>


        </div>
    )
};

const mapStateToProps = ({cart: {totalQuantity, totalPrice}}) => {
    return {
        totalQuantity,
        totalPrice
    }
};


export default connect(mapStateToProps)(Cart);