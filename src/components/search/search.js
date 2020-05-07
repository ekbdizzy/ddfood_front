import React, {Component} from "react";
import {Link, Redirect} from "react-router-dom";
import './search.scss';
import SearchApiService from "../../services/search-api-service";
import Product from "../product";
import SearchElements from "./search-elements";


// const SearchList = ({}) => {
//     console.log(list);
//     return (
//         <ul className='search__list'>
//             <div>fdsfds</div>
//             {list.map(({id, name}) => (
//                 <Link to={`/product/${id}`}>
//                     <li>{name}</li>
//                 </Link>))})
//         </ul>
//     )
// };


class Search extends Component {

    state = {
        search: '',
        products: null,
        searchError: null
    };


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
                    {search && <SearchElements
                        productsList={products}
                        closeSearchElements={this.closeSearchElements}
                        searchError={searchError}
                    />}
                </form>
            </div>
        )
    }
}


export default Search;