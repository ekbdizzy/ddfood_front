import React, { Component } from "react";
import './product.scss';
import { connect } from "react-redux";

class Product extends Component {


    getItem = (productId, itemsList = []) => {
        return (itemsList.find((item) => item.id === productId))
    };

    render() {


        const {
            product: {id, title, price},
            addToCart,
            removeFromCart,
            allRemoveFromCart,
            itemsList
        } = this.props;

        const item = this.getItem(id, itemsList);

        return (
            <div key={id}
                 className='product'>
                <div className='product_title'>{title}</div>
                <div className='title'>{`Цена: ${price} руб.`}</div>
                <button
                    onClick={addToCart}
                    className='add-to-cart-btn'>
                    {item ? `В корзине ${item.quantity} шт.` : 'Добавить в корзину'}
                </button>

                {(item) ?
                    <div>
                        <button
                            onClick={removeFromCart}
                            className='add-to-cart-btn'>Минус 1
                        </button>

                        <button
                            onClick={allRemoveFromCart}
                            className='add-to-cart-btn'>Удалитьиз корзины
                        </button>
                    </div>
                    : ""
                }

            </div>
        )
    }
}


const mapStateToProps = ({cart: {itemsList}}) => {
    return {
        itemsList
    }
};

export default connect(mapStateToProps)(Product);