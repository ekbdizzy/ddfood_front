import React, { Component } from 'react';
import './cart-item.scss';

export default class CartItem extends Component {
    render() {
        const {item: {name, quantity, totalPrice}} = this.props;
        return (
            <div>
                <span>{`${name} - ${quantity} шт.`}</span>
                <hr/>
            </div>
        )
    }
}