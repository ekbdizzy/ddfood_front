import React, { Component } from "react";
import './item.scss';

class Item extends Component {

    render() {
        const {product: {id, name, price}, addToCart} = this.props;
        return (
            <div key={id}
                 className='item'>
                <div className='title'>{name}</div>
                <div className='title'>{`Цена: ${price} руб.`}</div>
                <button
                    onClick={(id) => addToCart(id)}
                    className='add-to-cart-btn'>Добавить в корзину
                </button>
            </div>
        )
    }
}

export default Item;