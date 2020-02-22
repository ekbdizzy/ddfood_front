import React, { Component } from "react";
import MockService from "../services/mock-data-service";
import { cartLoaded, cartRequested } from "../actions/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Cart from "../components/cart";

class CartItemsListContainer extends Component {

    componentDidMount() {
        const mockService = new MockService();
        const {
            cartLoaded,
            cartRequested
        } = this.props;
        cartRequested();
        mockService.getItemsList()
            .then((itemsList) => {
                cartLoaded(itemsList)
            })
    }

    render() {
        return <Cart/>
    }
}

const mapStateToProps = ({cart: {itemsList, loading}}) => {
    return {
        itemsList,
        loading
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        cartRequested: bindActionCreators(cartRequested, dispatch),
        cartLoaded: bindActionCreators(cartLoaded, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItemsListContainer);

