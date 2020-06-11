import React from "react";
import './order-created.scss';
import {Link} from "react-router-dom";

const OrderCreated = () => {
    return (
        <div className='reset-password'>
            <h1 className='reset-password__title'>Спасибо за заказ!</h1>
            <p className='reset-password__text'>
                В ближайшее время с вами свяжется администратор для подверждения заказа.
            </p>
            <Link
                className='link-white'
                to='/'>Вернуться на главную</Link>
        </div>
    )
};

export default OrderCreated;