import React, { Component } from "react";
import './products-list.scss';
import Item from "../product";
import Spinner from "../spinner";
import { connect } from 'react-redux';
import { products } from "../../services/mock-data";

class ProductsList extends Component {

    render() {
        const {products, loading} = this.props;
        if (loading) {
            return <Spinner/>
        }
        return (
            <div>
                {products.map((product) => <Item product={product}/>)}
            </div>
        )
    }
}


const mapStateToProps = ({products: {productsList, loading}}) => {
    return {
        products: productsList,
        loading
    }
};

export default connect(mapStateToProps)(ProductsList);