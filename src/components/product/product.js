import React, { Component } from "react";
import './product.scss';
import { bindActionCreators } from "redux";

import { itemAddToCart } from "../../actions/actions";
import { connect } from 'react-redux';

class Product extends Component {

    render() {
        const {product: {id, name, price}, addToCart} = this.props;
        return (
            <div key={id}
                 className='product'>
                <div className='product_title'>{name}</div>
                <div className='title'>{`Цена: ${price} руб.`}</div>
                <button
                    onClick={(id) => addToCart(id)}
                    className='add-to-cart-btn'>Добавить в корзину
                </button>
            </div>
        )
    }
}

const mapStateToProps = () => {
    return {}
};


const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(itemAddToCart(id))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Product);