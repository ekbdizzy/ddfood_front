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

    apiService = new ApiService();

    componentDidMount() {
        const {
            products_requested,
            products_loaded,
            categoryId,
            // products_error
        } = this.props;

        if (categoryId === undefined) {
            products_requested();
            this.apiService.getData(`${siteConfig.urls.getProductsUrl}`)
                .then((products) => {
                    products_loaded(products);
                })
        } else {
            products_requested();
            this.apiService.getData(`${siteConfig.urls.getCategoriesUrl}${categoryId}`)
                .then((products) => {
                    products_loaded(products);
                })
        }
    }

    componentDidUpdate(prevProps) {

        const {
            products_requested,
            products_loaded,
            categoryId
            // products_error
        } = this.props;

        if (categoryId !== prevProps.categoryId) {
            products_requested();
            this.apiService.getData(`${siteConfig.urls.getCategoriesUrl}${categoryId}`)
                .then((products) => {
                    products_loaded(products);
                })
        }
    }

    render() {
        return (
            <ProductsList/>
        )
    }
}

const
    mapStateToProps = ({products: {productsList, loading, error}}) => {
        return {
            products: productsList,
            loading,
            error
        }
    };

const
    mapDispatchToProps = (dispatch) => {
        return {
            products_requested: bindActionCreators(productsRequested, dispatch),
            products_loaded: bindActionCreators(productsLoaded, dispatch),
            products_error: bindActionCreators(productsError, dispatch)
        }
    };

export default connect(mapStateToProps, mapDispatchToProps)(ProductsListContainer);