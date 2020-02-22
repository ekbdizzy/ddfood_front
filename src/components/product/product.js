import React, { Component } from "react";
import './product.scss';

class Product extends Component {

    render() {
        const {
            product: {id, title, price},
            addToCart,
            removeFromCart,
            allRemoveFromCart
        } = this.props;
        return (
            <div key={id}
                 className='product'>
                <div className='product_title'>{title}</div>
                <div className='title'>{`Цена: ${price} руб.`}</div>
                <button
                    onClick={addToCart}
                    className='add-to-cart-btn'>Добавить в корзину
                </button>
                <button
                    onClick={removeFromCart}
                    className='add-to-cart-btn'>Минус 1
                </button>
                <button
                    onClick={allRemoveFromCart}
                    className='add-to-cart-btn'>Удалитьиз корзины
                </button>
            </div>
        )
    }
}

export default Product;