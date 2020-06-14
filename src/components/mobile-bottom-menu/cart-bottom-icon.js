import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';

class CartBottomIcon extends Component {

    render() {
        const {totalQuantity, totalPrice} = this.props;
        return (
            <Link to='/checkout/'
                  className='cart-icon'>
                <div className='icon-title'>
                    {totalQuantity ?
                        `${totalQuantity} шт., ${totalPrice} руб.`
                        : 'Корзина пуста'}
                </div>
            </Link>
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