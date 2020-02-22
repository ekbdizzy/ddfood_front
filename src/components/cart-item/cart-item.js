import React, { Component } from 'react';
import './cart-item.scss';

export default class CartItem extends Component {
    render() {
        const {item: {title, quantity, totalPrice}} = this.props;
        return (
            <div className='cart-item'>
                <span>{`${title} - ${quantity} шт.`}</span>
            </div>
        )
    }
}