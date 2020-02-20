import React, { Component } from "react";
import './product.scss';

class Product extends Component {

    render() {
        const {product: {id, name, price}, addToCart} = this.props;
        return (
            <div key={id}
                 className='product'>
                <div className='product__title'>{name}</div>
                <div className='product__price'>{`Цена: ${price} руб.`}</div>
                <button
                    onClick={(id) => addToCart(id)}
                    className='add-to-cart-btn'>Добавить в корзину
                </button>
            </div>
        )
    }
}

export default Product;