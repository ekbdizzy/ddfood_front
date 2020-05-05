import React, {Component} from "react";
import {Link, Redirect} from "react-router-dom";
import './search.scss';
import SearchApiService from "../../services/search-api-service";
import Product from "../product";


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
            this.getProducts(e.target.value)
        }
    };

    getProducts = (query) => {
        const {searchProducts} = new SearchApiService();
        if (query.length > 1) {
            searchProducts(query)
                .then((result) => {
                    if (result.error) {
                        this.setState({searchError: result.error});
                        return
                    }
                    console.log(result);
                    this.setState({products: result});
                })
        } else {
            this.setState({products: null});
        }
    };

    renderProducts = (productsList) => {
        if (productsList) {
            return (
                <ul className='search__list'>
                    {productsList.map(({id, name}) => (
                        <Link to={`/product/${id}`}
                              onClick={() => this.setState({products: null})}
                        >
                            <li>{name}</li>
                        </Link>))}
                </ul>
            )
        }
    };


    testRender = (query) => {
        return (
            <div>kkk</div>
        )
    };

    render() {

        const {products, searchError} = this.state;
        console.log(products);
        return (
            <div className='search'>
                <form className='form'
                      // TODO show all
                      onSubmit={() => <Redirect to='/product/'/>}
                >
                <input placeholder='поиск'
                       className='input'
                       onChange={(e) => this.handleChangeSearch(e)}
                />
            </form>
        {
            this.renderProducts(products)
        }
    </div>
    )
    }
    }


    export default Search;