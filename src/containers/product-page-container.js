import React, {Component} from "react";
import ApiService from "../services/api-services";
import ProductPage from '../components/product-page';
import siteConfig from "../config";
import {mapProductData} from "../services/mappers";
import Spinner from "../components/spinner";
import {itemAddedToCart, itemRemovedFromCart} from "../actions/cart_actions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {productsLoaded} from "../actions/product_actions";

class ProductPageContainer extends Component {

    state = {
        product: null
    };

    componentDidMount() {
        const {
            productId,
            products_loaded
        } = this.props;

        const {getData} = new ApiService();

        getData(`${siteConfig.urls.getProductsUrl}${productId}`)
            .then((product) => {
                const products = [product];
                products_loaded(products);
                this.setState({product: mapProductData(product)})
            })


    }


    render() {
        const {product} = this.state;
        const {addToCart, removeFromCart} = this.props;

        if (!product) {
            return <Spinner/>

        } else {
            return (
                <ProductPage
                    product={product}
                    addToCart={() => addToCart(product.id)}
                    removeFromCart={() => removeFromCart(product.id)}
                />
            )
        }


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
        products_loaded: bindActionCreators(productsLoaded, dispatch)
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ProductPageContainer);