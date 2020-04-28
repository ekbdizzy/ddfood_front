import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './cart-item.scss';

export default class CartItem extends Component {
    render() {
        const {item: {name, quantity, id}, allItemsRemoved} = this.props;
        return (
            <div key={id}
                 className='cart-item'>
                <Link to={`/product/${id}`}>
                    <div className='cart-item__title'>
                        {name}</div>
                </Link>
                <div className='cart-item__quantity'>{quantity}{'\u00A0'}шт.</div>
                <button className='cart-item__remove'
                        onClick={allItemsRemoved}>✕
                </button>
            </div>
        )
    }
}