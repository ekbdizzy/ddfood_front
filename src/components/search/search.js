import React, {Component} from "react";
import './search.scss';
import SearchApiService from "../../services/search-api-service";
import SearchElements from "./search-elements";
import {Redirect} from "react-router";


class Search extends Component {

    state = {
        search: '',
        products: null,
        searchError: null
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {products} = this.state;
        if (products !== prevState.products) {
            this.setState((state) => {
                return {products: products}
            })
        }
    }


    handleChangeSearch = (e) => {
        {
            this.setState({search: e.target.value});
            this.getProducts(e.target.value);
        }
    };

    getProductsFromSearch = (e) => {
        e.preventDefault();
        this.getProducts(this.state.search);
    };


    closeSearchElements = () => {
        this.setState({products: null})
    };

    setProductsInState = (productsList) => {
        this.setState({products: productsList})
    };


    clearSearchText = () => {
        this.setState({search: '',})
    };

    

    getProducts = (query) => {
        const {searchProducts} = new SearchApiService();
        if (query && query.length > 1) {
            searchProducts(query)
                .then((result) => {
                    if (result.error) {
                        this.setState({searchError: result.error, products: null});
                        return
                    }
                    this.setState({products: result, searchError: null});
                })
        } else {
            this.setState({products: null, searchError: null});
        }
    };


    render() {
        const {products, searchError, search} = this.state;
        return (
            <div className='search'>
                <form className='form'
                      onSubmit={(e) => this.getProductsFromSearch(e)}>
                    <input placeholder='поиск'
                           value={search}
                           className='input'
                           onChange={(e) => this.handleChangeSearch(e)}
                    />
                    {search && <span className='close-icon'
                                     onClick={() => this.clearSearchText()}>✕</span>}
                    {search && <SearchElements
                        productsList={products}
                        closeSearchElements={this.closeSearchElements}
                        searchError={searchError}
                        setProductsInState={this.setProductsInState}
                    />}
                </form>
            </div>
        )
    }
}


export default Search;