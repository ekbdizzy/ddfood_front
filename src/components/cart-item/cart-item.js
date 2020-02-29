import React, { Component } from 'react';
import './cart-item.scss';

export default class CartItem extends Component {
    render() {
        const {item: {name, quantity}} = this.props;
        return (
            <div className='cart-item'>
                <span>{`${name} - ${quantity} шт.`}</span>
            </div>
        )
    }
}