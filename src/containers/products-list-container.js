import React, { Component } from "react";
import { connect } from 'react-redux';
import MockService from "../services/mock-data-service";
import {
    productsRequested,
    productsLoaded,
    productsError
} from "../actions/actions";
import ProductsList from "../components/products-list";
import { bindActionCreators } from "redux";

class ProductsListContainer extends Component {

    componentDidMount() {
        const {
            products_requested,
            products_loaded,
            products_error
        } = this.props;

        products_requested();
        const mockService = new MockService();
        mockService.getProducts()
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