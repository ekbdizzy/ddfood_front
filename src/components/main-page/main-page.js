import React from "react";
import './main-page.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import siteConfig from '../../config';
import { withRouter } from "react-router-dom";

import CategoriesContainer from "../../containers/categories-list-container";
import ProductsListContainer from "../../containers/products-list-container";
import CartItemsListContainer from "../../containers/cart-items-list-container";

const MainPage = ({history}) => {


    return (
        <section className='main-page'>
            <div className='wrapper'>
                <div className='left-sidebar'>
                    <CategoriesContainer
                        history={history}/>
                </div>

                <div className='main'>

                    <Route path='/'
                           component={ProductsListContainer}
                           exact/>

                    <Route path='/category/:id'
                           render={({match}) => {
                               const {id} = match.params;
                               return <ProductsListContainer
                                   categoryId={id}
                               />
                           }}/>


                </div>
                <div className='right-sidebar'>
                    <CartItemsListContainer/>
                </div>
            </div>
        </section>
    )
};

export default withRouter(MainPage);