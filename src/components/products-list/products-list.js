import React, { Component } from "react";
import './products-list.scss';
import Product from "../product";
import Spinner from "../spinner";
import { connect } from 'react-redux';
import {
    itemAddedToCart,
    itemRemovedFromCart,
    AllItemsRemovedFromCart
} from "../../actions/actions";

class ProductsList extends Component {

    render() {
        const {
            products, loading,
            addToCart,
            removeFromCart,
            allRemoveFromCart
        } = this.props;

        if (loading) {
            return <Spinner/>
        }
        return (
            <div>
                {
                    products.map((product) =>
                        <Product product={product}
                                 addToCart={() => addToCart(product.id)}
                                 removeFromCart={() => removeFromCart(product.id)}
                                 allRemoveFromCart={() => allRemoveFromCart(product.id)}
                        />)}
            </div>
        );
    }
}

const mapStateToProps = ({products: {productsList, loading}}) => {
    return {
        products: productsList,
        loading
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(itemAddedToCart(id)),
        removeFromCart: (id) => dispatch(itemRemovedFromCart(id)),
        allRemoveFromCart: (id) => dispatch(AllItemsRemovedFromCart(id))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);