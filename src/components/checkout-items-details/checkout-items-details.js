import React, {Component} from "react";
import './checkout-items-details.scss';
import {connect} from "react-redux";
import {itemAddedToCart, itemRemovedFromCart} from "../../actions/cart_actions";
import {bindActionCreators} from "redux";
import {productsLoaded} from "../../actions/product_actions";

class CheckoutItemsDetails extends Component {

    renderItems(items) {
        const {
            addToCart,
            removeFromCart
        } = this.props;

        return items.map((item) => {

            const {id, name, quantity} = item;

            return (
                <div className='item' key={id}>
                    <div className='item__name'>
                        {name}
                    </div>

                    <div className='item__changeQty'>
                        <div onClick={() => removeFromCart(id)}>–</div>
                        <div>{quantity}</div>
                        <div onClick={() => addToCart(id)}>+</div>
                    </div>

                    <div className='item__price'>
                        {item.price * item.quantity} руб.
                    </div>
                </div>
            )
        })
    };

    render() {
        const cart = JSON.parse(localStorage.getItem('cart')) || this.props.cart;
        return (
            <div className='checkout-items-details'>
                <h1 className='checkout-items-details__title'>Мой заказ</h1>
                {this.renderItems(cart.itemsList)}
            </div>
        )
    }
}

const mapStateToProps = ({cart, products: {productsList, loading}}) => {
    return {
        cart,
        products: productsList,
        loading
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(itemAddedToCart(id)),
        removeFromCart: (id) => dispatch(itemRemovedFromCart(id)),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(CheckoutItemsDetails);

