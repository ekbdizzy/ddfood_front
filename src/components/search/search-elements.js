import React, {Component} from "react";
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import {productsLoaded} from "../../actions/product_actions";
import {connect} from 'react-redux';

class SearchElements extends Component {

    componentDidMount() {
        document.addEventListener('click',
            this.handleCLickOutside, true);
    }

    componentWillUnmount() {
        document.removeEventListener('click',
            this.handleCLickOutside, true);
    }

    handleCLickOutside = (e) => {
        const domNode = ReactDOM.findDOMNode(this);
        const {closeSearchElements} = this.props;

        if (!domNode || !domNode.contains(e.target)) {
            closeSearchElements();
        }
    };

    renderElements = () => {
        const {productsList, closeSearchElements} = this.props;
        return (
            productsList.map(({id, name}) => (
                <Link to={`/product/${id}`}
                      key={id}
                      onClick={() => closeSearchElements()}>
                    <li>{name}</li>
                </Link>))
        )
    };

    redirectToAllProducts = () => {
        const {
            productsList,
            closeSearchElements,
            products_loaded
        } = this.props;

        products_loaded(productsList);
        closeSearchElements()
    };


    render() {
        const {productsList, searchError} = this.props;
        if (searchError) {
            return (
                <ul className='search__list'>
                    <li>{searchError}</li>
                </ul>
            )
        }
        if (productsList) {
            return (
                <ul className='search__list'>
                    {this.renderElements()}
                    <li id='show-all-products'
                        onClick={() => {
                            this.redirectToAllProducts()
                        }}> Показать все варианты
                    </li>
                </ul>
            )
        }
        return ''
    }
}

const mapStateToProps = () => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        products_loaded: bindActionCreators(productsLoaded, dispatch)
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(SearchElements);