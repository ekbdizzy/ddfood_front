import React, { Component } from "react";
import { connect } from 'react-redux';
import ApiService from "../services/api-services";
import {
    productsRequested,
    productsLoaded,
    productsError
} from "../actions/actions";
import ProductsList from "../components/products-list";
import { bindActionCreators } from "redux";
import siteConfig from "../config";

class ProductsListContainer extends Component {

    componentDidMount() {
        const {
            products_requested,
            products_loaded,
            // products_error
        } = this.props;

        const apiService = new ApiService();
        products_requested();
        apiService.getData(siteConfig.urls.getProductsUrl)
            .then((products) => {
                products_loaded(products);
            })
    }

    render() {
        return (
            <ProductsList/>
        )
    }
}

const mapStateToProps = ({products: {productsList, loading, error}}) => {
    return {
        products: productsList,
        loading,
        error
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        products_requested: bindActionCreators(productsRequested, dispatch),
        products_loaded: bindActionCreators(productsLoaded, dispatch),
        products_error: bindActionCreators(productsError, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsListContainer);