import React, { Component } from "react";
import './items-list.scss';
import Item from "../item";
import MockService from "../../services/mock-data-service";
import Spinner from "../spinner";

class ItemList extends Component {

    state = {
        products: null,
        isLoaded: false
    };

    mockService = new MockService();

    componentDidMount() {
        this.mockService.getProducts()
            .then((products) => {
                this.setState({
                    products: products,
                    isLoaded: true
                })
            })
    }


    render() {

        const {products, isLoaded} = this.state;

        if (!isLoaded) {
            return <Spinner/>
        }

        return (
            <div>
                {
                    products.map((product) => {
                        return <Item product={product}/>
                    })
                }
            </div>
        )
    }
}


export default ItemList;