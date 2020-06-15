import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';

class CartBottomIcon extends Component {

    render() {
        const {totalQuantity, totalPrice} = this.props;
        if (totalQuantity) {
            return (
                <Link to='/checkout/'
                      className='cart-icon'>
                    <div className='icon-title'>
                        {totalQuantity} шт., {totalPrice} руб.
                    </div>
                </Link>
            )
        }

        return (
            <div className='cart-icon'>
                <div className='icon-title'>
                    Корзина пуста
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({cart: {totalQuantity, totalPrice}}) => {
    return {
        totalQuantity,
        totalPrice
    }
};


export default connect(mapStateToProps)(CartBottomIcon);