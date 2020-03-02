import React from "react";
import './main-page.scss';
import { Route } from 'react-router-dom';
import { withRouter } from "react-router-dom";

import CategoriesContainer from "../../containers/categories-list-container";
import ProductsListContainer from "../../containers/products-list-container";
import CartItemsListContainer from "../../containers/cart-items-list-container";

const MainPage = () => {

    return (
        <section className='main-page'>
            <div className='wrapper'>

                <div className='left-sidebar'>
                    <CategoriesContainer/>
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

                <Route path='/'
                       render={() => {
                           return (
                               <div className='right-sidebar'>
                                   <CartItemsListContainer/>
                               </div>
                           )
                       }}/>

            </div>
        </section>
    )
};

export default withRouter(MainPage);