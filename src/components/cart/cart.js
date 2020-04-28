import React from "react";
import './cart.scss';
import CartItemsList from "../cart-items-list/cart-items-list";
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

const Cart = ({totalQuantity, totalPrice}) => {
    return (
        <div className='cart'>
            <div className='cart__title'>
                Корзина
            </div>
            <CartItemsList/>
            <div className='cart__total'>
                {!(totalQuantity && totalPrice) ? <div>Пусто</div> : ''}
                {totalQuantity ? <div className='total-quantity'>Всего товаров: {totalQuantity} шт.</div> : ''}
                {totalPrice ? <div className='total-price'>Всего: {totalPrice} р.</div> : ""}
            </div>

            {totalPrice ?
                <Link to={'/checkout/'}>
                    <div className='cart__submit'>
                        Оформить{'\u00A0'}заказ
                    </div>
                </Link>
                : ""}


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